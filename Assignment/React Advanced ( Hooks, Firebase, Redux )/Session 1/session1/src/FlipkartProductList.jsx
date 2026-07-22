import React from "react";
import useFetchData from "./useFetchData";

function FlipkartProductList() {
    const { data } = useFetchData(
        "https://fakestoreapi.com/products"
    );

    return (
        <div>
            <h1>Flipkart Products</h1>

            {
                data.map((product) => (
                    <div key={product.id}>
                        <h3>Product :- {product.title}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default FlipkartProductList;