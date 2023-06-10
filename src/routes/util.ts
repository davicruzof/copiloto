import Home from "../assets/home.png";
import Calendar from "../assets/calendar.png";
import Calculator from "../assets/calculator.png";
import Profile from "../assets/user.png";

const ICON_NAME = {
  Home: "home",
  Calendar: "calendar",
  Calculator: "calculator",
  Profile: "profile",
};

export const getIconTab = (tabName: string) => {
  const Icon = {
    [ICON_NAME.Home]: Home,
    [ICON_NAME.Calendar]: Calendar,
    [ICON_NAME.Calculator]: Calculator,
    [ICON_NAME.Profile]: Profile,
  };
  return Icon?.[tabName];
};
