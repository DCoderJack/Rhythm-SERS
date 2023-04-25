import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <>
        <nav class="z-2 navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rythm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success disabled" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* <a className="navbar-brand" to="/">NewsBuddy</a> */}
{/* <Link className="nav-link" aria-current="page" to="/" role="button">Home</Link>
<Link className="nav-link btn btn-primary" to="/Calm" role="button">Calm</Link>
<Link className="nav-link btn btn-primary" to="/Angry" role="button">Angry</Link>
<Link className="nav-link btn btn-primary" to="/Sad" role="button">Sad</Link>
<Link className="nav-link btn btn-primary" to="/Neutral" role="button">Neutral</Link>
<Link className="nav-link btn btn-primary" to="/Happy" role="button">Happy</Link> */}


{/* <button type="button" class="btn btn-primary mx-3" onClick={fetchMusicCalm}>Calm</button>
        <button type="button" class="btn btn-secondary mx-3" onClick={fetchMusicAngry}>Angry</button>
        <button type="button" class="btn btn-success mx-3" onClick={fetchMusicSad}>Sad</button>
        <button type="button" class="btn btn-danger mx-3" onClick={fetchMusicNeutal}>Neutral</button>
        <button type="button" class="btn btn-warning mx-3" onClick={fetchMusicHappy}>Happy</button> */}
    </>
  )
}

export default Navbar