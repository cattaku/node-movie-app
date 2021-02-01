import React from 'react';
import './tvScroll.css';
function Xscroll(props) {
    
    return (
       
        <div class="tvGrid_main">
            <div class="items">
                <a href = {`/tv/${props.tvId}`}>
                    <img style = {{width:'110px', height:'150px'}} alt={props.tvTitle} src={props.image}  />
                    <div><p>{props.tvTitle}</p></div>
                </a>
            </div>
        </div>
   
    )
}

export default Xscroll
