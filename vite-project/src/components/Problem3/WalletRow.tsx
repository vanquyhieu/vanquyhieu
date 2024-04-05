import React from 'react';

interface Props {
  amount: number;
  usdValue: number;
  formattedAmount: string;
  className?: string; // Make className prop optional
}

const WalletRow: React.FC<Props> = ({ amount, usdValue, formattedAmount, className }) => {
  return (
    <div className={className}> {/* Use className prop here */}
      {amount}, {usdValue}, {formattedAmount}
    </div>
  );
};

export default WalletRow;
