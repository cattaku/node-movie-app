import React, { useState, useEffect }from 'react'
import { API_URL, API_KEY, MOVIE_IMAGE_URL } from '../../Config'
import MainImage from '../LandingPage/section/MainImage'
import MovieInfo from './MovieSections/MovieInfo'
import GridCards from '../commons/GridCards'
import { Row } from 'antd'
import { Favorite } from './MovieSections/Favorite'


function MovieDetail(props) {

    let movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState([])
    const [Actor, setActor] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    //로딩시 영화 API 불러오기
    useEffect(() => {

        //배우정보 API
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        //영화정보 API
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(result => result.json())
            .then(result => {
                console.log(result, "result")
                setMovie(result)
            })

        fetch(endpointCrew)
            .then(result => result.json())
            .then(result => {
                console.log(result, "cast")
                setActor(result.cast)
            })    
    }, [])

    //Toggle button
    const toggleActor = () => {
       setActorToggle(!ActorToggle)
    }

    //Template
    return (
        <div>
            {/* Header */}
            <MainImage 
                    image = {`${MOVIE_IMAGE_URL}w1280${Movie.backdrop_path}`} 
                    title = {Movie.original_title}
                    discription = {Movie.overview}
            />

            {/* Body */}
            <div style={{ width:'85%', margin:'1rem auto'}}>
                {/* Favorite Button */}
                <div style={{ display:'flex', justifyContent:'flex-end'}}>
                <button> Favorite </button>
                    {/* <Favorite movieInfo={Movie} movieId={movieId} movieFrom={} /> */}
                </div>

                {/* MovieInfo */}
                <MovieInfo 
                    movie = { Movie }
                />
                <br/>

                {/* Actor Grid */}
                <div style={{display:'flex',  justifyContent:'center', margin:'2rem' }}>
                    <button onClick={toggleActor}> Toggle Actor View </button>
                </div>
              
                    { ActorToggle && 
                        <Row gutter={[16,16]}>
                            {Actor.map((actor, index) => (        
                            <GridCards
                                actor image = { actor.profile_path?`${MOVIE_IMAGE_URL}w500${actor.profile_path}` : null }
                                actorName = { actor.character + actor.name }
                            />
                        ))}
                        </Row>
                    }
                


            </div>

            
        </div>
    )
}

export default MovieDetail
