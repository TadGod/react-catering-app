import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import auth from '../../redux/auth';
import { Layout } from '../../components/complex';
import { Button } from '../../components/common';


function Login() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username: username, password: password})
            });

            const login = await response.json();

            if(login.details) {
                setError(login.details[0].message.replace(/"/g, ''));
            }

            if (login.token) {
                dispatch(auth.actions.login(login.token));
                history.push(location.state === undefined ? '/' : location.state.initialRoute.pathname);
            }

        } catch(err) {
            console.log(err);
        }
        
    }
    return(
        <Layout>
            <form onSubmit={handleSubmit} className='user-form'>
                <label>
                    Username
                    <input id="username" type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                </label>
                <label>
                    Password
                    <input id="password" type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <Button title='Login' className='form-button'/>
                {error ? <p className='error'>{error}</p> :  ''}
            </form>
        </Layout>
    )
}

export default Login;
