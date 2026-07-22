import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">🛒 Shopping Cart</h2>
        </div>

        <div className="card-body">

          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: Date.now(),
                    name: "Laptop",
                  })
                )
              }
            >
              + Add Product
            </button>
          </div>

          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th width="150">Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        🗑 Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-muted">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="text-end mt-3">
            <h5>
              Total Items :{" "}
              <span className="badge bg-primary">
                {cart.length}
              </span>
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;