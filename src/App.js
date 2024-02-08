import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Tip Calculator - State & Props</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(0)

  const tip = bill * ((percent1 + percent2) / 2 / 100)

  function handleReset() {
    setBill('')
    setPercent1(0)
    setPercent2(0)
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percent1} onSelect={setPercent1}>How was the service?</SelectPercentage>
      <SelectPercentage percent={percent2} onSelect={setPercent2}>What did your friend think of the service?</SelectPercentage>
      {bill > 0 && <>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
      </>}
    </div>
  )
}

function BillInput({bill, onSetBill}) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input 
        type="text" 
        placeholder="Bill value"
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))} />
    </div>
  )
}

function SelectPercentage({children, percent, onSelect}) {
  return (
    <div>
      <label>{children}</label>
      <select value={percent} onChange={e => onSelect(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>Ok (5%)</option>
        <option value='10'>Good (10%)</option>
        <option value='20'>Amazing (20%)</option>
      </select>
    </div>
  )
}

function Output({bill, tip}) {
  return <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
}

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>
}