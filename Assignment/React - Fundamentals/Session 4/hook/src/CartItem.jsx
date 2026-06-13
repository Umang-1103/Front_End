// Task 2
import React, { useState } from 'react'

function CartItem() {
    const [quantity, setQuntity] = useState(0)
  return (
    <div>
        <h1>Quntity :- {quantity}</h1>
        <button onClick={() => setQuntity(quantity+1)}>Increment</button> &nbsp;&nbsp;
        <button onClick={() => setQuntity(quantity-1)}>Decrement</button>
    </div>
  )
}

export default CartItem