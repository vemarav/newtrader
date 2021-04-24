import styled from "styled-components";
import { Calculator } from "../components";
import Reports from "../components/reports";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Home = () => {
  return (
    <Container>
      <Calculator />
      <Reports />
    </Container>
  );
};

export default Home;
