import * as C from "./styles";
import React, { Dispatch, SetStateAction } from "react";
import BagIcon from "../../store/images/Icons/bag.png";
import MenuIcon from "../../store/images/Icons/menu.png";
import LastOrdersIcon from "../../store/images/Icons/orders.png";
import ProfileIcon from "../../store/images/Icons/profile.png";

type Props = {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  activeBag: boolean;
  setActiveBag: Dispatch<SetStateAction<boolean>>;
  activeOrders: boolean;
  setActiveOrders: Dispatch<SetStateAction<boolean>>;
  activeProfile: boolean;
  setActiveProfile: Dispatch<SetStateAction<boolean>>;
};

type manageActive = {
  [key: string]: Dispatch<SetStateAction<boolean>>;
};

export const BottomMenu = ({
  activeMenu,
  setActiveMenu,
  activeBag,
  setActiveBag,
  activeOrders,
  setActiveOrders,
  activeProfile,
  setActiveProfile,
}: Props) => {
  const manageActiveContainer: manageActive = {
    menu: setActiveMenu,
    bag: setActiveBag,
    orders: setActiveOrders,
    profile: setActiveProfile,
  };

  const handleActiveMenu = (e: React.MouseEvent) => {
    let activeContainer: string = e.currentTarget.id;

    Object.keys(manageActiveContainer).forEach((key) => {
      key === activeContainer
        ? manageActiveContainer[key](true)
        : manageActiveContainer[key](false);

      //TODO: Navegate to selected menu
    });
  };
  return (
    <C.BottomMenu>
      <C.LabelImported
        id="menu"
        Active={activeMenu}
        onClick={(e) => handleActiveMenu(e)}
      >
        <C.LabelTextImported>
          <C.Icon src={MenuIcon} />
        </C.LabelTextImported>
        <C.LabelTextImported>menu</C.LabelTextImported>
      </C.LabelImported>
      <C.LabelImported
        id="bag"
        Active={activeBag}
        onClick={(e) => handleActiveMenu(e)}
      >
        <C.LabelTextImported>
          <C.Icon src={BagIcon} />
        </C.LabelTextImported>
        <C.LabelTextImported>$34.90</C.LabelTextImported>
      </C.LabelImported>
      <C.LabelImported
        id="orders"
        Active={activeOrders}
        onClick={(e) => handleActiveMenu(e)}
      >
        <C.LabelTextImported>
          <C.Icon src={LastOrdersIcon} />
        </C.LabelTextImported>
        <C.LabelTextImported>orders</C.LabelTextImported>
      </C.LabelImported>
      <C.LabelImported
        id="profile"
        Active={activeProfile}
        onClick={(e) => handleActiveMenu(e)}
      >
        <C.LabelTextImported>
          <C.Icon src={ProfileIcon} />
        </C.LabelTextImported>
        <C.LabelTextImported>profile</C.LabelTextImported>
      </C.LabelImported>
    </C.BottomMenu>
  );
};
