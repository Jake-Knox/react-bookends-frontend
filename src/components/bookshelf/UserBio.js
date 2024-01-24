import React from 'react';

const UserBio = ({ userData }) => {

    return (
        <div>
            <h2>{userData.name}'s Bio</h2>
            <p>Following: {userData.following.length}</p>
            <p>Followers: {userData.following.length}</p>
            <p>Privacy: {userData.privacy}</p>
        </div>
    );
};

export default UserBio;
