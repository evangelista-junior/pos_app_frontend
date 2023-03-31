import styled from "styled-components";
import { LabelText, Label } from "../../pages/mainPage/styles";

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

export const LabelImported = styled(Label)``;

export const LabelTextImported = styled(LabelText)``;

export const Icon = styled.img`
  width: 17.5px;
  height: 19.99px;
`;
