// Task 2
import React from 'react'

function UserProfile({ username="Jane Smith", followers=100, profilePic="team3.png" }) {
    return (
        

            <div className="col-md-3 m-2">
                <div className="card text-center" style={{ width: '18rem' }}>
                    <img src={profilePic} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{username}</h5>
                        <p className="card-text">{followers} Followers</p>
                        <a href="#" className="btn btn-primary">Follow</a>
                    </div>
                </div>
            </div>

        
    )
}

export default UserProfile