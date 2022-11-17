import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 198px;
  background-color: #d73035;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;

  .page-detailscon {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
