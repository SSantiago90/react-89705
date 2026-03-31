import { useState, useEffect } from "react";
import getProducts, { getProductByCategory } from "../data/promise";
import Card from "./Card";
import { useParams } from "react-router";
function ItemListContainer(){
  const [products, setProducts] = useState([]);

  // ? estoy o no estoy filtrando prod
  const { categoryID } = useParams() // remeras

  useEffect( () => {    
    if( categoryID ){
        getProductByCategory(categoryID).then( response => setProducts(response));
    }
    else{
        getProducts().then( response => setProducts(response));
    }      
  }, [categoryID])


  // * Loader -> loaders, spinners, skeletons
  // ? Renderizado Condicional -> if, ternario

  return  (
    <div>
        <h3>Estos son nuestos productos</h3>
        { 
          (products.length === 0) ?
              <h3>Cargando . . .</h3>
          :
            <div className="item-list">                     
                {
                    products.map( prod=> 
                    <Card 
                      key={prod.id}
                      id={prod.id}
                      img={prod.img} 
                      title={prod.title} 
                      price={prod.price}/> 
                    )
                } 
            </div>
        }
      </div>
  )
}

export default ItemListContainer;