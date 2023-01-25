import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";
function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status,setStatus] = useState("");
  const setValues = e => {
    setPassword('');
    setEmail('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => setStatus(res.data.redirectUrl)).catch((error) => {
      setStatus(error.response.data.redirectUrl)
    });
    setValues();
    console.log(status)
    
  }
  return (
    <div className='container p-4'>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="email for an image"
                    onChange={e => { setEmail(e.target.value) }}
                    className="form-control"
                  />
                </div>
                <br />
                {/* password */}
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password for an image"
                    onChange={e => { setPassword(e.target.value) }}
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <button className="btn btn-success btn-block">Login</button>
                </div>
                <br />
                <div>
                  <Link className="btn btn-success" to="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
