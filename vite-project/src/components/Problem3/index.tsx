import React, { useMemo } from "react";
import classes from './index.module.css';
import WalletRow from "./WalletRow";
import useWalletBalances from "../../hooks/useWalletBalances";
import usePrices from "../../hooks/usePrices";


interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
  usdValue: number;
}

interface Props {
  children?: React.ReactNode;
}

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
  const { balances } = useWalletBalances(); // Assuming useWalletBalances is from Redux or Zustand
  const { prices } = usePrices(); // Assuming usePrices is from Redux or Zustand

  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      case "Zilliqa":
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  const sortedAndFormattedBalances = useMemo(() => {
    const sortedBalances = balances
      .filter((balance: WalletBalance) => getPriority(balance.blockchain) > -99 && balance.amount <= 0)
      .sort((lhs: WalletBalance, rhs: WalletBalance) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
    
    return sortedBalances.map((balance: FormattedWalletBalance) => {
      const usdValue = prices && prices[balance.currency] ? prices[balance.currency] * balance.amount : 0;
      return {
        ...balance,
        formatted: balance.amount.toFixed(),
        usdValue,
      };
    });
  }, [balances, prices]);

  return (
    <div {...rest}>
      {/* Render rows */}
      {sortedAndFormattedBalances.map((balance: FormattedWalletBalance, index: number) => (
        <WalletRow 
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={balance.usdValue}
          formattedAmount={balance.formatted}
        >
          
      </WalletRow>
      ))}
      {children}
    </div>
  );
};

export default WalletPage;
