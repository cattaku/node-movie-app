import Axios from 'axios'

import React, { useEffect, useSelector } from 'react'

function Favorite(props) {
    
    //const user = useSelector(state => state.user)

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
   // const movieRuntime = props.movieInfo.runtime;

    const variavles = {
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        //movieRunTime: movieRunTime
    }

    useEffect(() => {
    
        Axios.post('/api/favorite/favoriteNumber', variavles)
        .then(response => {
            console.log(response.data, "favorite");
            if (response.data.success) {
                
            } else {
                alert ('favorite 정보를 가져오는데 실패했습니다.')
            }
        });
       
    }, [])



    return (
        <div>
           <button> Favorite </button>
        </div>
    )
}

export default Favorite
