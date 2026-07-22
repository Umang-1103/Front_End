import React, { useMemo, useState } from "react";


const ProductListFilter = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [products] = useState(
    Array.from({ length: 1000 }, (_, index) => ({
      id:index + 1,
      name:`Product ${index + 1}`,
      price:Math.floor(Math.random()*1000)
    }))
  );


  const filteredProducts = useMemo(()=>{

    console.log("Filtering Products...");

    return products.filter((product)=>
      product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );

  },[products,searchTerm]);



  return (

    <div>

      <h2>Product Search</h2>


      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />


      {
        filteredProducts.map((product)=>(

          <div key={product.id}>

            <h4>{product.name}</h4>

            <p>
              Price : ${product.price}
            </p>

          </div>

        ))
      }


    </div>

  );
};


export default ProductListFilter;