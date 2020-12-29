import React, { useState } from 'react'
import LeftMenu from './NavSections/LeftMenu'
import RightMenu from './NavSections/RightMenu'
import { Drawer, Button } from 'antd'

import './NavSections/mainNav.css';

const Logo = require('../../resources/images/icon-movie.png')

function MainNav() {
    
    const [ visible, setVisible ] = useState(false);

    const showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    const onClose = () => {
      this.setState({
        visible: false,
      });
    };
    
    return (
      <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="menu__logo">
          <a href="/"><img src={Logo} alt="Logo" style={{ width: '100%', marginTop: '-5px' }} /></a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            {/* <Icon type="align-right" /> */}
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    )
}

export default MainNav;

// 로그아웃
// const logOutHandler = (props) => {
//     Axios.get('api/users/logout')
//     .then(response => {
//       if (response.data.success){
//         console.log(response.data)
//         props.history('/login')
//       } else {
//         alert('logout errer!')
//       }
      
//     })
//   }