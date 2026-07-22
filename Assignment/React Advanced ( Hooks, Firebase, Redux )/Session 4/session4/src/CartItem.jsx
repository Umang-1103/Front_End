import React, { useReducer } from "react";

const initialState = 1;

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return state + 1;

        case "decrease":
            return state > 1 ? state - 1 : state;

        case "reset":
            return initialState;

        default:
            return state;
    }
}

function CartItem() {
    const [quantity, dispatch] = useReducer(reducer, initialState);

    return (
        // <div style={{ border: "1px solid gray", padding: "20px", width: "250px"}} >
        <div className="container" >
            <div className="border border-dark p-4 w-25 mt-4">
                <h2>Apple iPhone</h2>
                <h3>Quantity : {quantity}</h3>
                <button className="btn btn-info" onClick={() => dispatch({ type: "increase" })} >
                    +
                </button>
                <button className="btn btn-success m-2" disabled={quantity === 1}
                    onClick={() => dispatch({ type: "decrease" })} >
                    -
                </button>
                <button className="btn btn-danger" onClick={() => dispatch({ type: "reset" })} >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CartItem;