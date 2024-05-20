import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { collect_photos } from '../Redux/Slice';
import { Pagination } from '@mui/material';
import { Helmet } from 'react-helmet';

const CollectId = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { c } = useSelector(state => state.Sli);
    const perPage = 12; 
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(collect_photos({ id, page, perPage }));
    }, [dispatch, id,page,perPage]);
    const handlePageChange = (event, newPage) => {
        setPage(newPage); 
    };


    console.log(c)
    console.log(id)
    return (
        
        <main id="main" data-aos="fade" data-aos-delay={1500}>
            <Helmet>
                <title>Collection Photos</title>
            </Helmet>
            <div className="page-header d-flex align-items-center">
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Collection Photos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-lg-5' style={{ display: "flex", flexWrap: "wrap", gap: "30px", margin: "0px 40px" }}>
                {c && c.length > 0 ? (
                    c?.map((item) => (
                        <Link to={`/${item.id}`}>
                            <div className="card" key={item.id} style={{ width: "18rem", background: 'transparent' }}>
                                <img src={item.urls.regular} className="card-img-top" alt={item.alt_description} style={{ width: "300px", height: "250px" }} />
                            </div>
                        </Link>
                    ))
                ) : (
                    <h3 className='text-dark'>No Data Found</h3>
                )}
            </div>
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', margin: "10px 0px" }}>
                <Pagination
                    count={perPage} // Calculate total pages based on total items and items per page
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    sx={{ '& .MuiPaginationItem-textPrimary': { color: 'white' } }} // Change text color to white
                />
            </div>
        </main>
    );
};

export default CollectId;
