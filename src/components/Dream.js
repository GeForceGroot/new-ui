import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Dream = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center', marginTop: '100px' }}>
                <h5 style={{ color: '#030264' }}  data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Fulfilling Your Dreams With Unique</h5>
                <h6 style={{ marginTop: '25px' }}  data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" mirror='true'>plagiarism-free content crafted by expert writers.</h6>
                <div className='btnTalk' style={{ textAlign: "center", marginTop: '50px', marginBottom:'100px' }}>
                    <a href="/contact_us" target='_blank'>
                        <button  data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1500" mirror='true' type="button" id='btnHvn' style={{ fontWeight: 'bold', fontSize: '20px' }} className="btn btn-primary">
                            <img src="https://www.iconpacks.net/icons/2/free-contact-icon-3018-thumb.png" width={'20px'} height={'20px'} style={{ marginRight: '15px' }} alt="phone" />
                            Contact Us</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Dream
