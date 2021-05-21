import React, { useCallback, useState, useMemo } from 'react';
import { Form, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding : 10px;
`


const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');


    const onChangeId = useCallback((e)=>{
        setId(e.target.value)
    },[]);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[])

    const onSubmitForm = useCallback(() => {
        setIsLoggedIn(true);
    },[id,password]);
    return(
        <>
            <FormWrapper onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">ID</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-password">PassWord</label>
                    <br />
                    <Input name="user-password" value={password} onChange={onChangePassword} required/>
                </div>

                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                    <Link href="/signup"><a><Button>Register</Button></a></Link>
                </ButtonWrapper>
                   
            </FormWrapper>   
        </>
    );
};

LoginForm.prpopTypes = {
    setIsLoggedIn : PropTypes.node.isRequired
}

export default LoginForm;