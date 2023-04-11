import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? "#999" : "#D73035"};
  border-radius: 48px;
  padding: 12px 24px;

  align-items: center;
  justify-content: center;

`;


