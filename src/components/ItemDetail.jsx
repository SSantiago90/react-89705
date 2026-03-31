import './itemDetail.css';
import Counter from './Counter';
import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { getProductByID } from '../data/promise';
import cartContext from '../context/cartContext';


const ItemDetail = () => {
  const { id } = useParams(); 
  const [ product, setProduct ] = useState( {} )
  const { addToCart } = useContext(cartContext);

  useEffect( () => {
    getProductByID(id)
    .then( response => setProduct(response))
    .catch( error => alert(error)) // sweetAlert, taostify
  }, [])
  
  function handleAddToCart(count){
    alert(`Agregaste ${product.title} al carrito, ${count} unidades`)
    addToCart(product, count)
  }

  return (
    <div className="item-detail-container">     
      <div className="item-detail-image-wrapper">
        <img src={product.img} alt={product.title} className="item-detail-img" />
      </div>

      <div className="item-detail-info">
        <span className="item-detail-category">{product.category}</span>
        <h2 className="item-detail-title">{product.title}</h2>
        <div className="item-detail-price">
          <span>${product.price}</span>
        </div>
        
        <p className="item-detail-description">
          {product.description}
        </p>

        <div className="item-detail-actions">
          <div className="item-detail-stock">
            <div className="stock-indicator"></div>
            <span>Stock disponible: {product.stock} unidades</span>
          </div>
          
          <Counter handleAddToCart={handleAddToCart} />          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
