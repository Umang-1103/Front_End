import React, { useEffect, useState } from "react";

const ProductList = () => {

  const [products] = useState(
    Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: Math.floor(Math.random() * 1000)
    }))
  );


  useEffect(() => {
    console.time("Product List Render Time");

    return () => {
      console.timeEnd("Product List Render Time");
    };

  }, []);


  return (
    <div>
      <h2>Product List</h2>

      {
        products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))
      }

    </div>
  );
};

export default ProductList;