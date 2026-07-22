import { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getdata()
    }, []);

    const getdata = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed");
                }

                return res.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setError("Unable to fetch data");
                setLoading(false);
            });
    }

    return {
        data,
        loading,
        error,
    };
}

export default useFetchData;