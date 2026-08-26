import React from "react"
// import AddProduct from "./Component/AddProduct"
// import ViewProduct from "./Component/ViewProduct"
// import UpdateProduct from "./Component/UpdateProduct"
// import DeleteProduct from "./Component/DeleteProduct"
import { Slide, ToastContainer } from "react-toastify";
import Product from "./ProductComponent/Product";
import AddProduct from "./ProductComponent/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./ProductComponent/UpdateProduct";
import ViewProduct from "./ProductComponent/ViewProduct";

function App() {

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      {/* <AddProduct />
      <ViewProduct />
      <UpdateProduct />
      <DeleteProduct /> */}
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        {/* <Product />
        <AddProduct /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
