import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { firebasedb } from '../firebase'

function UpdateProduct() {

    const update = async() => {
        const product_update = doc(firebasedb,"users", "Hu0WtxM30qUQ0QMyFRVb")
        await updateDoc(product_update, {
            name: "abcdef",
            password: "123456",
            email: "abcdef@gmail.com"
        })
        alert("Data updated successfully!")
    }

  return (
    <div>
        <p>UpdateProduct</p>
        <button onClick={update}>Update Product</button>
    </div>
  )
}

export default UpdateProduct