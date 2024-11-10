import React, { useState } from 'react';
import axios from 'axios';

const Login = ({setToken})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8080/auth/login',{username, password}, { withCredentials: true });
            console.log(res)
            setToken(res.data.token);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        
            <input type='text' onChange={(e)=> setUsername(e.target.value)}/>
            <input type='text' onChange={(e)=> setPassword(e.target.value)}/>
            
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;