import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function UseCustomAddData(formdata, api, route) {

    const redirect = useNavigate()

    const [form, setform] = useState(formdata)

    const getdata = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {

        e.preventDefault()
        // if(form.id == "") {
        //     toast.error("Please Field the data....")
        //     return false
        // }
        const res = await axios.post(api, form)
        toast.success("Data Added Successfully....")
        setform(formdata)
        redirect(route)
    }

    return { form, getdata, getsubmit }
}

export default UseCustomAddData