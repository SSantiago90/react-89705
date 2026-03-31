import './counter.css'
import { useState, useEffect } from "react";

export default function Counter({ handleAddToCart }){
  const [ cantidad, setCantidad ] = useState(1)

  // * Controlar CUANDO se ejecuta este efecto/tarea
  useEffect( () => {
    console.log("👇🏻filtro de productos - montaje")
  }, [] )
  

  console.log("📌 0. Render del componente") 

   

  function restar(){
    // TODO: validar nums negativos (min 1)
    console.log("Click en restar")
    setCantidad( cantidad - 1) // renderiza de nuevo -> Counter(...)
  }

  function sumar(){
    // TODO: validar num máx (num arbitrario)
    console.log("Click en sumar")
    setCantidad(cantidad + 1)
  }

  return(
    <div className="counter-container">
      <p className="counter-label">Agregar al carrito</p>
      <div className="counter-controls">
        <button className="counter-btn" onClick={ restar } >-</button>
        <span className="counter-number">{ cantidad }</span>
        <button className="counter-btn" onClick={ sumar } >+</button>    
      </div>
          <button onClick={ () => handleAddToCart(cantidad) } className="btn-primary btn-full">Comprar</button>
    </div>
  )
}