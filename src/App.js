import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components/macro";
import ConfettiStars from "./ConfettiStars";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import Bill from "./Bill";
import ATM from "./ATM";

const SpendContainer = styled.div`
  background-color: ${({ saveStage }) => (saveStage ? "#69ba66" : "#812b4a")};
  position: relative;
  border-radius: 5px;
  flex: 1;
  max-height: 200px;
  margin: 10px 5px;
  overflow: hidden;
  border: solid 7px ${({ saveStage }) => (saveStage ? "#376634" : "#3e0e0e")};
  padding-top: 45px;
  transition: all 0.5s;
  div {
    overflow: initial;
  }
`;
const Instructions = styled.div`
  padding: 20px;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({ displayy }) => (displayy ? 1 : 0)};
  transition: opacity 0.2s;
`;
const StageInstructions = styled(Instructions)`
  color: ${({ saveStage }) => (saveStage ? "#d4e8d7" : "#b47f92")};
  transition: all 0.5s;
`;
const WalletInstructions = styled(Instructions)`
  color: #8f8898;
`;
const SpendButton = styled.button`
  position: absolute;
  right: 30px;
  top: 0px;
  margin: 5px;
  color: ${({ saveStage }) => (saveStage ? "#376634" : "#3e0e0e")};
  border: none;
  border-radius: 4px;
  h1 {
    margin: 0px;
    font-size: 20px;
  }
`;
const SaveButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 5px;
  color: #3e0e0e;
  border: none;
  border-radius: 4px;
  h1 {
    margin: 0px;
    font-size: 20px;
    color: white;
  }
  background-color: ${({ saveStage }) => (!saveStage ? "#69ba66" : "#812b4a")};
`;
const SpendZone = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;
const WalletContainer = styled.div`
  margin: 5px 0px;
  position: relative;
  background-color: #4a4655;
  border: solid 7px #292232;
  border-radius: 5px;
  flex: 1;
  max-height: 200px;
  padding-top: 30px;
  padding-bottom: 40px;
  margin: 0px 5px;
  overflow: visible;
  margin-bottom: -50px;
  margin-top: 10px;
`;
const WalletBackground = styled.div`
  background-color: red;
  position: absolute;
  height: 100vh;
  left: -7px;
  right: -7px;
  background-color: #4a4655;
  border: solid 7px #292232;
  border-top: none;
`;
const Wallet2Container = styled.div`
  max-height: 200px;
  margin-left: -12px;
  margin-right: 12px;
  margin-top: -140px;
  div {
    overflow: initial;
  }
`;
const WalletTitle = styled.h1`
  position: absolute;
  color: #8f8898;
  right: 5px;
  top: 0px;
  font-size: 25px;
  margin: 0px;
`;
const WalletZone = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const Title = styled.div`
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
const TitleRow = styled.div`
  margin-top: 5px;
  display: flex;
`;
const QuestionIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  div {
    border-radius: 100%;
    border: solid 2px black;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

function onScroll(event){
  event.preventDefault();
}
window.addEventListener('scroll', onScroll, {capture: true, passive: false})

function App() {
  const [cookies, setCookie] = useCookies(["cookie-name"]);
  const cookie = cookies?.WalletSimulator;
  const [wallet1, setWallet1] = useState(cookie?.wallet1 || []);
  const [wallet2, setWallet2] = useState(cookie?.wallet2 || []);
  const [saveStage, setSaveStage] = useState(false);
  const [stage, setStage] = useState([]);
  const [dissapear, setDissapear] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const save = (wallet1, wallet2) => {
    setCookie("WalletSimulator", { wallet1, wallet2 });
  };

  const withdraw = (newBills1, newBills2) => {
    setWallet1([...wallet1, ...newBills1]);
    setWallet2([...wallet2, ...newBills2]);
    save([...wallet1, ...newBills1], [...wallet2, ...newBills2]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId === "wallet1") {
      wallet1.splice(result.source.index, 1);
    }
    if (result.source.droppableId === "wallet2") {
      wallet2.splice(result.source.index, 1);
    }
    if (result.source.droppableId === "spend") {
      stage.splice(result.source.index, 1);
    }

    if (result.destination.droppableId === "wallet1") {
      wallet1.splice(result.destination.index, 0, result.draggableId);
    }
    if (result.destination.droppableId === "wallet2") {
      wallet2.splice(result.destination.index, 0, result.draggableId);
    }
    if (result.destination.droppableId === "spend") {
      stage.splice(result.destination.index, 0, result.draggableId);
    }

    setWallet1([...wallet1]);
    setWallet2([...wallet2]);
    setStage([...stage]);
  };

  return (
    <>
      <div>
        <TitleRow>
          <div className="flex1"></div>
          <Title>
            <b>Wallet Simulator</b>
          </Title>
          <QuestionIcon>
            <Link to="/about">
              <div>
                <b>?</b>
              </div>
            </Link>
          </QuestionIcon>
        </TitleRow>
        {saveSuccess && <ConfettiStars run={true} />}
        <ATM
          withdraw={withdraw}
          billCount={wallet1.length + wallet2.length + stage.length}
          wallet1Length={wallet1.length}
        />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <SpendContainer saveStage={saveStage}>
          <StageInstructions saveStage={saveStage} displayy={stage.length <= 0}>
            <b>
              {saveSuccess ? "🌟" : "Drag dollars here from your wallet below"}
            </b>
          </StageInstructions>
          <SpendButton
            disabled={stage.length <= 0}
            saveStage={saveStage}
            onClick={() => {
              setDissapear(true);
              setSaveSuccess(false);
              save(wallet1, wallet2);
              setTimeout(() => {
                setStage([...[]]);
                saveStage && setSaveSuccess(true);
                setDissapear(false);
              }, 500);
            }}
          >
            <h1>{saveStage ? "Save" : "Spend"}</h1>
          </SpendButton>
          <SaveButton
            saveStage={saveStage}
            onClick={() => setSaveStage(!saveStage)}
          >
            <h1>{`>`}</h1>
          </SaveButton>
          <Droppable
            className="h100p"
            droppableId="spend"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <SpendZone ref={provided.innerRef} {...provided.droppableProps}>
                {stage.map((x, index) => {
                  return (
                    <Bill
                      dissapear={dissapear}
                      key={x}
                      bid={x}
                      index={index}
                    ></Bill>
                  );
                })}
                {provided.placeholder}
              </SpendZone>
            )}
          </Droppable>
        </SpendContainer>
        <WalletContainer>
          {/* <WalletBackground /> */}
          <WalletInstructions displayy={wallet1.length + wallet2.length <= 0}>
            <b>Withdraw dollars from the ATM above</b>
          </WalletInstructions>
          <WalletTitle>Wallet</WalletTitle>
          <Droppable droppableId="wallet1" direction="horizontal">
            {(provided, snapshot) => (
              <WalletZone ref={provided.innerRef} {...provided.droppableProps}>
                {wallet1.map((x, index) => {
                  return <Bill key={x} bid={x} index={index}></Bill>;
                })}
                {provided.placeholder}
              </WalletZone>
            )}
          </Droppable>
          <Wallet2Container>
            <Droppable droppableId="wallet2" direction="horizontal">
              {(provided, snapshot) => (
                <WalletZone
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {wallet2.map((x, index) => {
                    return <Bill key={x} bid={x} index={index}></Bill>;
                  })}
                  {provided.placeholder}
                </WalletZone>
              )}
            </Droppable>
          </Wallet2Container>
        </WalletContainer>
      </DragDropContext>
    </>
  );
}

export default App;
