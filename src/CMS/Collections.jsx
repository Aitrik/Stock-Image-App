import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collections, gallery } from '../Redux/Slice'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Pagination } from '@mui/material'


export default function Collections() {
    const [page, setPage] = useState(1)
    const perPage = 12
    const handle = (e, newPage) => {
        setPage(newPage)
    }
    const { collectData } = useSelector(state => state.Sli)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(collections({ page, perPage }))
    }, [page,perPage])

    

    console.log(collectData)
    return (
        <>
            <Helmet>
                <title>All Collections</title>
            </Helmet>
            <>
                <main id="main" data-aos="fade" data-aos-delay={1500}>
                    {/* ======= End Page Header ======= */}
                    <div className="page-header d-flex align-items-center">
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Popular Collections</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Header */}
                    {/* ======= Gallery Section ======= */}
                    <section id="gallery" className="gallery">
                        <div className="container-fluid">
                            <div className="row gy-4 justify-content-center">
                                {collectData?.map((item) => (
                                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                        <Link to={`/c/${item.id}`}>
                                            <div className="gallery-item h-100">
                                                <img
                                                    src={item.
                                                        preview_photos?.map(item => item.urls.small)}
                                                    className="img-fluid"
                                                    alt=""
                                                    style={{ width: "300px", height: "250px" }}
                                                />
                                                <div>
                                                    <h6>{item.title}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                                {/* End Gallery Item */}

                            </div>
                        </div>
                    </section>
                    {/* End Gallery Section */}
                    <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', margin: "10px 0px" }}>
                        <Pagination
                            count={perPage} // Calculate total pages based on total items and items per page
                            page={page}
                            onChange={handle}
                            color="primary"
                            size="large"
                            sx={{ '& .MuiPaginationItem-textPrimary': { color: 'white' } }} // Change text color to white
                        />
                    </div>
                </main>
                {/* End #main */}
            </>


        </>
    )
}
