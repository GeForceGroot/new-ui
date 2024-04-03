import React from 'react'
import '../style/carousel.css'

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
                            <button type="button" className="btn btn-primary btn-lg" id='btnHvn'>
                                <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                Talk with an expert</button>
                        </div>
                    </div>
                    <div className='col mtb41'>
                        <img src="https://anjitvs.in/wp-content/uploads/2022/09/business-desktop-870-x2-1536x980.webp" height={"500px"} alt="" />
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }} />
        </>
    )
}

export default Carousel
