// Task 5
import React, { createContext, useState } from 'react'
import Notification from './Notification'

export const notificationcontext = createContext()

function NotificationContext() {

    const [count, setcount] = useState(2)

    const newmessage = () => {
        setcount(count + 1)
    }
    const markasread = () => {
        setcount(0)
    }

  return (
    <div>
        <notificationcontext.Provider value={{count, newmessage, markasread}} >
            <Notification/>
        </notificationcontext.Provider>
    </div>
  )
}

export default NotificationContext