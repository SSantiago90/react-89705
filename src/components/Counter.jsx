// * ESTADO / STATE
import { useState } from "react";

export default function Counter(){
  const [ cantidad, setCantidad ] = useState(1)
  
  // ? 1. Quiero que react RECUERDE este valor (memoria)
  // ? 2. Quiero que react actualice el DOM cuando ese valor cambie

  function restar(){
    // TODO: validar nums negativos (min 1)
    console.log("Click en restar")
    setCantidad( cantidad - 1) 
  }

  function sumar(){
    // TODO: validar num máx (num arbitrario)
    console.log("Click en sumar")
    setCantidad(cantidad + 1)
  }

  return(
    <div>
      <p>Agregar al carrito</p>
      <button onClick={ restar } >-</button>
      { cantidad }
      <button onClick={ sumar } >+</button>
    </div>
  )
}