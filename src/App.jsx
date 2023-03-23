import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <ProductList />
      <Contact />
    </>
  );
};

export default App;
