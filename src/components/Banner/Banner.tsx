import React, { useEffect, useState } from 'react'
import { IMovie } from '../../types/types'
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import { Container, Content, Title, Button, Description, Fade } from './Banner.styled'

const baseURL = `https://image.tmdb.org/t/p/original/`

function Banner() {
  const [movie, setMovie] = useState<IMovie>({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      )
      return request;
    } 
    fetchData()
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <Container imageUrl={baseURL + movie.backdrop_path}>
      <Content>
        <Title>
          {movie?.title || movie?.name || movie?.original_name}
        </Title>

        <div>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>

        <Description>
          {truncate(movie?.overview, 150)}
        </Description>

      </Content>
      
      <Fade/>
    </Container>
  )
}

export default Banner
