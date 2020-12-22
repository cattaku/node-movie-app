import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../../../_actions/user_action';

import '../../resources/css/layout.css';



function Login(props) {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    let body = {
      email:email,
      password:password
    }

    dispatch(loginUser(body))  
      .then(response => {
        if (response.payload.loginSuccess) {
          props.history.push('/')
        } else {
          alert("Error")
        }
      })
  }

  return (
    <div class="basic-layout">
      <form class="login-form" onSubmit={onSubmitHandler}>
        {/* <label>e-mail</label> */}
        <input type="email" value={email} placeholder="example@example.com" onChange={emailHandler} />
        {/* <label>password</label> */}
        <input type="password" value={password} placeholder="password" onChange={passwordHandler}/><br/>
        <button id="login-btn" type="submit">Login</button>
        
      </form>
    </div>
  )
  }
  //git test


export default withRouter(Login)
