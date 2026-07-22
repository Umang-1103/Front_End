import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

    const { cart, dispatch } = useContext(CartContext);

    return (
        <div>

            <h2>Shopping Cart</h2>

            <button
                onClick={() =>
                    dispatch({
                        type: "ADD_ITEM",
                        payload: {
                            id: 1,
                            name: "Laptop",
                        },
                    })
                }
            >
                Add Laptop
            </button>

            <br />
            <br />

            <button
                onClick={() =>
                    dispatch({
                        type: "ADD_ITEM",
                        payload: {
                            id: 2,
                            name: "Mobile",
                        },
                    })
                }
            >
                Add Mobile
            </button>

            <br />
            <br />

            <button
                onClick={() =>
                    dispatch({
                        type: "REMOVE_ITEM",
                        payload: 1,
                    })
                }
            >
                Remove Laptop
            </button>

            <br />
            <br />

            <button
                onClick={() =>
                    dispatch({
                        type: "CLEAR_CART",
                    })
                }
            >
                Clear Cart
            </button>

            {/* <hr /> */}

            <h3>Cart Items</h3>

            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.name}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Cart;