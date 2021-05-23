import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({ setIsLoggedIn}) => {

    const onClickLogOut = useCallback(() => {
        setIsLoggedIn(false);
    },[]);

    return(
        <>
            <Card actions={[
                <div key="twit">Twit!<br/>0</div>,
                <div key="followings">Following<br/>0</div>,
                <div key="followers">Follower<br/>0</div>
            ]}>
                <Card.Meta avatar={<Avatar>AM</Avatar>} title = "Amen0920"/>
                <Button onClick={onClickLogOut}>Logout</Button>
            </Card>
        </>
    );
};

UserProfile.propTypes = {
    setIsLoggedIn : PropTypes.node.isRequired,
}

export default UserProfile;