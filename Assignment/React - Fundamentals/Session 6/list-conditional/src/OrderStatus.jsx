// Task 2
import React from 'react'

function OrderStatus({isDelivered}) {
  return (
    <div>

        {
            isDelivered ? <h1>Order Delivered 🎉</h1> : <h1>Order on the way 🚚</h1> 
        }

    </div>
  )
}

export default OrderStatus