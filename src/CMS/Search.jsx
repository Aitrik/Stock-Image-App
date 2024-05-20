import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { search } from '../Redux/Slice';
import { Pagination } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function Search() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { searchResult } = useSelector(state => state.Sli);

    const [page, setPage] = useState(1); // Local state for current page
    const perPage = 12; // Number of items per page

    useEffect(() => {
        dispatch(search({ name, page, perPage })); // Dispatch search with page and per_page parameters
    }, [dispatch, name, page, perPage]); // Include dependencies in the useEffect dependency array

    const handlePageChange = (event, newPage) => {
        setPage(newPage); // Update local page state
    };

    return (

        <>
            <Helmet>
                <title>Search Results for: {name}</title>
            </Helmet>

            <main id="main" data-aos="fade" data-aos-delay={1500}>
                <div className="page-header d-flex align-items-center">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>Search Results for: {name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-lg-5' style={{ display: "flex", flexWrap: "wrap", gap: "30px", margin: "0px 40px" }}>
                    {searchResult && searchResult.results && searchResult.results.length > 0 ? (
                        searchResult.results.map((item) => (
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
        </>
    );
}
