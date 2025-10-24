import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';
import AddUserPage from './pages/AddUserPage';
import axios from 'axios'


function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load users from localStorage on app start
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        
        // Load users from localStorage first
        const localUsers = JSON.parse(localStorage.getItem('addedUsers') || '[]');
        
        // Fetch users from API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (!response.data) {
          throw new Error('Failed to fetch users');
        }
        const apiUsers = await response.data;
        
        // Combine API users with locally added users
        setUsers([...apiUsers, ...localUsers]);
        setError(null);
      } catch (err) {
        setError(err.message);
        // Fallback to localStorage users if API fails
        const localUsers = JSON.parse(localStorage.getItem('addedUsers') || '[]');
        setUsers(localUsers);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now(), // Simple ID generation for local users
      address: {
        city: '',
        street: '',
        suite: '',
        zipcode: '',
        geo: { lat: '', lng: '' }
      },
      website: '',
      company: {
        name: newUser.company,
        catchPhrase: '',
        bs: ''
      }
    };
    
    const updatedUsers = [...users, userWithId];
    setUsers(updatedUsers);
    
    // Save to localStorage
    const localUsers = JSON.parse(localStorage.getItem('addedUsers') || '[]');
    localStorage.setItem('addedUsers', JSON.stringify([...localUsers, userWithId]));
  };


  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                users={users} 
                loading={loading} 
                error={error}
                
              />
            } 
          />
          <Route 
            path="/user/:id" 
            element={<UserDetailsPage users={users} />} 
          />
          <Route 
            path="/add-user" 
            element={<AddUserPage onAddUser={addUser} />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
}



export default App
