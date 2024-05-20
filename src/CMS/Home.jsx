import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { photos } from '../Redux/Slice'
import { Link } from 'react-router-dom'

export default function Home({ title }) {

    const dispatch = useDispatch()
    const photo = useSelector(state => state.Sli.photoData)
    const page = 1
    const perPage = 12
    useEffect(() => {
        dispatch(photos({ page, perPage }))
    }, [dispatch])

    console.log(photo)

    return (
        <>
            <section
                id="hero"
                className="hero d-flex flex-column justify-content-center align-items-center"
                data-aos="fade"
                data-aos-delay={1500}
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1698762508035-1c654d35a66a?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>
                                Get <span>High Quality</span> Images
                            </h2>
                            <p style={{ color: "white", fontSize: "20px" }}>
                                High quality images to explore
                            </p>
                            <a href="" className="btn-get-started">
                                <Link className='text-light' to="/gallery">Explore</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <>

                <main id="main" data-aos="fade" data-aos-delay={1500}>
                    {/* ======= Gallery Section ======= */}
                    <section id="gallery" className="gallery">
                        <div className="container-fluid">
                            <div className="row gy-4 justify-content-center">
                                {photo?.slice(0, 12)?.map(item => (
                                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                        <Link to={`/${item.id}`}>
                                            <div className="gallery-item h-100">
                                                <img
                                                    src={item.urls.regular}
                                                    className="img-fluid"
                                                    alt=""
                                                    style={{ width: "300px", height: "250px" }}
                                                />

                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* End Gallery Section */}
                </main>
                {/* End #main */}
            </>




        </>
    )
}
