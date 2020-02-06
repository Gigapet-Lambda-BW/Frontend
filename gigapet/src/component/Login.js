import React, { useState } from "react"
import { getToken } from "../axiosAuth"

export default function Login(props) {
    const [error, setError] = useState()
    const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await getToken(credentials)
      props.history.push("/")
    } catch (error) {
      const status = error.response && error.response.status
      switch (status) {
        case 401:
          setError("Incorrect email and/or password!")
          break
        default:
          setError(error.response)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}<br/>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        required
      /><br/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
      /><br/>
      <button>Login</button>
    </form>
  )
}
