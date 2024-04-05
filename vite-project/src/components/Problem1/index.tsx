import React, { useState } from 'react';
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './sumToN';

const ThreeSumToN = () => {
  const [target, setTarget] = useState<string>('');
  const [results, setResults] = useState<{ sumA: string; sumB: string; sumC: string }>({
    sumA: '',
    sumB: '',
    sumC: ''
  });

  const calculateSums = (target: number) => {
    const sumA = sum_to_n_a(target);
    const sumB = sum_to_n_b(target);
    const sumC = sum_to_n_c(target);
    setResults({ sumA: sumA.toString(), sumB: sumB.toString(), sumC: sumC.toString() });
  };

  const onClick = () => {
    const targetNumber = parseInt(target);
    if (!isNaN(targetNumber)) {
      calculateSums(targetNumber);
    } else {
      // Handle invalid input
      alert('Please enter a valid number.');
    }
  };

  return (
    <div>
      <h2>Three ways to sum to n</h2>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Enter target number"
      />
      <button onClick={onClick}>Calculate</button>
      <div>
        <h3>Results:</h3>
        <p>sum_to_n_a result: {results.sumA}</p>
        <p>sum_to_n_b result: {results.sumB}</p>
        <p>sum_to_n_c result: {results.sumC}</p>
      </div>
    </div>
  );
};

export default ThreeSumToN;
