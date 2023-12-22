import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function Content() {
  const [userName, setUserName] = useState()
  const state = useSelector((state) => state)

    const [namaContent, setNamaContent] = useState();
    useEffect(() => {
        axios
          .get(`http://universities.hipolabs.com/search?country=Indonesia`)
          .then((res) => {
            setNamaContent(res.data)
            setUserName(state.user.data);
          })
          .catch((err) => console.log(err + "<<<<<<< Error"))
      }, []);
      
  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>
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
                            <tr>Nama Universitas</tr>
                            <td>:</td>
                            <td> {item.name}</td>
                          </tr>
                          <tr>
                            <tr>Website</tr>
                            <td>:</td>
                            <td>
                              <a
                                className="text-decoration-none text-dark"
                                href={item.web_pages[0]}
                              >
                                {item.web_pages[0]}
                              </a>
                            </td>
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
  );
}

export default Content