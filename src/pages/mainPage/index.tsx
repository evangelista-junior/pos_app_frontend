import * as C from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MenuPage } from "../menuPage";
import { BottomMenu } from "../../components/bottomMenu";

const daysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDayofWeek = () => {
  let day: number = new Date().getDay();
  return daysOfWeek[day];
};

export const MainPage = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [activeBag, setActiveBag] = useState<boolean>(false);
  const [activeOrders, setActiveOrders] = useState<boolean>(false);
  const [activeProfile, setActiveProfile] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const currentDayOfWeek: string = getDayofWeek();

  return (
    <C.Container>
      {activeMenu ? (
        <MenuPage auth={auth} currentDayOfWeek={currentDayOfWeek} />
      ) : (
        ""
      )}

      <BottomMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeBag={activeBag}
        setActiveBag={setActiveBag}
        activeOrders={activeOrders}
        setActiveOrders={setActiveOrders}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
      />
    </C.Container>
  );
};
