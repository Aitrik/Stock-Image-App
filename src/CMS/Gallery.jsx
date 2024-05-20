import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gallery } from '../Redux/Slice'
import { Link } from 'react-router-dom'
import { Pagination } from '@mui/material'
import { Helmet } from 'react-helmet'


export default function Gallery() {
  const [page, setPage] = useState(1)
  const perPage = 12
  const handle = (event, pageNo) => {
    setPage(pageNo)
  }
  const { galleryData } = useSelector(state => state.Sli)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(gallery({ page,perPage }))
  }, [dispatch, page,perPage])


  
  console.log(galleryData)
  return (
    <>
   <Helmet>
    <title>Popular Images</title>
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
                {galleryData?.map((item) => (
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
                {/* End Gallery Item */}

              </div>
            </div>
          </section>
          {/* End Gallery Section */}
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
        </main>
        {/* End #main */}
      </>


    </>
  )
}
