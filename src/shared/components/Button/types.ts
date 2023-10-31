import { PressableProps } from "react-native";

export type ButtonType = "primary" | "secondary";

export interface ButtonProps extends PressableProps {
  text: string;
  disable?: boolean;
  type: ButtonType;
  isIcon?: boolean;
}
