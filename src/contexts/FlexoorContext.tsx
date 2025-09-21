import { createContext, ReactNode, useContext, useState } from 'react';

interface FlexoorContextType {
  hlnInput: string;
  isHlnValid: boolean;
  isHlnControlled: boolean;
  setHlnInput: (input: string) => void;
}

const FlexoorContext = createContext<FlexoorContextType | undefined>(undefined);

export const FlexoorProvider = ({ children }: { children: ReactNode }) => {
  const [hlnInput, setHlnInput] = useState<string>('');
  const isHlnValid = true;
  const isHlnControlled = true;
  return (
    <FlexoorContext.Provider value={{ hlnInput, isHlnValid, isHlnControlled, setHlnInput }}>
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
