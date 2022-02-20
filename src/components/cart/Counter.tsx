import React from "react";
import { CounterWrapper } from "../../assets/styles/cart/CounterWrapper";

type Props = {
  amount: number,
  id: any,
  onAdd: () => void,
  onRemove: () => void,
}

const Counter = ({ amount, onAdd, onRemove }: Props) => {

  return (
    <CounterWrapper>
      <button onClick={ () => onRemove() }>
        <span>-</span>
      </button>
      <input type="number" min="1" max="100" value={ amount } readOnly={ true }/>
      <button onClick={ () => onAdd() }>
        <span>+</span>
      </button>
    </CounterWrapper>
  );
};

export default Counter;