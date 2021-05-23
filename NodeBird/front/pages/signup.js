import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import styled from 'styled-components';

import { Form, Input, Checkbox, Button } from 'antd';
import useInput from '../hooks/useInput';

const Signup = () => {
    const ErrorMessage = styled.div`
        color:red
    `;

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickName] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[term]);

    
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        };
        if (!term) {
            return setTermError(true);
        };

        console.log('submit! : ',id,nickname,term)

    },[password, passwordCheck, term]);

    

    return (
        <AppLayout>
            <Head>
                <title>Register | NodeBird</title>
            </Head>
           
            <Form onFinish = {onSubmit}>
                <div>
                    <label htmlFor = "user-id">ID</label>
                    <br />
                    <Input name = "user-id" value = {id} required onChange = {onChangeId} />
                </div>

                <div>
                    <label htmlFor = "user-nickname">NickName</label>
                    <br />
                    <Input name = "user-nickname" value = {nickname} required onChange = {onChangeNickName} />
                </div>

                <div>
                    <label htmlFor = "user-password">PassWord</label>
                    <br />
                    <Input name = "user-password" type = "password" value = {password} required onChange = {onChangePassword} />
                </div>
                <div>
                    <label htmlFor = "user-password-check">PassWord Check</label>
                    <br />
                    <Input 
                        name = "user-password-check" type = "password" 
                        value = {passwordCheck} 
                        required 
                        onChange = {onChangePasswordCheck} 
                    />
                    {passwordError && <ErrorMessage>Password do not match</ErrorMessage>}
                </div>

                <div>
                    <Checkbox name = "user-term" checked = {term}
                        onChange = {onChangeTerm}
                    >
                        Register Agree!
                    </Checkbox>
                    {termError && <ErrorMessage>You should agree Policy</ErrorMessage>}
                </div>

                <div style = {{marginTop: 10}}>
                    <Button type = "primary" htmlType = "submit">Register</Button>
                </div>
            </Form>
        </AppLayout>
        
    )
}

export default Signup;