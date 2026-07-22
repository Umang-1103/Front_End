import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            // return state - 1;
            return state > 0 ? state - 1 : state;

        case "reset":
            return initialState;

        default:
            return state;
    }
}

function PlaylistCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">
            <h1>Playlist Counter</h1>
            <h2>Total Songs : {count}</h2>
            <button className="btn btn-info" onClick={() => dispatch({ type: "increment" })}>
                Add Song
            </button>
            {/* <button className="btn btn-success m-2" onClick={() => dispatch({ type: "decrement" })}>
                Remove Song
            </button> */}
            <button className="btn btn-success m-2"  disabled={count === 0} onClick={() => dispatch({ type: "decrement" })}>
                Remove Song
            </button>
            <button className="btn btn-danger" onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}

export default PlaylistCounter;