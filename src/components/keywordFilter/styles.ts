import styled from "styled-components";

export const KeywordFilters = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  margin-bottom: 8px;

  overflow-x: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  height: 36px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  flex: none;
  font-weight: ${(props) => (props.active ? "bold" : "lighter")};
  color: ${(props) => (props.active ? "#FFF" : "#000")};
  background-color: ${(props) => (props.active ? "#6D2F2F" : "")};
  scale: ${(props) => (props.active ? 1.02 : 1)};

  &:hover {
    scale: 0.97;
    background-color: rgb(119, 98, 98);
  }
`;
