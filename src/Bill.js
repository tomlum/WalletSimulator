import React from "react";
import styled from "styled-components/macro";
import { Draggable } from "react-beautiful-dnd";

const BillContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100px;
  min-width: 10px;
  height: 200px;
  margin-right: 5px;
`;
const BillCover = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 100px;
  height: 200px;
  background-color: #b5bc89;
  border: solid 4px #b5bc89;
  color: #1b3d1b;
  margin-top: ${({ dissapear }) => (dissapear ? "-1000px" : "0px")};
  transition: all 1s;
  div {
    h2 {
      margin: 0px;
      border: solid 2px #1b3d1b;
      border-radius: 100%;
      padding: 5px;
      width: fit-content;
    }
    padding: 5px;
    height: 174px;
    color: #1b3d1b;
    border: solid 4px #1b3d1b;
    background-color: #8fa07c;
  }
`;

function readBill(str) {
  return str.split("|")[1];
}

export default function Bill({ bid, index, dissapear }) {
  return (
    <Draggable draggableId={`${bid}`} index={index}>
      {(provided, snapshot) => (
        <BillContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <BillCover dissapear={dissapear}>
            <div>
              <h2>{readBill(bid)}</h2>
            </div>
          </BillCover>
        </BillContainer>
      )}
    </Draggable>
  );
}
