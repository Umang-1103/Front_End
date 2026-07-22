import { createContext, useMemo, useState } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {

  const [songs] = useState([
    "Believer",
    "Perfect",
    "Shape Of You",
    "Faded"
  ]);

  // Unrelated State
  const [count, setCount] = useState(0);

  // Memoized Context Value
  const value = useMemo(() => {
    return { songs };
  }, [songs]);

  return (
    <PlaylistContext.Provider value={value}>

      {children}

      <br />
      <button onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>


    </PlaylistContext.Provider>
  );
};