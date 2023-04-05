import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer} from "./styles";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Categories } from "../components/Categories";

export function Main() {
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
          <FooterContainer></FooterContainer>
        </Footer>
      </Container>
    </>
  );
}
