
import React, {useEffect} from 'react'
import Axios from 'axios';
import { withRouter } from 'react-router-dom'; 

function LandingPage() {

    const logOutHandler = (props) => {
        Axios.get('api/users/logout')
        .then(response => {
          if (response.data.success){
            console.log(response.data)
            props.history('/login')
          } else {
            alert('logout errer!')
          }
          
        })
      }
    return (
        <div>
            <button onClick={logOutHandler}>로그아웃</button>
            
            <p>LandingPage</p>
            <p>LandingPage</p>
        </div>
    )
}

export default withRouter(LandingPage)
