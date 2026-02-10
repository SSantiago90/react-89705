
import './App.css'

function App() { 
  let titulo = "Bienvenidos a React!";
  
  /* function getUsername(){
    return "Francisco"
  } */
  const getUsername = () => "Francisco"
  const getUserFavoriteColor = () => "yellow"
  const unreadMessages = 8;

  const stylesTitle = { color: "green" }
  /* camelCase */
  const buttonStyles = { 
    color: "black",
    backgroundColor: getUserFavoriteColor(), 
    fontSize: "8px" 
  }

  return (
  <section>      
      <h1 style={ stylesTitle } > { titulo } </h1>
      <h2>Hola { getUsername() } bienvenido a tu clase!</h2>
      <div className="card">
        <button style={ buttonStyles }>
          Hola soy un botón
        </button>
        <p>2 + 2 es igual a { 2+2 } </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>      
      <p className="read-the-docs">
        Tienes { unreadMessages} mensajes sin leer
      </p>
    </section>
  )
  
}

export default App
