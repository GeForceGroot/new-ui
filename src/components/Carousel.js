import React from 'react'
import '../style/carousel.css'
import image from '../style/BannerImage_2.0.jpg'

const Carousel = () => {
    return (
        <>
            <div className='container' id='carousel' >
                <div className='row' id='rM'>
                    <div className='col'>
                        <div className='wow container fadeInUp pst'>
                            <span className="pro-status">Before and After Admission</span>
                            <p className="mtb40">All-Inclusive Academic Writing Services for Students</p>
                            <p className='nxtpara'>With Anjit VS academic writing services, getting selected by a reputed university for your favorite course is now easie</p>
                        </div>
                        <div className='btnTalk' >
                            <a href="/contact_us" target='_blank'>
                                <button type="button" className="btn btn-primary " id='btnHvn'>
                                    <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                    Talk with an expert</button>
                            </a>
                        </div>
                    </div>
                    <div className='col mtb41'>
                        <img id='imgBgCS' src={image} height={"400px"} alt="" />
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }} />
        </>
    )
}

export default Carousel
