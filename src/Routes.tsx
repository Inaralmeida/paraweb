import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Historias from "./pages/Historias/Historias";
import Representatividade from "./pages/Representatividade/Representatividade";
import Tecnologia from "./pages/Tecnologia/Tecnologia";
import Apoio from "./pages/Apoio/Apoio";
import Sobre from "./pages/Sobre/Sobre";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/historias/:titulo" element={<Historias />} />
          <Route
            path="/representatividade/:titulo"
            element={<Representatividade />}
          />
          <Route path="/Tecnologia/:titulo" element={<Tecnologia />} />
          <Route path="/apoio/:titulo" element={<Apoio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Switch>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Routes;
