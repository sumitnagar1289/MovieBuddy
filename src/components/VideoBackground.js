import React from "react";

import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";


export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.mainMovieTrailer);
 useTrailerVideo(movieId);
  return (
    <div className=" mt-0">
      <iframe
      className="w-full h-full aspect-video"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  );
};
