// Task 4
import React from 'react'

function CartSummary() {
    const cart = [
        {
            name : "Shirt",
            price : "$100"
        },
        {
            name : "Pant",
            price : "$120"
        },
        // {
        //     name : "T-shirt",
        //     price : "$80"
        // }
    ]
  return (
    <div>

        {
            (cart.length) ? 
            (
                cart.map((item, index) => (
                    <ul key={index}>
                        <li>Product Name :- {item.name}</li>
                        <li>Product Price :- {item.price}</li>
                    </ul>
                ))
            )
            :
            (
                <h2>Cart is empty</h2>
            )
        }

        {
            cart.length >= 3 && ( <button>Checkout Now</button> )
        }

    </div>
  )
}

export default CartSummary