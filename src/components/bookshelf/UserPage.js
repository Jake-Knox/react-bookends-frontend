import React from 'react';
import { useParams } from 'react-router-dom';

import usersData from '../../data';
import './bookshelfStyles.scss';

import UserBio from './UserBio';
import UserBookshelf from './UserBookshelf';

const UserProfile = () => {
    const { username } = useParams();

    // Find the user based on the username parameter
    const user = usersData.find((user) => user.name === username);
    if (!user) {
        return <div>User not found</div>;
    }

    const profileData = {
        name: user.name,
        following: user.following,
        followers: user.followers,
        privacy: user.privacy,
    }

    console.log(profileData);

    return (
        <div>
            <h2>{user.name}'s Bookshelf</h2>
            <UserBio userData={profileData} />
            {user.shelves.map((shelf) => (
                <UserBookshelf bookshelfData={shelf} />
            ))}
        </div>
    );
};

export default UserProfile;
