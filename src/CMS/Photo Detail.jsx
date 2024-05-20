import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { photos_id } from '../Redux/Slice';
import { Helmet } from 'react-helmet';
import fileDownload from "js-file-download";
import { Pagination } from '@mui/material';

export default function Photo_Detail() {
    const { id } = useParams();
    const { photoDet } = useSelector(state => state.Sli);
    const dispatch = useDispatch();

    const [downloadUrl, setDownloadUrl] = useState('');

    useEffect(() => {
        dispatch(photos_id(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (photoDet?.links?.download) {
            setDownloadUrl(photoDet.links.download);
        }
    }, [photoDet]);

   
    
   
    
    
    
    return (
        <>
            <Helmet>
                <title>Photo Details</title>
            </Helmet>
            <main id="main" data-aos="fade" data-aos-delay={1500}>
                <div className="page-header d-flex align-items-center">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>Photo Information</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="gallery-single" className="gallery-single">
                    <div className="container">
                        <div className="position-relative h-100 photo-container">
                            <div className="slides-1 portfolio-details-slider swiper">
                                <div className="align-items-center">
                                    <div className="swiper-slide">
                                        <img src={photoDet?.urls?.regular} style={{ height: "600px", width: "800px" }} alt={photoDet?.alt_description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between gy-4 mt-4">
                            <div className="col-lg-8">
                                <div className="portfolio-description">
                                    <h2>{photoDet?.alt_description}</h2>
                                    <p>
                                        Country: {photoDet?.location?.country || "NA"}
                                        <span style={{ marginLeft: "30px" }}></span>
                                        City: {photoDet?.location?.city || "NA"}
                                    </p>
                                    <p>
                                        Views: {photoDet?.views}
                                        <span style={{ marginLeft: "30px" }}></span>
                                        Downloads: {photoDet?.downloads}
                                        <span style={{ marginLeft: "30px" }}></span>
                                        Likes: {photoDet?.likes}
                                    </p>
                                    
                                    <div className="testimonial-item mt-4">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            {photoDet?.description || "No description available."}
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <div>
                                            <img src={photoDet?.user?.profile_image?.medium} className="testimonial-img" alt={photoDet?.user?.name} />
                                            <h3>{photoDet?.user?.first_name} {photoDet?.user?.last_name}</h3>
                                            <h4>{photoDet?.user?.bio}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="portfolio-info">
                                    <h3>Related Images</h3>
                                    <ul style={{ gap: "10px" }}>
                                        {photoDet?.related_collections?.results?.map((item) => (
                                            <li key={item.id}>
                                                <img src={item.cover_photo?.urls?.small} style={{ height: "200px", marginBottom: "5px" }} alt={item.cover_photo?.alt_description} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    );
}
