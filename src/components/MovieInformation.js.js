import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInformation = () => {
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?i=${params.id}&apikey=ce5f6188`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (!response.json) {
      return;
    }

    setMovieInfo({
      data: responseJson,
      loading: false,
    });
  };

  const params = useParams();
  const [movieInfo, setMovieInfo] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    getMovieRequest(params);
  }, []);

  return (
    <div>
      {movieInfo.loading ? (
        <div>Laddar</div>
      ) : (
        <div>
          <img src={movieInfo.data.Poster}></img>
          {movieInfo.data.Title}
          {movieInfo.data.Country}
          {movieInfo.data.Plot}
        </div>
      )}{" "}
    </div>
  );
};

export default MovieInformation;