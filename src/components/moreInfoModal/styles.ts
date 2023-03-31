import styled from "styled-components";

export const ModalMask = styled.div<{ display: boolean }>`
  display: ${(props) => (props.display ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.87);
  z-index: 99;
  transition: 0.5s;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  max-width: 400px;
  max-height: 495px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  background: #ffffff;
  border-radius: 20px;
`;

export const ModalCloseIcon = styled.div`
  padding: 8px;
  position: absolute;
  width: 25px;
  height: 32px;
  right: 0;
  top: 0px;

  background: rgba(30, 30, 30, 0.62);
  border-radius: 0px 20px;
  z-index: 2;
  color: #ffffff;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const ListPhotos = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0px 0px 8px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  width: 100%;
  height: 251px;
  left: 0px;
  top: 0px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  flex: none;
`;

export const Title = styled.h3`
  padding: 0px 0px 8px 8px;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  color: #fc6fff;
`;

export const Description = styled.p`
  padding: 0px 0px 8px 8px;
  width: 100%;
  font-weight: lighter;
  font-size: 16px;
  color: #6d2f2f;
`;

export const ForecastTime = styled.p`
  text-align: center;
  padding: 8px 8px 4px;
  width: 100%;

  font-weight: bold;
  font-size: 16px;
  color: #776262;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 279px;
  height: 44px;
  background: #69eb54;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgb(30 213 0);
    border: 1px solid #aaa;
    border-radius: 20px;
  }
`;

export const Icon = styled.img``;
