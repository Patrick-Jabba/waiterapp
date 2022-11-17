import { ContentContainer, Board } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
}

//Props
export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <ContentContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </ContentContainer>
    </Board>
  );
}
