import { create } from 'zustand';

// Define your interface for prices
interface Prices {
  [currency: string]: number; // Mapping of currency to price
}

// Define the state type
interface PricesState {
  prices: Prices;
  setPrices: (prices: Prices) => void;
}

// Create the custom hook
const usePrices = create<PricesState>((set) => ({
  prices: {}, // Initial state with an empty object
  setPrices: (prices) => set({ prices }), // Function to update the prices
}));

export default usePrices;
