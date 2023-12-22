import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataUser } from "../features/counter/userSlice";

const dummyUser = {
  username: "user",
  password: "123",
};

 function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    if (username === dummyUser.username && password === dummyUser.password) {
      dispatch(dataUser(dummyUser.username));
      setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };


  return (
    <div className="App">
      {loggedIn ? (
        navigate(`/content`)
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          {/* <table class="table">
            <tr>
              <td>
                <h2>Login</h2>
              </td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handleLogin}>Login</button>
              </td>
            </tr>
          </table> */}

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
            <button onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
