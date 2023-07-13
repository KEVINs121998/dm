import React, { useState } from 'react'
import '../../login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleClick() {
    // console.log("username : ", username)
    // console.log("password : ", password)
    const res = await fetch("http://localhost:3001/admin/login", {
      method: "POST",
      data: null,
      headers: {'Content-Type': 'application/json', username: username, password: password}
    })
    const resText = await res.text();
    // console.log("res : ", res)
    // console.log("resText: ", resText);
    if (!res.ok || res.status !== 200) {
      alert(resText)
    } else {
      navigate("/")
    }
  }

  return (
    <div >
  <section>
    {" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span />
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>
        <div className="form">
          <div className="inputBox">
            <input onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" required="" /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" required="" /> <i>Password</i>
          </div>
          <div className="links">
            {" "}
            <a href="#">Forgot Password</a> <a href="#">Signup</a>
          </div>
          <div className="inputBox">
            <input onClick={handleClick} type="submit" defaultValue="Login" />
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  
    </div>
  )
}

export default Login