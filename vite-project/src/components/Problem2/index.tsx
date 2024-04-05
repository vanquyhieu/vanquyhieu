import React, { useState } from 'react';

const CurrencySwapForm: React.FC = () => {
  const [usdAmount, setUsdAmount] = useState<string>('');
  const [vndAmount, setVndAmount] = useState<string>('');

  const usdToVnd = (usd: string): string => {
    const usdNumber = parseFloat(usd.replace(/[^0-9.]/g, ''));
    const vndNumber = usdNumber * 23000;
    return vndNumber.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  };

  const vndToUsd = (vnd: string): string => {
    const vndNumber = parseFloat(vnd.replace(/[^0-9.]/g, ''));
    const usdNumber = vndNumber / 23000;
    return usdNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const handleUsdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    setUsdAmount(amount);
    setVndAmount(usdToVnd(amount));
  };

  const handleVndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    setVndAmount(amount);
    setUsdAmount(vndToUsd(amount));
  };

  return (
    <div>
      <h2>Currency Swap (USD to VND)</h2>
      <div>
        <label htmlFor="usd-amount">USD Amount:</label>
        <input
          type="text"
          id="usd-amount"
          value={usdAmount}
          onChange={handleUsdChange}
          placeholder="Enter USD amount"
          required
        />
      </div>
      <div>
        <label htmlFor="vnd-amount">VND Amount:</label>
        <input
          type="text"
          id="vnd-amount"
          value={vndAmount}
          onChange={handleVndChange}
          placeholder="Enter VND amount"
          required
        />
      </div>
      <button>CONFIRM SWAP</button>

    </div>
  );
};

export default CurrencySwapForm;
