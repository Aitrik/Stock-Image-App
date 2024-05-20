import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Header() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handle = (e) => {
    e.preventDefault()
    if (search.trim() !== "") {
      navigate(`/search/${search}`)
      setSearch("")
    }
  }
  return (
    <>
      <>
        {/* ======= Header ======= */}
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <Link to="/">
              <a
                href=""
                className="logo d-flex align-items-center  me-auto me-lg-0"
              >
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <i className="bi bi-camera" />
                <h1>Gallery Grove</h1>
              </a>
            </Link>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="" className="active">
                    <Link to="/">Home</Link>
                  </a>
                </li>

                <li className="dropdown">
                  <a href="#">
                    <Link to="/gallery"> <span>Popular</span>{" "}</Link>

                  </a>

                </li>

                <li className="dropdown">
                  <a href="#">
                    <Link to="/latest"> <span>Latest</span>{" "}</Link>

                  </a>

                </li>
                <li className="dropdown">
                  <a href="#">
                    <Link to="/collections"> <span>Collections</span>{" "}</Link>

                  </a>

                </li>

              </ul>

            </nav>

            <form class="d-flex" role="search" onSubmit={handle}>
              <input class="form-control me-2" value={search} type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
              <button class="btn btn-outline-success" type="submit" onClick={handle}>Search</button>
            </form>

            {/* .navbar */}

          </div>
        </header>
        {/* End Header */}
      </>



    </>
  )
}
