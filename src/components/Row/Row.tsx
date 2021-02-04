import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from '../../utils/axios'
import { IMovie, RowProps } from '../../types/types'
import { Options } from 'react-youtube'
import { Container, PostersContainer, Poster } from './Row.styled'

const baseURL = `https://image.tmdb.org/t/p/original/`

function Row({ title, fetchURL, isLargeRow }: RowProps) {
  const [movies, setMovies]         = useState<IMovie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])
  

  const handleClick = (movie: IMovie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url: string) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
    }
  } 

  const trailerOptions: Options = {
    height: '420',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <Container>
      <h2>{title}</h2>

      <PostersContainer>
        {movies.map(movie => (
          <Poster 
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path ?? movie.poster_path}`} 
            alt={movie.name}
            title={movie.name}
            key={movie.id} 
            onClick={() => handleClick(movie)}
            large={isLargeRow}
          />
        ))}
      </PostersContainer>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOptions}/>}
      
    </Container>
  )
}

export default Row
