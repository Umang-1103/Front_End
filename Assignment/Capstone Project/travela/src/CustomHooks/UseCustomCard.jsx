import axios from 'axios'
import React, { useState } from 'react'

function UseCustomCard(api) {

    const [view, setview] = useState({})

    const ViewCard = async(id) => {
        const res = await axios.get(`${api}/${id}`)
        setview(res.data)
    }

  return {view, ViewCard}
}

export default UseCustomCard