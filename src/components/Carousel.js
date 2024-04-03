import React from 'react'
import '../style/carousel.css'

const Carousel = () => {
    return (
        <>
            <div className='container' id='carousel' >
                <div className='row'>
                    <div className='col-lg-12 col-xs-12 herocontent'>
                        <div className='wow fadeInUp pst'>
                            <span class="pro-status">The Write Way<br />to Academic Excellence</span>
                        </div>
                        <p className="mtb40" style={{ opacity: "0.92" }}>Achieve Academic Success with <br />Write Right's Professional Writing Services</p>
                    </div>
                </div>
            </div>
            <hr  style={{borderTop: '2px dashed black'}}/>
        </>
    )
}

export default Carousel
