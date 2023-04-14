import { useEffect, useState } from "react";
import socketIo from "socket.io-client";

import { OrdersContainer } from "./styles";

import { Order } from "../../types/Order";

import { OrdersBoard } from "../OrdersBoard";
import { api } from "../../utils/api";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order) => {
      setOrders(prevState => prevState.concat(order));
    });

  }, []);

  useEffect(() => {
    api.get("/orders")
      .then(({data}) => {
        setOrders(data);
      });
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter((order) => order.status === "IN_PRODUCTION");
  const done = orders.filter((order) => order.status === "DONE");

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order["status"]) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? {...order, status }
        : order
    )));
  }

  return (
    <OrdersContainer>
      <OrdersBoard
        icon="🕓"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />

      <OrdersBoard icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </OrdersContainer>
  );
}
