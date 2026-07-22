import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FavoritesContext } from "../context/FavoritesContext";

const Restaurant = () => {

  const user = useContext(UserContext);

  const { state, dispatch } = useContext(FavoritesContext);

  return (
    <div>

      <h2>Welcome {user.name}</h2>

      <h3>Zomato Restaurants</h3>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_FAVORITE",
            payload: 101,
          })
        }
      >
        Add Restaurant 101
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({
            type: "ADD_FAVORITE",
            payload: 102,
          })
        }
      >
        Add Restaurant 102
      </button>

      <br />
      <br />

      <button onClick={() => dispatch({type: "REMOVE_FAVORITE",payload: 101,})}>Remove Restaurant 101</button>
      <br />
      <br />
      <button onClick={() => dispatch({type: "REMOVE_FAVORITE",payload: 102,})}>Remove Restaurant 102 </button>

      <h3>Favorite Restaurant IDs</h3>

      <ul>
        {state.favorites.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>

    </div>
  );
};

export default Restaurant;