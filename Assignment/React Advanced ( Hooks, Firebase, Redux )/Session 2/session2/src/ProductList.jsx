import React from "react";
import useFetchData from "./useFetchData";

function ProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Fake Store Products</h1>

      <div className="row">
        {
          data.map((product) => (
            <div className="col-md-4 my-2">
              <div className="card p-3 h-100">
                <img src={product.image} style={{ width: "150px", height: "180px" }} className="card-img-top mx-auto" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.slice(0, 100)} ...</p>
                  <h3>₹ {product.price}</h3>
                  <p><b>Category:</b> {product.category}</p>
                  <p>⭐ {product.rating.rate} ({product.rating.count} Reviews)</p>
                  <a href="#" className="btn btn-primary"> Add to Cart </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductList;