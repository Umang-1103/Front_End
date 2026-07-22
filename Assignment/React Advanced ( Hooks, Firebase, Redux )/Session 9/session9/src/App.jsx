import React from 'react'
import app, { firebasedb } from './firebase'

function App() {

  console.log(app)
  console.log(firebasedb)

  return (
    <div className='container'>
      <h1>Firebase Connected Successfully</h1>
      <p>Firebase is a Backend-as-a-Service (BaaS) platform that helps front-end 
        developers build applications without creating their own backend server. 
        It provides services such as Authentication, Firestore Database, Cloud Storage, 
        and Hosting. Apps like Instagram or Zomato can use Firebase to manage users, 
        store data, upload images, and receive real-time updates quickly and securely.</p>
    </div>
  )
}

export default App