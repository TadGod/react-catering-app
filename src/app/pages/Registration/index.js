import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Layout } from '../../components/complex';
import { Button} from '../../components/common';


function Registration() {
    const history = useHistory();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/user/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstname: firstname, lastname: lastname, username: username, password: password})
            });

            const register = await response.json(); 

            if (register.details) {
                return setError(register.details[0].message.replace(/"/g, ''));
            }
            
            history.push('/login');
            
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <Layout>
            <form onSubmit={handleSubmit} className='user-form'>
                <label>
                    Firstname
                    <input id="firstname" type='text' onChange={(e) => {setFirstname(e.target.value)}}/>
                </label>
                <label>
                    Lastname
                    <input id="lastname" type='text' onChange={(e) => {setLastname(e.target.value)}}/>
                </label>
                <label>
                    Username
                    <input id="username" type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                </label>
                <label>
                    Password
                    <input id="password" type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <Button title='Register' className='form-button'/>
                {error ? <p className='error'>{error}</p> :  ''}
            </form>
        </Layout>
    )
}

export default Registration;

