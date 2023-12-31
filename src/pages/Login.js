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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === dummyUser.username && password === dummyUser.password) {
      dispatch(dataUser(dummyUser.username));
      navigate(`/content`);
      // setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="App container d-flex flex-column justify-content-center align-items-center"
      style={{ marginTop: "25vh" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center border border-2 w-70 p-3 rounded-2">
        <h2>Login</h2>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mx-3 "
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mx-3 "
            />
          </label>
        </div>
        <br />
        <button className="rounded-2" onClick={handleLogin}>
          Sign In
          
        </button>
      </div>
    </div>
  );
}

export default App;
