import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'; 
import { API_URL, API_KEY, MOVIE_IMAGE_URL } from '../../Config';
import MainImage from './section/MainImage'


function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null)
    
    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
            console.log(response, "response")

            setMovies([response.results])
            setMainMovieImage(response.results[0])
        })
            
    }, [])


    return (
        <div style = {{ width:'100%',margin:'0'}}>
            {/* Main  Image */}
            {MainMovieImage &&   //&&표현식 MainMovieImage 가 있으면
                <MainImage 
                    image = {`${MOVIE_IMAGE_URL}w1280${MainMovieImage.backdrop_path}`} 
                    title = {MainMovieImage.original_title}
                    discription = {MainMovieImage.overview}
                />
            }
      
            <div style = {{ width:'85%',margin:'1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr />
                {/* movie Grid Cards */}
            </div>

            <div style = {{ display:'flex',justifyContent:'center'}}>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)
