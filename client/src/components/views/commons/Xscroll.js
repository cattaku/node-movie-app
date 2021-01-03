import React from 'react';
import { Col, Table } from 'antd';
import xScroll from './tvScroll.css'

function Xscroll(props) {
    
    return (
        //inline-block으로 스타일 변경 할것
          
        <div class="tab-inner" style={{display:'inline-grid'}}>
            <div class="items" style={{padding:'5px'}}>
                <a href = {`/tv/${props.tvId}`}>
                    <img style = {{width:'200px', height:'300px'}} alt={props.tvTitle} src={props.image}  />
                </a>
                <p>{props.tvTitle}</p>
            </div>
        </div>
        
   
    )
}

export default Xscroll
