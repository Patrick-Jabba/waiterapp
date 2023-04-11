import { useState } from "react";

import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer} from "./styles";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { TableModal } from "../components/TableModal";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  function handleSaveTable(table: string){
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

        <Footer>
          <FooterContainer>
            {!selectedTable && (
              <Button onPress={(() => setIsTableModalVisible(true))}>
              Novo Pedido
              </Button>
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
