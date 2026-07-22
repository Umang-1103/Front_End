import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { firebasedb } from '../firebase'

function DeleteProduct() {

    const deleteproduct = async() => {
        await deleteDoc(doc(firebasedb, "users", "ylFxnRLg0HZg09LVTN8S"))
        alert("Data deleted successfully!")
    }

  return (
    <div>
        <p>DeleteProduct</p>
        <button onClick={deleteproduct}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct