import { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getdata()
    }, []);

    const getdata = () => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            })
    }

    return { data }
}

export default useFetchData;