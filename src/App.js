
// import './App.css';

import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer";
import {ProductosGrid} from "./components/ProductosGrid";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import CartWidget from "./components/CartWidget";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>;
      <Route path="/cart" element={<CartWidget/>}/>;
      <Route path="/Productos" element={<ProductosGrid/>}/>;
      <Route path="/SobreMi" element= {"sobremi"}/>;
      <Route path="/Contacto" element= "formulario"/>;

    </Routes>
    </BrowserRouter>
    <NavBar/>
    <ItemListContainer greeting={"CLEMENTINA MANDARINA"}/>
    <ProductosGrid/>
    </>
      
    
  );
}

export default App;
