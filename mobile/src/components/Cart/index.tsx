import { FlatList } from "react-native";
import { CartItem } from "../../Types/CartItem";

import { Item, Actions, ProductContainer, Image, QuantityContainer, ProductDetails, Summary, TotalContainer } from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { TouchableOpacity } from "react-native";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150}}
          renderItem={({item: cartItem}) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.0.123:3001/uploads/${cartItem.product.imagePath}`
                  }}
                ></Image>

                <QuantityContainer>
                  <Text
                    size={14}
                    color="#666"
                  >
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight="600">{cartItem.product.name}</Text>
                  <Text
                    size={14}
                    color="#666"
                    style={{ marginTop: 4 }}
                  >
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>

              </ProductContainer>
              <Actions>
                <TouchableOpacity >
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">
                Total
              </Text>
              <Text weight="600" size={20}>
                {formatCurrency(120)}
              </Text>
            </>
          ) :
            <Text color="#999">
              Seu carrinho está vazio
            </Text>
          }
        </TotalContainer>

        <Button
          onPress={() => alert("confirmou pedido")}
          disabled={cartItems.length === 0}
        >
          Confirmar pedido
        </Button>
      </Summary>

    </>
  );
}
