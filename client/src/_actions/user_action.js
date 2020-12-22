import Axios from 'axios'
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from './types'


// 로그인
export function loginUser(dataToSubmit) {
    const request = Axios.post('api/users/login', dataToSubmit)
      .then(response => response.data )
    return { 
        type : LOGIN_USER,
        payload : request
    }

}

// 회원가입
export function registerUser(dataToSubmit) {
  const request = Axios.post ('/api/users/register', dataToSubmit)
    .then(response => response.data)
    return {
      type: REGISTER_USER,
      payload: request
    }
}

// 회원권한 인증
export function auth(dataToSubmit) {
  const request = Axios.get('api/users/auth', dataToSubmit)
  .then(response => response.data)
  return {
    type: AUTH_USER,
    payload: request
  }
}