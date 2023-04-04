import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { OrdersContainer } from "./styles";

const orders: Order[] = [
  {
    "_id": "6426f9c0133c6786a3b7e74a",
    "table": "123",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza",
          "imagePath": "1680203456991-quatro-queijos.png",
          "price": 40,
        },
        "quantity": 2,
        "_id": "6426f9c0133c6786a3b7e74b"
      },
      {
        "product": {
          "name": "Coca-cola",
          "imagePath": "1680275179782-coca-cola.png",
          "price": 7,
        },
        "quantity": 2,
        "_id": "6426f9c0133c6786a3b7e74c"
      }
    ],
  },
  {
    "_id": "64272a91496936602139f29b",
    "table": "321",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza",
          "imagePath": "1680203456991-quatro-queijos.png",
          "price": 40,
        },
        "quantity": 4,
        "_id": "64272a91496936602139f29c"
      },
      {
        "product": {
          "name": "Coca-cola",
          "imagePath": "1680275179782-coca-cola.png",
          "price": 7,
        },
        "quantity": 4,
        "_id": "64272a91496936602139f29d"
      }
    ],
  }
];

export function Orders() {
  return (
    <OrdersContainer>
      <OrdersBoard icon="🕓" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </OrdersContainer>
  );
}
