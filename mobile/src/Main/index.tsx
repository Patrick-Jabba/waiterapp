import { useState } from "react";

import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer} from "./styles";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { CartItem } from "../Types/CartItem";
import { products } from "../mocks/products";
import { Product } from "../Types/Product";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0]
    },
    {
      quantity: 2,
      product: products[1]
    },
  ]);

  function handleSaveTable(table: string){
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable("");
  }

  function handleAddToCart(product: Product) {
    if(!selectedTable){
      setIsTableModalVisible(true);
    }

    // o concat gera um novo array com o produt
    // como o spread ((prevState) => [...prevState, product]);
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      if(itemIndex  < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if(item.quantity === 1){
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>

        <Footer>
          <FooterContainer>
            {!selectedTable && (
              <Button onPress={(() => setIsTableModalVisible(true))}>
              Novo Pedido
              </Button>
            )}

            {selectedTable && (
              <Cart
                cartItems={cartItems}
                onAdd={handleAddToCart}
                onDecrement={handleDecrementCartItem}
              />
            )}
          </FooterContainer>
        </Footer>

        <TableModal
          visible={isTableModalVisible}
          onClose={() => setIsTableModalVisible(false)}
          onSave={handleSaveTable}
        />
      </Container>
    </>
  );
}
