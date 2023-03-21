import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
};

export default App;