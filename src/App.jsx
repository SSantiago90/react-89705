import './App.css';
import Card from './components/Card'
import products from './data/products'
import getProducts from './data/promise'

// * Hardcodeado - Hardcoded
function App() { 

  getProducts().then(
    (response) => { 
      alert("Recibimos los datos")
      console.log("Datos recibidos:", response)
    }
  ).catch( (error) => alert(error) )
  

  return (
  <section>      
      <h1>Bienvenidos a mi tienda!</h1> 
      <div>
        <h3>Estos son nuestos productos</h3>
        <div className="item-list"> 
            
            {
                products.map( prod=> <Card 
                  key={prod.id}
                  img={prod.img} 
                  title={prod.title} 
                  price={prod.price}/> 
                )
            } 

            <ul>
              {
                ["Hola", "React", "Coderhouse"].map( 
                  item => <li>{item}</li> 
                )
              }
            </ul>
        </div>
      </div>
  </section>
  )
  
}

export default App
