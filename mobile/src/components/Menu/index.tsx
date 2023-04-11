import { FlatList } from "react-native";
import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from "./styles";

import { products } from "../../mocks/products";
import { formatCurrency } from "../../utils/formatCurrency";

import { Text } from "../Text";
import { PlusCircle } from "../Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.0.123:3001/uploads/${product.imagePath}`,
            }}
          />

          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text color="#666" size={14} style={{ marginVertical: 8}}>
              {product.description}
            </Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}

    />
  );
}
