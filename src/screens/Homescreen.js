import React from 'react'
import Banner from '../Banner'
import './Homescreen.css'
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'

const Homescreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />

      <Row
        isLarge
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals.url}
      />
      <Row title="Trending Now " fetchUrl={requests.fetchTrending.url} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated.url} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies.url} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies.url} />

      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies.url} />
    </div>
  )
}

export default Homescreen
