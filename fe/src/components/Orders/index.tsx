import { OrdersBoard } from "../OrdersBoard";
import { OrdersContainer } from "./styles";

export function Orders() {
  return (
    <OrdersContainer>
      <OrdersBoard icon="🕓" title="Fila de espera" />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" />
      <OrdersBoard icon="✅" title="Pronto!" />
    </OrdersContainer>
  );
}
