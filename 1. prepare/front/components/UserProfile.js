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
                <div key="twit">짹쨱<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>
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