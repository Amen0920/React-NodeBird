import React from 'react';
import Head from 'next/head'

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const follwingList = [{ nickname:'Amen0920'},{nickname :'Serian'},{nickname : 'Pepubi'}];
    const follwerList = [{ nickname:'Amen0920'},{nickname :'Serian'},{nickname : 'Pepubi'}]

    return (
        <>
            <Head>
                <title>My Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="Following List" data = {follwingList}/>
                <FollowList header ="Follower List" data = {follwerList}/>
            </AppLayout>
        </>
        
    )
}

export default Profile;