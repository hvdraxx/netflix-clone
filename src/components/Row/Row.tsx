import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../utils/axios";
import { Options } from "react-youtube";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { IMovie, RowProps } from "../../types/types";
import { Container, PostersContainer, Poster } from "./Row.styled";

const baseURL = `https://image.tmdb.org/t/p/original/`;

function Row({ title, fetchURL, isLargeRow }: RowProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const [allowScroll, setallowScroll] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (event: React.MouseEvent, movie: IMovie) => {
    event?.stopPropagation();
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      ).then((url: string) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  const mouseDownHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setallowScroll(true);
    setMouseDownPos(event.clientX);
  };

  const mouseUpHandler = () => {
    setallowScroll(false);
  };

  const scrollHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    if (allowScroll) {
      if (mouseDownPos <= event.clientX) {
        event.currentTarget.scrollBy((mouseDownPos - event.clientX) / 15, 0);
      } else {
        event.currentTarget.scrollBy((mouseDownPos - event.clientX) / 15, 0);
      }
    }
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

      <PostersContainer
        onMouseDown={mouseDownHandler}
        onMouseMove={scrollHandler}
        onMouseUp={mouseUpHandler}
      >
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
            onDoubleClick={(event) => handleClick(event, movie)}
            large={isLargeRow}
            className="lazyload"
          />
        ))}
      </PostersContainer>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOptions} />}
    </Container>
  );
}

export default Row;
