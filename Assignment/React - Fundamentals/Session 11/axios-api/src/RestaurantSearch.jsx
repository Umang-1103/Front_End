// Task 3
import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {

    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setRestaurants(res.data)
    }

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div>

            <h2>Restaurant Search</h2>
            <input type="text" placeholder="Search Restaurant" value={search} onChange={(e) => setSearch(e.target.value)} />
           
            <br />
            {/* <h4>Name Of Restaurant</h4> */}
            {
                (search.trim() !== "" && filteredRestaurants.length === 0) ?   
                <p>No Data Found</p> : 
                filteredRestaurants.map((restaurant) => (
                    <ul key={restaurant.id}>
                        <li> {restaurant.name}</li>
                    </ul>
                )) 
            }

        </div>

    );
}

export default RestaurantSearch;