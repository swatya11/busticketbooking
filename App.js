import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Dummy ticket data
  const dummyTickets = [
    { id: 1, destination: 'City A', date: '2023-10-15', time: '10:00 AM', price: 20 },
    { id: 2, destination: 'City B', date: '2023-10-16', time: '11:00 AM', price: 25 },
    { id: 3, destination: 'City C', date: '2023-10-17', time: '12:00 PM', price: 30 },
  ];

  // Registration function
  const handleRegistration = () => {
    // Implement registration logic here
    console.log('User registered:', registrationData);
  };

  // Login function
  const handleLogin = () => {
    // Implement login logic here
    console.log('User logged in:', loginData);
    setLoggedIn(true);
  };

  // Logout function
  const handleLogout = () => {
    setLoggedIn(false);
    setUser({});
  };

  // Add ticket to the booking
  const addToBooking = (ticket) => {
    setSelectedTickets([...selectedTickets, ticket]);
  };

  // Remove ticket from the booking
  const removeFromBooking = (ticket) => {
    const updatedTickets = selectedTickets.filter((t) => t.id !== ticket.id);
    setSelectedTickets(updatedTickets);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bus Ticket Booking App</h1>
        {loggedIn ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
            <h2>Available Tickets</h2>
            <ul>
              {dummyTickets.map((ticket) => (
                <li key={ticket.id}>
                  {ticket.destination} - {ticket.date} - {ticket.time} - ${ticket.price}
                  <button onClick={() => addToBooking(ticket)}>Add to Booking</button>
                </li>
              ))}
            </ul>
            <h2>Booking Summary</h2>
            <ul>
              {selectedTickets.map((ticket) => (
                <li key={ticket.id}>
                  {ticket.destination} - {ticket.date} - {ticket.time} - ${ticket.price}
                  <button onClick={() => removeFromBooking(ticket)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Registration</h2>
            <input
              type="text"
              placeholder="Name"
              value={registrationData.name}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, password: e.target.value })
              }
            />
            <button onClick={handleRegistration}>Register</button>

            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
