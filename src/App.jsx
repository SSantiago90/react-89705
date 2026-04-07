import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';
import { exportToFirestore} from './data/firestore';

function App() {    
  return (
     <BrowserRouter> 
        <CartProvider>
          <NavBar/>          
            <h1>Bienvenidos a mi tienda!</h1>   
            <button onClick={exportToFirestore}>Export data</button> 
            <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/category/:categoryID" element={ <ItemListContainer/> } />          
              <Route path="/product/:id" element= { <ItemDetail /> } />
              <Route path="*" element= { <h2>Not found: 404</h2>} />
              <Route path="/cart" element={ <CartContainer/> } />
            </Routes>
            <footer><small>Coderhouse 2026 - todos los derechos reservados</small></footer>          
        </CartProvider>
    </BrowserRouter>    
  )  
}

export default App;