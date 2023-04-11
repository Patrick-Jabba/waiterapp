import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`'
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px`: "0"};
  flex: 1;
  background-color: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 72px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;
