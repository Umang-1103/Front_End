import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

function UseCustomDeleteData(api, FetchApi) {

    const deletedata = async (id) => {
        const res = await axios.delete(`${api}/${id}`)
        console.log(res.data)
        toast.success("Data Deleted Successfully....")
        FetchApi()
    }

  return {deletedata}
}

export default UseCustomDeleteData