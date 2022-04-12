import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from './components/UI/Button';
import Auth from './components/auth/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Button> Home </Button>} />
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Button>Login</Button>} />
        <Route path="signup" element={<Button>Signup</Button>} />
      </Route>
      <Route path="*" element={<h1>No Match</h1>} />
    </Routes>
  );
}

export default App;
