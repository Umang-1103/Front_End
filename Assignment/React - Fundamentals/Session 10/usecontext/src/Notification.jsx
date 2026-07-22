import React, { useContext } from 'react'
import { notificationcontext } from './NotificationContext'

function Notification() {

    const context = useContext(notificationcontext)
    const {count, newmessage, markasread} = context

  return (
    <div>
        <h1> Messages :- {count} </h1>
        <button onClick={newmessage} > New Message </button> &nbsp;&nbsp;
        <button onClick={markasread}> Mark as read </button>
    </div>
  )
}

export default Notification