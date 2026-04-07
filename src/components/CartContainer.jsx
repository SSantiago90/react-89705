import { useContext } from "react";
import "./CartContainer.css";
import cartContext from "../context/cartContext";
import { createOrder } from "../data/firestore";

function CartContainer() {
  const { cartItems } = useContext(cartContext);

   const orderData = {
      buyer:  { name: "Santiago",tel: "123456" },
      date: new Date(), 
      items: cartItems,
      total: 999 // TODO: a completar
    } 

    function handleCheckout (){
      createOrder( orderData )
      .then( resp => alert(`Orden creada con id: ${resp}`))
      .catch( error => alert(error))
    }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu Pedido</h1>
      
      {
        cartItems.map( item => 
        <div className="cart-list">      
          <div className="cart-item">
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.count} unidades x $ {item.price}</p>
            </div>
            <div className="item-actions">             
              <button onClick={ () => alert(`SIN IMPLEMENTAR - elimiar item ${item.id}`)}className="btn-remove">Eliminar</button>
            </div>
          </div>
      </div>)
      }

      <footer className="cart-footer">
        <div className="cart-total">
          <span>Total a pagar:</span>
          <span className="total-amount">$ 9999,90</span>
        </div>
        <div className="footer-btns">
          <button  className="btn-secondary">Vaciar carrito</button>
          <button onClick={ handleCheckout } className="btn-primary">Finalizar Compra</button>
        </div>
      </footer>
    </div>
  );
}

export default CartContainer;