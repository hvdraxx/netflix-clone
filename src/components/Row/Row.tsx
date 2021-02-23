import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Options } from "react-youtube";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import axios from "../../utils/axios";
import { IMovie, RowProps } from "../../types/types";
import { Container, PostersContainer, Poster, Error } from "./Row.styled";

const baseURL = `https://image.tmdb.org/t/p/original/`;

function Row({
  title,
  fetchURL,
  isLargeRow,
  activeRow,
  setActiveRow,
}: RowProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const [trailerError, setTrailerError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    if (activeRow !== title) {
      setTrailerUrl("");
      setTrailerError(false);
    }
  }, [fetchURL, activeRow, title]);

  const handleClick = (event: React.MouseEvent, movie: IMovie) => {
    event?.stopPropagation();
    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url: string) => {
        setTrailerError(false);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(() => {
        setTrailerError(true);
        setTrailerUrl("");
      });

    setActiveRow(title);
  };

  const mouseOverHandler = (event: React.MouseEvent) => {
    const elem = event.currentTarget;

    const wheelHandler = (event: any) => {
      event.preventDefault();
      if (event.deltaY > 0) elem.scrollBy(10, 0);
      else elem.scrollBy(-10, 0);
    };

    elem.addEventListener("wheel", wheelHandler, { passive: false });
  };

  const trailerOptions: Options = {
    height: "420",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Container>
      <h2>{title}</h2>

      <PostersContainer onMouseOver={mouseOverHandler}>
        {movies.map((movie) => (
          <Poster
            src="/images/img-placeholder.png"
            data-srcset={`${baseURL}${
              isLargeRow
                ? movie.poster_path
                : movie.backdrop_path ?? movie.poster_path
            }`}
            alt={movie.name}
            title={movie.name}
            key={movie.id}
            onClick={(event) => handleClick(event, movie)}
            large={isLargeRow}
            className="lazyload"
          />
        ))}
      </PostersContainer>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOptions} />}

      {trailerError && <Error>There is no trailer for this movie 🤷🏻‍♂️</Error>}
    </Container>
  );
}

export default Row;
