import { useContext } from "react";
import cartContext from "../context/cartContext";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";

function CartWidget() {
  const { countItemsInCart } = useContext(cartContext);
  const totalItems = countItemsInCart();

  return (
    <Link to="/cart">
    <div className="cart-widget">
      <ShoppingBasket className="cart-icon" size={28} color="#d09cf5" />    
        <span className="cart-badge">{totalItems}</span>    
    </div>
    </Link>
  );
}

export default CartWidget;