import { CodeField } from "react-native-confirmation-code-field";
import styled from "styled-components/native";

export const Container = styled(CodeField)`
  margin-top: 20px;
`;

export const TextCustom = styled.Text<{ focus: boolean }>`
  width: 75px;
  height: 75px;
  line-height: 38px;
  font-size: 24px;
  color: #000;
  ${({ focus }: { focus: boolean }) =>
    focus ? `border: 4px solid #2c94f4;` : `border: 2px solid #e1eaf1;`}
  text-align: center;
  border-radius: 8px;
  padding-top: 15px;
`;
