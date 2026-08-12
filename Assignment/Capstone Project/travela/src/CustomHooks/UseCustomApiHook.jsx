import React, { useState } from 'react'
import axios from 'axios'

function UseCustomApiHook(apidata) {

  const [api, setApi] = useState([])

  const FetchApi = async () => {
      const res = await axios.get(apidata)
      setApi(res.data)
  } 

  return {api, FetchApi}
}

export default UseCustomApiHook