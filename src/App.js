
// import './App.css';

import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer";
import {ProductosGrid} from "./components/ProductosGrid"


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Lista de Productos"}/>
    <ProductosGrid/>
    </>
      
    
  );
}

export default App;
