import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import { CartProvider } from './context/cartContext';
// 1. Crear un context -> createContext()
// 2. Usar un context -> useContext()



function App() {    
 

  return (
     <BrowserRouter> 
        <CartProvider>
          <NavBar/>
          
            <h1>Bienvenidos a mi tienda!</h1>      
            <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/category/:categoryID" element={ <ItemListContainer/> } />          
              <Route path="/product/:id" element= { <ItemDetail /> } />
              <Route path="*" element= { <h2>Not found: 404</h2>} />
            </Routes>

            <footer><small>Soy un futer</small></footer>          
        </CartProvider>
    </BrowserRouter>    
  )  
}

export default App;