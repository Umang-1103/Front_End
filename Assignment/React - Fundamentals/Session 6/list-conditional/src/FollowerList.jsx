// Task 3
import React from 'react'

function FollowerList() {
    const username = ["A", "B"]
    return (
        <div>

            {
                (username.length) ? 
                (
                    username.map((item, index) => (
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))
                )
                :
                (
                    <h2>No followers yet</h2>
                )
            }

        </div>
    )
}

export default FollowerList