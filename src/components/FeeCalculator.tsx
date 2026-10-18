"use client";

import { useState } from "react";

const FEE = 0.12;

const lakh = (n: number) => `₹${n % 1 === 0 ? n : n.toFixed(1)}L`;

export function FeeCalculator() {
  const [ctc, setCtc] = useState(25);

  return (
    <div className="mt-10 rounded-[18px] bg-mist p-6 text-left">
      <div className="flex items-baseline justify-between">
        <label htmlFor="ctc" className="type-small text-muted">
          Fixed annual CTC
        </label>
        <p className="text-[17px] font-semibold">{lakh(ctc)}</p>
      </div>
      <input
        id="ctc"
        type="range"
        min={5}
        max={100}
        step={1}
        value={ctc}
        onChange={(e) => setCtc(Number(e.target.value))}
        className="mt-3 w-full"
      />
      <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
        <p className="type-small text-muted">Our fee, on joining</p>
        <p className="text-[24px] font-semibold tracking-[-0.01em] text-accent">{lakh(ctc * FEE)}</p>
      </div>
    </div>
  );
}
