import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'; 
import { API_URL, API_KEY, MOVIE_IMAGE_URL } from '../../Config';
import MainImage from './section/MainImage';
import GridCard from '../commons/GridCard'
import { Row } from 'antd';



function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
        
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint);
           
    }, [])

    //영화리스트 가져오기
    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
            console.log(response, "response")
            
            //setMovies([response.results]) 그리드 이미지를 가져오지 못하는 이슈발생 
            setMovies([...Movies, ...response.results])  
            setMainMovieImage(MainMovieImage || response.results[0])
            setCurrentPage(response.page)
        })
    }

    //더보기 버튼
    const loadMore = () => {
        // let endpoint = '';
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

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
                <Row gutter={[16,16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key= {index}>
                            <GridCard
                                image = { movie.poster_path?`${MOVIE_IMAGE_URL}w500${movie.poster_path}` : null }
                                movieId = { movie.id }
                                movieTitle = { movie.original_title }
                            />
                        </React.Fragment>

                    ))}
                </Row>


            </div>

            <div style = {{ display:'flex',justifyContent:'center'}}>
                <button onClick={loadMore}>Load More</button>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)
