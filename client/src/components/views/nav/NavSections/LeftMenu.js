import React from 'react';
import { Menu, Input} from 'antd';



function LeftMenu(props) {
  const  { Search }  = Input;

  return (
    // <Menu mode={props.mode}>
    //   <Menu.Item key="favorite">
    //     <a href="/favorite">Favorite</a>
    //   </Menu.Item>
    // </Menu>
    <div style={{paddingTop:'1.5rem', alignItems:'center'}}>
      {/* <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="small"
            style={{ width:'15rem', margin:'1 10px', fontSize:'0.5rem'}}
      /> */}
      <Search placeholder="input search text" 
              style={{ width: 200 }} 
              size="small"
      
      />
    </div>
    

  )
}

export default LeftMenu;