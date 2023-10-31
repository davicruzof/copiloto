import styled from "styled-components/native";

export const TimeLine = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const CheckBox = styled.View<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid #f1f1f1;
  ${(props: any) => props.active && `background-color: #2c94f4;border-width: 0`}
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const WrapperTextTimeLine = styled.View`
  margin-left: 8px;
`;

export const TitleTimeLine = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 16px;
  color: #000;
`;

export const DescriptionTimeLine = styled.Text`
  font-family: Jost_300Light;
  font-size: 16px;
  color: #000;
`;

export const LineTimeLine = styled.View`
  width: 2px;
  height: 35px;
  background-color: #f1f1f1;
  margin-left: 11px;
`;

export const WrapperInfoTimeLine = styled.View`
  flex-direction: row;
  align-items: center;
`;
