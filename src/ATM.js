import React, { useState, useRef } from "react";
import styled from "styled-components/macro";

const MAX_BILLs = 30;

const ATMContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ ATMOn }) => (ATMOn ? "340px;" : "35px")};
  transition: height 0.9s;
  background-color: #506496;
  border: solid 7px #1f2537;
  margin: 10px 5px;
  margin-top: -10px;
  border-radius: 5px;
  overflow: ${({ ATMOn }) => (ATMOn ? "scroll;" : "hidden")};
  color: white;
`;

const ATMButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;
  h1 {
    margin: 0px;
  }
`;

const DollarArrowsRow = styled.div`
  width: 100%;
  display: flex;
`;
const DollarArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 0px;
  width: 100px;
  .value {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
  }
`;
const DollarArrowButtons = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  h1 {
    margin: 0px;
    font-size: 20px;
  }
`;

const DollarTally = styled.div`
  color: white;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

function makeBill(value) {
  return `${Math.random()}|${value}`;
}

function DollarArrows({ totalCount, count, setCount, children }) {
  return (
    <>
      <DollarArrowsRow>
        <div className="row flex1"></div>
        <DollarArrowsContainer>
          <DollarArrowButtons
            disabled={count <= 0}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <h1>{`<`}</h1>
          </DollarArrowButtons>
          <div className="value">{children}</div>
          <DollarArrowButtons
            disabled={totalCount >= MAX_BILLs}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <h1>{`>`}</h1>
          </DollarArrowButtons>
        </DollarArrowsContainer>
        <DollarTally>x {count}</DollarTally>
      </DollarArrowsRow>
    </>
  );
}
const ATMCloseButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  button {
    background-color: #91a2d1;
    flex: 1;
    border: none;
    border-radius: 5px 5px 0px 0px;
    margin: 0px 1px;
    font-size: 20px;
  }
`;

export default function ATM({ withdraw, billCount, wallet1Length }) {
  const [ATMOn, setATMOn] = useState(false);
  const [ATM1, setATM1] = useState(0);
  const [ATM5, setATM5] = useState(0);
  const [ATM10, setATM10] = useState(0);
  const [ATM20, setATM20] = useState(0);
  const [ATM50, setATM50] = useState(0);
  const ATMRef = useRef(undefined);

  const ATMCount = ATM1 + ATM5 + ATM10 + ATM20 + ATM50;
  const totalCount = ATMCount + billCount;

  return (
    <ATMContainer ref={ATMRef} ATMOn={ATMOn}>
      <div>
        <ATMButton
          className={`row justify-between ${!ATMOn && "pointer"}`}
          onClick={() => {
            !ATMOn && setATMOn(true);
            setATM1(0);
            setATM5(0);
            setATM10(0);
            setATM20(0);
            setATM50(0);
          }}
        >
          <div className="flex1"></div>
          <div className="row justify-center flex1">
            <h1>ATM</h1>
          </div>
          <div className="flex1"></div>
        </ATMButton>
      </div>
      <h3 className="column align-center">
        <DollarArrows totalCount={totalCount} count={ATM1} setCount={setATM1}>
          $1
        </DollarArrows>
        <DollarArrows totalCount={totalCount} count={ATM5} setCount={setATM5}>
          $5
        </DollarArrows>
        <DollarArrows totalCount={totalCount} count={ATM10} setCount={setATM10}>
          $10
        </DollarArrows>
        <DollarArrows totalCount={totalCount} count={ATM20} setCount={setATM20}>
          $20
        </DollarArrows>
        <DollarArrows totalCount={totalCount} count={ATM50} setCount={setATM50}>
          $50
        </DollarArrows>
        <b>
          <h3 className="row my5">
            <div className="row flex1">Total: </div>
            <div className="row flex1">
              ${ATM1 + ATM5 * 5 + ATM10 * 10 + ATM20 * 20 + ATM50 * 50}
            </div>
          </h3>
        </b>
      </h3>
      <ATMCloseButton>
        <button
          onClick={() => {
            setATMOn(false);
            ATMRef.current.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <b>Cancel</b>
        </button>
        {ATMCount > 0 && (
          <button
            onClick={() => {
              let newBills = [];
              const walletSpace = 15 - wallet1Length;
              setATMOn(false);
              for (let i = 0; i < ATM1; i++) {
                newBills = [...newBills, makeBill(1)];
              }
              for (let i = 0; i < ATM5; i++) {
                newBills = [...newBills, makeBill(5)];
              }
              for (let i = 0; i < ATM10; i++) {
                newBills = [...newBills, makeBill(10)];
              }
              for (let i = 0; i < ATM20; i++) {
                newBills = [...newBills, makeBill(20)];
              }
              for (let i = 0; i < ATM50; i++) {
                newBills = [...newBills, makeBill(50)];
              }

              const newBills1 = newBills.splice(0, walletSpace);
              const newBills2 = newBills;
              withdraw(newBills1, newBills2);
            }}
          >
            <b>Withdraw</b>
          </button>
        )}
      </ATMCloseButton>
    </ATMContainer>
  );
}
