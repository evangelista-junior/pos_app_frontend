import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label<{ Active: boolean }>`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 8px 10px;
  width: 79px;
  height: 69px;
  cursor: pointer;
  border-radius: 0px 0px 10px 10px;
  transition: 0.3s;
  ${(props) =>
    props.Active
      ? `scale: 1; 
  background-color: rgb(109, 47, 47);
  border-radius: 10px;`
      : "scale: 0.92"};

  &:hover {
    scale: 1;
    background-color: rgb(109, 47, 47);
  }
`;

export const LabelText = styled.p`
  font-size: 14px;
`;

export const BottomMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;

  position: fixed;
  width: 100%;
  height: 57px;
  left: 0px;
  bottom: 0;

  background: #776262;
`;
