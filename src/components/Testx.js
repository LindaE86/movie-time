import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const Testx = () => {

    const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?i=${params.id}&apikey=ce5f6188`;

		const response = await fetch(url);
		const responseJson = await response.json();

        if(!response.json) {
            return;
        }

        setMovieInfo({
            "data": responseJson,
            "loading": false
        })
};

    const params = useParams()
    const [movieInfo, setMovieInfo] = useState({
        "loading": true,
        "data": null
    })

    useEffect(() => {
        getMovieRequest(params)
      }, []);


    console.log("data", movieInfo)
      

    return (
        <div>{movieInfo.loading ? <div>Laddar</div> : <div> {movieInfo.data.Title} </div>} </div>)

}



export default Testx;