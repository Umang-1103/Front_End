// Task 3 & 4
import React, { useEffect, useState } from "react";

function IPLScores() {
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (res.status !== 200) {
                throw new Error("Error loading scores");
            }

            const data = await res.json();
            setScores(data);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>IPL Scores</h2>

            {error ? (
                <h3>Error loading scores</h3>
            ) : (
                <ul>
                    {
                        scores.map((team) => (
                            <li key={team.id}>
                                {team.name} - {Math.floor(Math.random() * 250)}/
                                {Math.floor(Math.random() * 10)}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default IPLScores;