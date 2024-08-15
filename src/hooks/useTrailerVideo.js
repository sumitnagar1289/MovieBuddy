import  { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch  } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

 const useTrailerVideo =(movieId)=>{

    const dispatch = useDispatch();

    const mainMovietrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        API_OPTIONS
      );
      const json = await data.json();
      const trailerFilterData = json.results.filter(
        (trailer) => trailer.name === "Official Trailer"
      );
      const trailer = trailerFilterData.length
        ? trailerFilterData[0]
        : json.results[0];
      dispatch(addTrailer(trailer));
    };
  
    
  
    useEffect(() => {
      mainMovietrailer();
    }, []);
}

export default useTrailerVideo;
