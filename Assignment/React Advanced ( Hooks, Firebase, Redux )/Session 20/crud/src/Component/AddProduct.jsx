import React from 'react'
import { firebasedb } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

function AddProduct() {

    

    const addproduct = async() => {
        console.log("Button Clicked!")
        await addDoc(collection(firebasedb, "users"),{
            name: "abc",
            email: "abc@gmail.com",
            password: "12"
        })
        alert("Data added successfully!")
    }

  return (
    <div>
        <p>AddProduct</p>
        <button onClick={addproduct} >Add Product</button>
    </div>
    
  )
}

export default AddProduct