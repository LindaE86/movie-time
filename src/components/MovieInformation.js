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
  console.log(movieInfo);

  return (
    <div>
      {movieInfo.loading ? (
        <div>Laddar</div>
      ) : (
        <div className="d-flex justify-content-center mb-2">
          <div className="card" style={{ width: "25rem"  }}>
            <img
              className="card-img-top"
              src={movieInfo.data.Poster}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{movieInfo.data.Title}</h5>
              <p className="card-text">{movieInfo.data.Plot}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b> Regissör:</b> {movieInfo.data.Director}</li>
              <li className="list-group-item"><b> Genre:</b> {movieInfo.data.Genre}</li>
              <li className="list-group-item"><b> Year:</b> {movieInfo.data.Year}</li>
              <li className="list-group-item"><b> Runtime:</b> {movieInfo.data.Runtime}</li>
              <li className="list-group-item"><b> Score:</b> {movieInfo.data.Metascore}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInformation;