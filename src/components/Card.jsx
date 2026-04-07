import { Link } from 'react-router';
import './card.css';
import Counter from './Counter';

function Card({ id, title, img, price }) {
  return (
    <div className="card-item">
        <Link to={ "/product/" + id  }>
            <div className="card-image-container">
              <img src={img} className="card-img" alt={title} />
            </div>
            
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-price">${price}</p>              
              <div className="card-actions">
                <button className="btn-primary">Ver detalle</button>
              </div>
            </div>
        </Link>
    </div>
  );
}

export default Card;