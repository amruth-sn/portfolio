import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
// import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <About />
      <LightColor>
        <Projects />
      </LightColor>
      {/* <Clients /> */}
      {/* <LightColor> */}
        <Footer />
      {/* </LightColor> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* Global padding to account for fixed header */
  padding-top: 80px;
`;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  padding-top: 0; /* Remove padding for banner since it has the header inside */
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
