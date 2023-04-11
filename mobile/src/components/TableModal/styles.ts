import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;
  `;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;


export const Input = styled.TextInput`
  background: #fff;
  border: 1px solid rgba(204,204,204,0.5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;
