import './card.css';
import Counter from './Counter';

// * PROPS
function Card( { title, img, price } ){
  // * destructurado/destructuring
  //const { title, img, price } = props;

  return (
    <div className="card-item">
      <img src={img} className="card-img"></img>
      <h3 className="card-title"> { title } </h3>
      <p className="card-price">$ { price }</p>
      <Counter />
      <button>Comprar</button>
    </div>
  )  
}

export default Card;