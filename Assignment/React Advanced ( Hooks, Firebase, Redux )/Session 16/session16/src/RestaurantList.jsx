import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "./restaurantSlice";

function RestaurantList() {
    const dispatch = useDispatch();

    const { restaurant, loading, error } = useSelector(
        (state) => state.restaurant
    );

    const [city, setCity] = useState("");

    useEffect(() => {
        dispatch(fetchRestaurant());
    }, [dispatch]);

    const handleSearch = () => {
        dispatch(fetchRestaurant(city));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Restaurant List</h1>

            <input
                type="text"
                placeholder="Search City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

            <br />
            <br />

            {loading && <h2>Loading...</h2>}

            {error && <h2>{error}</h2>}

            {
                !loading &&
                restaurant.map((item) => (
                    <div
                        key={item.restaurantID}
                        style={{
                            border: "1px solid gray",
                            marginBottom: "15px",
                            padding: "10px",
                            borderRadius: "10px",
                        }}
                    >
                        <h2>Restaurant : {item.restaurantName}</h2>

                        <p className="m-0">
                            <strong>Address : </strong>
                            {item.address}
                        </p>

                        <p className="m-0">
                            <strong>Type : </strong>
                            {item.type}
                        </p>

                        <p>
                            <strong>Parking : </strong>
                            {item.parkingLot ? "Available" : "Not Available"}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default RestaurantList;