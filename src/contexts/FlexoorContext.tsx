import { wagmiConfig } from '@/constants/wagmiConfig';
import { createContext, ReactNode, useContext, useState } from 'react';
import { signMessage } from 'wagmi/actions';

interface FlexoorContextType {
  hlnInput: string;
  isHlnValid: boolean;
  isHlnControlled: boolean;
  step: number;
  setHlnInput: (input: string) => void;
  setStep: (step: number) => void;
  signMsg: () => Promise<void>;
  generateProof: () => Promise<void>;
  attachProof: () => Promise<void>;
}

const FlexoorContext = createContext<FlexoorContextType | undefined>(undefined);

export const FlexoorProvider = ({ children }: { children: ReactNode }) => {
  const [hlnInput, setHlnInput] = useState<string>('');
  const isHlnValid = true;
  const isHlnControlled = true;
  const [step, setStep] = useState<number>(0);

  const signMsg = async () => {
    try {
      const message = 'Welcome to Flexoor! Click to sign in.';
      const signature = await signMessage(wagmiConfig, {
        message,
      });
      console.log('Signature:', signature);
      setStep(3);
    } catch (error) {
      console.error('Error signing message:', error);
      return;
    }
  };

  const generateProof = async () => {
    try {
      const message = 'Generating proof';
      const signature = await signMessage(wagmiConfig, {
        message,
      });
      console.log('Signature:', signature);
      setStep(4);
    } catch (error) {
      console.error('Error signing message:', error);
      return;
    }
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
        setHlnInput,
        step,
        setStep,
        signMsg,
        generateProof,
        attachProof,
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
