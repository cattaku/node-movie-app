import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'; 
import { API_URL, API_KEY, MOVIE_IMAGE_URL } from '../../Config';
import MainImage from './section/MainImage';
import Xscroll from '../commons/Xscroll';
import GridCards from '../commons/GridCards'
import { Row } from 'antd';



function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [TvPopular, setTvPopular] = useState([]);
    
    const [CurrentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
        
        const moviePopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const tvPopular = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(moviePopular);
        fetchTV(tvPopular);
           
    }, [])

    //TV리스트 
    const fetchTV = (tvPopular) => {
        fetch(tvPopular)
            .then(res => res.json())
            .then(res => {
            console.log(res, "tvList")
            setTvPopular([...TvPopular, ...res.results])  
            // setTvPopular(res.results[0,1,2,3,4,5])     
            })
    }

    //영화리스트 가져오기
    const fetchMovies = (moviePopular) => {
        fetch(moviePopular)
            .then(res => res.json())
            .then(res => {
            
            console.log(res, "movieList")
            //setMovies([response.results]) 그리드 이미지를 가져오지 못하는 이슈발생 
            setMovies([...Movies, ...res.results])  
            setMainMovieImage(MainMovieImage || res.results[0])
            setCurrentPage(res.page)
        })
    }

    //더보기 버튼
    const loadMore = () => {
        const moviePopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(moviePopular);
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
            
            {/* tv popular */}
            <div style = {{ width:'85%', height:'100%',margin:'5rem auto', 
            border:'1rem', overflow:'auto', whiteSpace:'nowrap'}}>

                <h3>Tv program by popular </h3>
                <hr/>
                
                {TvPopular && TvPopular.map((tv, index) => (
                    <React.Fragment key = {index} >
                        <Xscroll
                            image = {tv.poster_path?`${MOVIE_IMAGE_URL}w300${tv.poster_path}` : null}
                            tvId = { tv.id }
                            tvTitle = { tv.original_name}
                        />
                    </React.Fragment>    
                ))}             
            </div>
            
            {/* movie Grid Cards */}
            <div style = {{ width:'85%',margin:'1rem auto'}}>
                <h3>Movies by latest</h3>
                <hr />
                <Row gutter={[16,16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key= {index}>
                            <GridCards
                                landingPage
                                image = { movie.poster_path?`${MOVIE_IMAGE_URL}w400${movie.poster_path}` : null }
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
