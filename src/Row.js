import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, isLarge = false, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `https://api.themoviedb.org/3${fetchUrl} `,
      ).then((res) => res.json())

      setMovies(request.results)

      return request
    }

    fetchData()
  }, [fetchUrl])

  console.log(movies)

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLarge && 'row__posterLarge'}`}
              key={movie?.id}
              alt={movie?.name}
              src={`${baseUrl}${
                isLarge ? movie?.poster_path : movie?.backdrop_path
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row
