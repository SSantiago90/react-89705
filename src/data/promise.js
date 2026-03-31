// * Generar una promesa que retorna los productos en 1 segundo
// * Simula la conexión de datos a API/Database/service
import products from "./products";

// * Fetch que devuelve productos en 1 seg
function getProducts(){
    const miPromesa = new Promise( (resolve, reject) => {    
    setTimeout( () => {
      //reject("Se rompió todo!") 
      resolve(products);
    }, 1000 )     
  } )

  return miPromesa;
}

function getProductByID(idRequested){
  return new Promise( (resolve, reject) => {

    const productReq = products.find( (item) => { 
      // return true/false        
      return (parseInt(idRequested) === item.id)
    })
    
    setTimeout( () => {
        if (productReq === undefined) 
            reject("Producto no encontrado");

        console.log(productReq)
        resolve(productReq)
    }, 1000 )    
  })
}

function getProductByCategory(categoryReq){
  return new Promise( (resolve, reject) => {

    const productsReq = products.filter( (item) => { 
      return item.category === categoryReq
    })
    
    setTimeout( () => {
        // Cuando hacemos reject?  
        resolve(productsReq)
    }, 1000 )    
  })
}


export { getProductByID, getProductByCategory };

export default getProducts;