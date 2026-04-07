import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import products from "./products";

const firebaseConfig = {
  apiKey: "AIzaSyB8AXhj9XdwA2Lvy9xqb6-PGCxt9923yPw",
  authDomain: "coderhouseabril26.firebaseapp.com",
  projectId: "coderhouseabril26",
  storageBucket: "coderhouseabril26.firebasestorage.app",
  messagingSenderId: "226380330144",
  appId: "1:226380330144:web:9921966138bfc6e095c5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProducts(){
  const collectionRef = collection(db, "products");
  const collectionSnap = await getDocs(collectionRef);

  const docsArray = collectionSnap.docs;
  const docsData = docsArray.map( item => {
    return {
      id: item.id, ...item.data()
    }
  })
  return docsData; 

}

async function getProductByCategory(categoryReq){ 
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("category", "==", categoryReq));
  //category === categoryReq
  const collectionSnap = await getDocs(q);

  const docsArray = collectionSnap.docs;
  const docsData= docsArray.map( doc => {
    return { id: doc.id, ...doc.data()}
  } )

  return docsData;
}

async function getProductByID(idRequested){
  const docRef = doc(db, "products", idRequested);
  const docSnap = await getDoc(docRef);
  return {
    id: docSnap.id,
    ...docSnap.data()
  }
}

// escribir 1 doc
async function createOrder( orderData ){
  const collectionOrdersRef = collection(db, "orders");
  const resp = await addDoc(collectionOrdersRef, orderData)
  return(resp.id)
}

// escribir varios docs
async function exportToFirestore(){
  for (const item of products) {
    delete item.id;
    const resp = await addDoc(collection(db, "products"), item);
    console.log("Documento creado con id: ", resp.id)
  }
}


export { getProducts, getProductByID, getProductByCategory, createOrder, exportToFirestore}
