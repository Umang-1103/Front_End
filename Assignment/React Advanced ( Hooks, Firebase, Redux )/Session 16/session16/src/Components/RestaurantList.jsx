import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../features/restaurantSlice";

function RestaurantList() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="mb-0">Restaurant List</h3>
        </div>

        <div className="card-body">

          <div className="row mb-3">
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City (Ahmedabad)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-success w-100"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {loading && (
            <div className="alert alert-info">
              Loading...
            </div>
          )}

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {!loading && !error && (
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Restaurant ID</th>
                  <th>Restaurant Name</th>
                  <th>Address</th>
                  <th>Type</th>
                  <th>Parking</th>
                </tr>
              </thead>

              <tbody>
                {restaurants.length > 0 ? (
                  restaurants.map((restaurant) => (
                    <tr key={restaurant.restaurantID}>
                      <td>{restaurant.restaurantID}</td>
                      <td>{restaurant.restaurantName}</td>
                      <td>{restaurant.address}</td>
                      <td>{restaurant.type}</td>
                      <td>
                        {restaurant.parkingLot ? (
                          <span className="badge bg-success">
                            Available
                          </span>
                        ) : (
                          <span className="badge bg-danger">
                            Not Available
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Restaurants Found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;