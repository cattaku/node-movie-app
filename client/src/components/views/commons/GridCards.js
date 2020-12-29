import React from 'react'
import { Col } from 'antd'

function GridCards(props) {

    if (props.landingPage){
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position:'relative'}}>
                    <a href = {`/movie/${props.movieId}`}>
                        <img style={{width:'100%', height:'320px'}} alt={props.movieTitle} src={props.image}  />
                    </a>
                </div>
            </Col>
        )

    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position:'relative'}}>
                        <img style={{width:'100%', height:'320px'}} alt={props.actorName} src={props.image}  />             
                </div>
            </Col>
        )
    }
    
}

export default GridCards