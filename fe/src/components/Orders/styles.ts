import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 100%;
    height: 128px;

    background: #fff;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 14px;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
