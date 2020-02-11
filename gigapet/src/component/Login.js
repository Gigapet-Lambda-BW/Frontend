import React, { useState } from "react"
import { getToken } from "../axiosAuth"
import axios from 'axios'

export default function Login(props) {
    const [error, setError] = useState()
    const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value})
      console.log(credentials)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    axios
        .post('https://gigapet-bw-7.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/food-log')
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
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
