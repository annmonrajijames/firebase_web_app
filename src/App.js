import React, { useState } from 'react';

function App() {
  // State to store the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the authentication logic here or send the data to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
