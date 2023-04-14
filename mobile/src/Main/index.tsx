import { useState } from "react";

import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer, CenteredContainer} from "./styles";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { CartItem } from "../Types/CartItem";
import { Product } from "../Types/Product";
import { ActivityIndicator } from "react-native";

import { products as mockProducts } from "../mocks/products";
import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products] = useState<Product[]>(mockProducts);

  function handleSaveTable(table: string){
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if(!selectedTable){
      setIsTableModalVisible(true);
    }

    // o concat gera um novo array com o product
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
          onCancelOrder={handleResetOrder}
        />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator
              color="#d73035"
              size="large"
            />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            {products.length > 0 ? (
              <MenuContainer>
                <Menu
                  onAddToCart={handleAddToCart}
                  products={products}
                />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24}}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}



      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={(() => setIsTableModalVisible(true))}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
