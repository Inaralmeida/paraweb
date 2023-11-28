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
import { useEffect, useState } from "react";
import Acessibilidade from "./components/Acessibilidade";

const Routes = () => {
  const [themeVariant, setThemeVariant] = useState< 'default' | 'contrast'  >("default");

  const [fontSizeDefault, setFontSizeDefault] = useState(1)
  const [fontSize, setFontSize] = useState(62.5)
  const setContrast = ()=>{
    if(themeVariant === 'default'){
      setThemeVariant('contrast')
    }else{
      setThemeVariant('default')
    }
  }

  const handleMoreFontSize = ()=>{
   const value = fontSizeDefault < 5 ? fontSizeDefault + 1 : 1
   setFontSizeDefault(value)
  }

  const handleRemoveFontSize = ()=>{
    const value = fontSizeDefault > 1 ? fontSizeDefault - 1 : 5
    setFontSizeDefault(value)
  }

useEffect(()=>{
  if(fontSizeDefault === 1){
    setFontSize(62.5)
  }else if(fontSizeDefault === 2){
    setFontSize(67.5)
  }else if(fontSizeDefault === 3){
    setFontSize(72.5)
  }else if(fontSizeDefault === 4){
    setFontSize(77.5)
  }else if(fontSizeDefault === 5){
    setFontSize(82.5)
  }
  
},[fontSizeDefault])
  return (
    <BrowserRouter>
      <ThemeProvider theme={{...theme[themeVariant], fontSize}}>
        <GlobalStyle />
        <Header />
        <Acessibilidade handleSetContrast={setContrast} handleMore={handleMoreFontSize}
        handleRemove={handleRemoveFontSize}
        />
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
