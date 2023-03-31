import styled from "styled-components";

export const Container = styled.div``;

export const RepeatLastOrderCTA = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;

  height: 36px;

  border: 2px solid #cccccc;
  border-radius: 10px;
  flex: none;
  font-weight: lighter;
  color: #fff;
  background: #06bf00;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #06a300;
  }
`;

export const Divider = styled.hr`
  margin-bottom: 8px;
`;

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

export const Icon = styled.img`
  width: 17.5px;
  height: 19.99px;
`;

export const LabelText = styled.p`
  font-size: 14px;
`;

export const MenuContent = styled.div`
  padding: 8px;
  width: 100%;
  margin-bottom: 47px;
`;

export const Saudation = styled.p`
  font-weight: lighter;
  margin-bottom: 8px;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
`;

export const CategorySingle = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

export const CategoryTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ItemsList = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow-x: scroll;
`;

export const CardItem = styled.div`
  margin-right: 8px;
  scale: 0.95;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    scale: 1;
  }
`;

export const ItemImage = styled.img`
  width: 212px;
  height: 151px;

  border: 1px solid #cccccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ItemTitle = styled.p`
  color: #fc6fff;
  font-weight: bold;
  width: 212px;
`;

export const ItemAdtInfo = styled.span`
  color: #6d2f2f;
  font-weight: lighter;
`;

export const PriceTime = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4px;
  gap: 16px;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #69eb54;
`;

export const Time = styled.p`
  font-size: 14px;
  color: #776262;
`;
