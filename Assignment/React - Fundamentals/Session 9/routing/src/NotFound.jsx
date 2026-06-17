// Task 4
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
        <h1 className='p-5 bg-danger text-light'>404 - Page Not Found</h1>
        <Link to="/" className='btn btn-success'>Back to Home</Link>
    </div>
  )
}

export default NotFound