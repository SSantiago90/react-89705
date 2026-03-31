import { useContext } from "react";
import cartContext from "../context/cartContext";
import { ShoppingBasket } from "lucide-react";

function CartWidget(){
  const { countItemsInCart } = useContext(cartContext)  

  return (
    <div>     
      <p> 
        <ShoppingBasket color="#d09cf5" />
        <span>( { countItemsInCart() } )</span>
      </p>
    </div>
  )
}

export default CartWidget;