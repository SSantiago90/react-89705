import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';

function App() {   
  return (
    <BrowserRouter>
        <NavBar/>
        <h1>Bienvenidos a mi tienda!</h1>          

        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoryID" element={ <ItemListContainer/> } />
          
          <Route path="/product/:id" element= { <ItemDetail /> } />
          <Route path="*" element= { <h2>Not found: 404</h2>} />
        </Routes>

        <footer><small>Soy un futer</small></footer>
        

    </BrowserRouter>
  )
  
}

export default App
