import { collection, doc, getDocs, onSnapshot, Query, query, QuerySnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firebasedb } from '../firebase'
import { toast } from 'react-toastify'

function ViewProduct() {

    const [user, setuser] = useState([])

    const view = async () => {
        const res = query(collection(firebasedb, "users"))
        // const data = res.docs.map((items) => {
        //     return {
        //         id: items.id,
        //         ...items.data()
        //     }
        // })
        const data = onSnapshot(res, (QuerySnapshot) => {
            const viewdata = QuerySnapshot.docs.map((items) => {
                return {
                    id: items.id,
                    ...items.data()
                }
            })
            setuser(viewdata)
            // toast.success("View all data successfully!")
        })
        // return data
    }

    // useEffect(() => {
    //     view()
    // }, [])

    return (
        <div>
            <p>ViewProduct</p>
            <button onClick={view} >View Product</button>
            {
                user.map((data) => {
                    return (
                        <div key={data.id}>
                            <p>Id:- {data.id}</p>
                            <p>Name:- {data.name}</p>
                            <p>E-mail:- {data.email}</p>
                            <p>Password:- {data.password}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewProduct