import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { photos } from '../Redux/Slice'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Pagination } from '@mui/material'

export default function Latest() {
    const [page, setPage] = useState(1)
    const perPage = 12
    const handle=(e,newPage)=>{
        setPage(newPage)
    }
    const dispatch = useDispatch()
    const photo = useSelector(state => state.Sli.photoData)

    useEffect(() => {
        dispatch(photos({page,perPage}))
    }, [dispatch,page,perPage])

    console.log(photo)

    return (
        <>
            <Helmet>
                <title>Latest Photos</title>
            </Helmet>
            <div className="page-header d-flex align-items-center">
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Latest Collections</h2>

                        </div>
                    </div>
                </div>
            </div>

            <>

                <main id="main" data-aos="fade" data-aos-delay={1500}>
                    {/* ======= Gallery Section ======= */}
                    <section id="gallery" className="gallery">
                        <div className="container-fluid">
                            <div className="row gy-4 justify-content-center">
                                {photo.map(item => (
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
                    <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', margin: "10px 0px" }}>
                        <Pagination
                            count={perPage}
                            page={page}
                            onChange={handle}
                            color="primary"
                            size="large"
                            sx={{ '& .MuiPaginationItem-textPrimary': { color: 'white' } }} // Change text color to white
                        />
                    </div>
                    {/* End Gallery Section */}
                </main>
                {/* End #main */}
            </>




        </>
    )
}
