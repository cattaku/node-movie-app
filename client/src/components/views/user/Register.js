import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'
import '../../resources/css/layout.css';

function Register(props) {

    const dispatch = useDispatch();

    const [userName, setUserName] = useState(""); 
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    
    const nameHandler = (event) => {
        setUserName(event.currentTarget.value)
      }
    const emailHandler = (event) => {
        setEmail(event.currentTarget.value)
      }
    const passwordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            return alert('비밀번호가 일치하지 않습니다')
        }

        let body = {
            email:email,
            password:password,
            name:userName
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    alert("회원가입이 성공하였습니다")
                    props.history.push('/login')
                } else {
                    alert ('Failed to sign up')
                }
            })
    }

    return (
        <div class="basic-layout">
            <form class="login-form" onSubmit={onSubmitHandler}>
                <input type="text" id="" value={userName} placeholder="이름" onChange={nameHandler}/>
                <input type="email" id="" value={email} placeholder="email" onChange={emailHandler}/>
                <input type="password" id="" value={password} placeholder="비밀번호를 입력해주세요" onChange={passwordHandler}/>
                <input type="password" id="" value={confirmPassword} placeholder="비밀번호를 한번 더 확인해주세요" onChange={confirmPasswordHandler}/><br/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default withRouter(Register)
