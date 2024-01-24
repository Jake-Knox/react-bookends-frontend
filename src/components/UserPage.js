// UserProfile.js

import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from '../data';

const UserProfile = () => {
    const { username } = useParams();

    // Find the user based on the username parameter
    const user = usersData.find((user) => user.name === username);

    if (!user) {
        // Handle case where the user is not found
        return <div>User not found</div>;
    }

    return (
        <div>
            <h2>{user.name}'s Profile</h2>
            {/* Display user details here */}
        </div>
    );
};

export default UserProfile;
