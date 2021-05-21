import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'

const Profile = () => {
    return (
        <>
            <Head>
                <title>My Profile | NodeBird</title>
            </Head>
            <AppLayout>
                My Profile
            </AppLayout>
        </>
        
    )
}

export default Profile;