import React, { useEffect, useState } from "react";
import axios from "axios";
const dummyUser = {
  username: "user",
  password: "123",
};

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [namaContent, setNamaContent] = useState();

  const handleLogin = () => {
    if (username === dummyUser.username && password === dummyUser.password) {
      setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

   useEffect(() => {
     axios
       .get(`http://universities.hipolabs.com/search?country=Indonesia`)
       .then((res) => setNamaContent(res.data))
       .catch((err) => console.log(err));
   }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h2>Welcome, {dummyUser.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <div className="container">
            <h1>Welcome, </h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name Universitas</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {namaContent?.map((item, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <button
                        className="btn btn-link text-decoration-none text-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {item.name}
                      </button>

                      {/*  */}
                      {/* <!-- Button trigger modal --> */}

                      {/* <!-- Modal --> */}
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Detail
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <table class="table">
                                <tr>
                                  <td>No. </td>
                                  <td>:</td>
                                  <td>{key + 1}</td>
                                </tr>
                                <tr>
                                  <th>Nama Universitas</th>
                                  <td>:</td>
                                  <td> {item.name}</td>
                                </tr>
                                <tr>
                                  <th>Website</th>
                                  <td>:</td>
                                  <td>{item.domains[0]}</td>
                                </tr>
                              </table>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </td>
                    <td>{item.web_pages[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
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
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
