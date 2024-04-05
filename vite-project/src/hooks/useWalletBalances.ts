import { create } from 'zustand';

// Define your interfaces for wallet balances
interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
  usdValue: number;
}

// Define the state type
interface WalletState {
  balances: FormattedWalletBalance[];
  setBalances: (balances: FormattedWalletBalance[]) => void;
}

// Create the custom hook
const useWalletBalances = create<WalletState>((set) => ({
  balances: [], // Initial state with an empty array
  setBalances: (balances) => set({ balances }), // Function to update the balances
}));

export default useWalletBalances;
