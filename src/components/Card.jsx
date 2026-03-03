import './card.css';
import Counter from './Counter';

function Card({ title, img, price }) {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img src={img} className="card-img" alt={title} />
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        
        <div className="card-actions">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Card;