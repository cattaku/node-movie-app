import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'antd';


function Favorite(props) {
    
    //const user = useSelector(state => state.user)

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRuntime = props.movieInfo.runtime;

    const [favoriteNumber, setFavoriteNumber] = useState(0);
    const [favorited, setFavorited] = useState(false);

    const variavles = {
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRuntime: movieRuntime
    }

    useEffect(() => {
    
        Axios.post('/api/favorite/favoriteNumber', variavles)
        .then(response => {
            setFavoriteNumber(response.data.favoriteNumber)
            if (response.data.success) {  

            } else {
                alert ('favoriteNumber를 가져오는데 실패했습니다.')
            }
        });
       
        Axios.get('/api/favorite/favorited', variavles)
        .then(response => {
            setFavorited(response.data.favorited)
            if (response.data.success) {  
        
            } else {
                alert ('favorited 정보를 가져오는데 실패했습니다.')
            }
        });

    }, [])

    const clickFavorite = () => {

        if (favorited) {
            Axios.delete('/api/favorite/removeFavorite', variavles)
            .then(respones => {
                if (respones.data.success) {
                    alert ('favorite 리스트에서 삭제되었습니다')
                    setFavoriteNumber(favoriteNumber - 1);
                    setFavorited(!favorited);
                } else {
                    alert('favorite 리스트에서 삭제하기가 실패했습니다')
                }
            })
        
        } else {
            Axios.post('/api/favorite/addFavorite', variavles)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(favoriteNumber + 1);
                    setFavorited(!favorited);
                    alert ('favorite 리스트에 추가되었습니다');
                } else {
                    alert ('favorite 리스트에 추가하기가 실패했습니다')
                }
            })
        }

    }

    return (
        <div>
           <Button onClick={clickFavorite}> { favorited ? "Not Favorite" : "Add to Favorite"} {favoriteNumber} </Button>
        </div>
    )
}

export default Favorite
