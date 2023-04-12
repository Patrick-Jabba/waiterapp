import { Modal, FlatList } from "react-native";
import { Image, CloseButton, Header, ModalBody, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from "./styles";

import { formatCurrency } from "../../utils/formatCurrency";

import { Product } from "../../Types/Product";
import { Text } from "../Text";
import { Button } from "../Button";
import { Close } from "../Icons/Close";

interface ProductModalProps{
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProps) {
  if(!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.0.123:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{marginTop: 16}}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text
                    size={14}
                    color="#666"
                    style={{marginLeft: 20}}
                  >
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
