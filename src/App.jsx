import './App.css';
import Card from './components/Card'

function App() { 
  return (
  <section>      
      <h1>Bienvenidos a mi tienda!</h1>      
      <div>
        <h3>Estos son nuestos productos</h3>
        <Card title="Remera Coderhouse" price={99} img="https://shop.guantexindustrial.com.ar/710-large_default/-remera-algodon-jersey-blanco-talle-xxl.jpg" />
        <Card title="Remera HouseCoder" price={80} img="https://shop.guantexindustrial.com.ar/710-large_default/-remera-algodon-jersey-blanco-talle-xxl.jpg" />
        <Card title="Remera React" price={70} img="https://shop.guantexindustrial.com.ar/710-large_default/-remera-algodon-jersey-blanco-talle-xxl.jpg" />
      </div>
  </section>
  )
  
}

export default App
