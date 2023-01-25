import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function RegisterForm() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const setValues = e => {
    setPassword('');
    setEmail('')
    setUsername('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        name: username,
        password: password,
        email: email
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
    setValues()
  }
  return (
    <div className='container p-4'>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* useranem    */}
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={e => { setUsername(e.target.value) }}
                    className="form-control"
                  />
                </div>
                <br />
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
                  <button className="btn btn-success btn-block">Register</button>
                </div>
                <br />
                <div>
                  <Link className="btn btn-success" to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
