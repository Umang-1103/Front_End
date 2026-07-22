import { createContext, useReducer } from "react";

export const FavoritesContext = createContext();

const initialState = {
    favorites: [],
};

const favoriteReducer = (state, action) => {

    switch (action.type) {

        // case "ADD_FAVORITE":
        //   return {
        //     ...state,
        //     favorites: [...state.favorites, action.payload],
        //   };

        case "ADD_FAVORITE":

            if (state.favorites.includes(action.payload)) {
                return state;
            }

            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(
                    (id) => id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export const FavoritesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        favoriteReducer,
        initialState
    );

    return (
        <FavoritesContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};