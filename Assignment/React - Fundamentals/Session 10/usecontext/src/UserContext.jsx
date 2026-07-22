// Task 1
import React, { createContext, useState } from 'react'
import Navbar from './Navbar'

export const usercontext = createContext()

function UserContext() {

    const [data, setdata] = useState({
        username: "user1",
        login: true
    })

    return (
        <div>

            <usercontext.Provider value={{data, setdata}}>
                <Navbar />
            </usercontext.Provider>

        </div>
    )
}

export default UserContext