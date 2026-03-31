import { createContext, useState } from "react";

const cartContext = createContext([]);

// * 1. Provider personalizado
// * 2. Darle vida/estado al provider -> hacerlo dinamico

function CartProvider(props){
  const [cartItems, setCartItems] = useState([])

  function addToCart(product, count){
    // * op spread -> ...
    const newCartItems = [ ...cartItems ]; // [], {}, f() -> shallow copy/deep copy
    newCartItems.push( { ...product, count: count })
    //.....
    setCartItems(newCartItems)    
  }

  function countItemsInCart(){
    // Array.reduce()
    let total = 0;
    cartItems.forEach( (item) => {
        total += item.count;
    })
    return total;
  }

  function removeItem(id){
    //....
  }

  // TODO: eliminar items (Array.filter), vaciar el carrito, calcular precio total, calc cant items
  // TODO: Componente <CartContainer>

  return <cartContext.Provider value={{ 
        cartItems, 
        addToCart,
        countItemsInCart
      }}>
            { props.children }
      </cartContext.Provider>
}



export { CartProvider } // named
export default cartContext; // default