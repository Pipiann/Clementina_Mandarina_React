import React from 'react';
import { useState,useEffectx } from 'react';
// import {Link} from "react-router-dom";
// import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";
// import {db} from "../firebaseConfig/firebase.js"

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { async } from '@firebase/util';

// const MySwal = withReactContent(Swal)

function ItemListContainer({greeting}) {
  // const [products, setProducts] = useState ([])
  // const productsCollection =  collection (db,"clemenecommerce")
  // const getProducts= async () =>{
  //   const data= await getDocs (productsCollection)
  //   setProducts (data.docs.map ((doc) => ({...doc.data(),id:doc.id})))
  // }
   
  // useEffect (()=>{
  //   getProducts()
  // }, [])

  return (
    <section className='item-list-container'>
        <h2 className='item-list-container-title'>{greeting}</h2>

    </section>
  )
}

export default ItemListContainer