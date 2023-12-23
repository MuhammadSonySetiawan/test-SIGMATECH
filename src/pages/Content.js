import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function Content() {
  const state = useSelector((state) => state)
  const [userName, setUserName] = useState()
  useEffect(()=>{
    // setUserName(state?.user?.data)
  },[])

  // setUserName(state?.user?.data);
    const [namaContent, setNamaContent] = useState();
    useEffect(() => {
      axios
      .get(`http://universities.hipolabs.com/search?country=Indonesia`)
      .then((res) => {
        setUserName(state?.user?.data);
        setNamaContent(res.data)
      })
      .catch((err) => console.log(err + "<<<<<<< Error"))
    }, [state]);
    
    
  return (
    <div className="container">
      <h1>
        Welcome,
        {userName}
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name Universitas</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
       
        <tbody>
          {namaContent?.map((item, key) =>  {
            return(
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
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Detail
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <table className="table">
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
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
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
            )
          }
          )}
        </tbody>
        
      </table>
    </div>
  );
}

export default Content