
// import './App.css';

import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer";
import {ProductosGrid} from "./components/ProductosGrid"


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"CLEMENTINA MANDARINA"}/>
    <ProductosGrid/>
    </>
      
    
  );
}

export default App;
