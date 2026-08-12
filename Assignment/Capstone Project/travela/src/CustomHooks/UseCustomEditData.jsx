import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function UseCustomEditData(editdata,api,FetchApi) {

    const [editmodel, seteditmodel] = useState(null)
    const [edit, setedit] = useState(editdata)

    const opendata = (data) => {
        seteditmodel(data)
        setedit(data)
        console.log(data)
    }

    const editformdata = async(e) => {
        e.preventDefault()
        const res = await axios.put(`${api}/${edit.id}`,edit)
        toast.success("Data edited successfully!")
        seteditmodel(null)
        FetchApi()
    }

    const getdata = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

  return {editmodel, edit, opendata, editformdata, getdata} 
}

export default UseCustomEditData