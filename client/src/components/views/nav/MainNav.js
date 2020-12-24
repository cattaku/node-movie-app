import React, { useState } from 'react'
import { Drawer, Button, Icon } from 'antd'

function MainNav() {
    
    const [ visible, setVisible ] = useState(false)

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    return (
       
       <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
}

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