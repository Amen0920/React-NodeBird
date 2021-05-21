import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({ children }) => {
    const [isLoggedIn] = useState(false);

    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>NordBird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search style={{verticalAlign:"middle"}} enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>Register</a></Link>
                </Menu.Item>
            </Menu>
            
            <Row gutter = {8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href = "https://github.com/Amen0920" target="_blank" rel="noreferrer noopener">Made by Amen0920</a>
                </Col>
            </Row>
           
        </div>
       
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;