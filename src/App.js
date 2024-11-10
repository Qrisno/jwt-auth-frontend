import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './login/Login';
import Register from './register/Register';
import axios from 'axios';

function App() {

  const [token, setToken] = useState('');
  const fetchTshirt = async () => {
    try {
        const response = await axios.get('http://localhost:8080/tshirt', {
            headers: { Authorization: token }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Failed to fetch tshirt');
    }
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JWT Authentication By Sheeep</h1>
      <Login setToken={setToken}/>
      <Register/>
      </header>
     
    </div>
  );
}

export default App;
