import { hostNetwork, wagmiConfig } from '@/config/wagmiConfig';
import { getTier, Tier, tiers } from '@/constants/tiers';
import { useGetNameData } from '@/hooks/useGetNameData';
import { generateProof } from '@/lib/proof';
import { type ProofRequest, type SubmitionInputs } from '@/lib/types';
import { FLEXOR_ADDRESS } from '@/lib/utils';
import { createContext, type ReactNode, useContext, useMemo, useState } from 'react';
import { formatUnits, namehash, parseEther, toHex, zeroAddress } from 'viem';
import { useAccount, useBalance, useSwitchChain, useWriteContract } from 'wagmi';
import { signMessage } from 'wagmi/actions';
import abi from '../../public/Flexor.json';

interface FlexoorContextType {
  hlnInput: string;
  isHlnValid: boolean;
  isHlnControlled: boolean;
  step: number;
  setHlnInput: (input: string) => void;
  setStep: (step: number) => void;
  attachProof: () => Promise<void>;
  handleGenerate: () => Promise<void>;
  tier: Tier;
  isHlnLoading: boolean;
  submissionResult: string | null;
  balanceTarget: number;
  started: boolean;
  progress: number;
  status: string;
  submitionInput: SubmitionInputs;
  proofGenerated: boolean;
  isGenerating: boolean;
}

const FlexoorContext = createContext<FlexoorContextType | undefined>(undefined);

export const FlexoorProvider = ({ children }: { children: ReactNode }) => {
  const [hlnInput, setHlnInput] = useState<string>('');

  const [step, setStep] = useState<number>(0);

  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [submitionInput, setSubmitionInput] = useState({
    proof: Uint8Array.from(Array(16224).fill(0)),
    publicInputs: Uint8Array.from(Array(97).fill(0)),
    chainId: 0,
    blockNumber: BigInt(0),
    flexor_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    flexor_hl: '.hl',
    full_message: '',
    tip: BigInt(10) ** BigInt(16) * BigInt(5),
  } as SubmitionInputs);
  const [proofGenerated, setProofGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);
  const [balanceTarget, setBalanceTarget] = useState(0);
  const [started, setStarted] = useState(false);

  const { chainId, address } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const { writeContractAsync } = useWriteContract();

  const { data: nameData, isLoading } = useGetNameData(
    namehash(hlnInput),
    namehash(hlnInput.replace('.hl', ''))
  );

  console.log('nameData', nameData);

  const isHlnValid = useMemo(() => {
    return hlnInput.includes('.hl') && nameData && nameData.owner !== zeroAddress;
  }, [nameData, hlnInput]);

  const isHlnControlled = useMemo(() => {
    return nameData?.owner === address;
  }, [nameData, address]);

  const { data: balance } = useBalance({
    address: address,
  });

  const { tier } = useMemo(() => {
    if (balance) {
      return {
        tier: getTier(Number(formatUnits(balance.value, balance.decimals))),
      };
    }
    return {
      tier: tiers.crab,
    };
  }, [balance]);

  const handleGenerate = async () => {
    const values = {
      balance: tier.min,
      name: hlnInput,
    } as ProofRequest;
    console.log('😵‍💫 generating proof for ', values.name);
    setStarted(true);
    setStatus('Starting...');
    setProgress(5);
    setIsGenerating(true);
    setProofGenerated(false);
    setSubmissionResult(null);

    try {
      await generateProof(
        values,
        (step, label) => {
          setProgress(step);
          setStatus(label);
        },
        (inputs: SubmitionInputs) => {
          setSubmitionInput(inputs);
        }
      );
      setStatus('Proof ready');
      setProgress(100);
      setProofGenerated(true);
      setBalanceTarget(values.balance);
    } catch (error) {
      console.error('Proof generation error:', error);
      setSubmissionResult(
        `Proof generation failed: ${error instanceof Error ? error.message : String(error)}`
      );
      setIsGenerating(false);
      setProgress(0);
      setStatus('');
    }
  };

  const handleActualProofSubmission = async (tip: string) => {
    console.log('Submitting proof on-chain...');
    if (chainId !== hostNetwork.id) {
      await switchChainAsync({ chainId: hostNetwork.id });
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const tx = await writeContractAsync({
      abi,
      address: FLEXOR_ADDRESS,
      functionName: 'submitClaim',
      args: [
        toHex(submitionInput.proof),
        toHex(submitionInput.publicInputs),
        submitionInput.chainId,
        submitionInput.blockNumber,
        submitionInput.flexor_address ?? '0x0000000000000000000000000000000000000000',
        submitionInput.flexor_hl,
        submitionInput.full_message,
      ],
      value: parseEther(tip),
      chainId: hostNetwork.id,
    });
    console.log(tx);
  };

  const attachProof = async () => {
    try {
      const message = 'Attaching proof';
      const signature = await signMessage(wagmiConfig, {
        message,
      });
      console.log('Signature:', signature);
      setStep(6);
    } catch (error) {
      console.error('Error signing message:', error);
      return;
    }
  };

  return (
    <FlexoorContext.Provider
      value={{
        hlnInput,
        isHlnValid,
        isHlnControlled,
        step,
        setHlnInput,
        setStep,
        attachProof,
        handleGenerate,
        isGenerating,
        submissionResult,
        balanceTarget,
        started,
        progress,
        status,
        submitionInput,
        proofGenerated,
        tier,
        isHlnLoading: isLoading,
      }}
    >
      {children}
    </FlexoorContext.Provider>
  );
};

export const useFlexoor = () => {
  const context = useContext(FlexoorContext);
  if (context === undefined) {
    throw new Error('useFlexoor must be used within a FlexoorProvider');
  }
  return context;
};
