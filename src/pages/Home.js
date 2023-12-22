import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Content from "./Content"
const dummyUser = {
  username: "user",
  password: "123",
};

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

  const handleLogin = () => {
    if (username === dummyUser.username && password === dummyUser.password) {
      setLoggedIn(true);
    //   navigate("/content");
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };
console.log(username)
  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h2>Welcome, {dummyUser.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <Content />
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h2>Login</h2>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
