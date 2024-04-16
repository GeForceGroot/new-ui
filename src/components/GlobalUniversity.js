import React from 'react'
import "../style/globalUiversity.css"
import image from '../style/Banner_2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GlobalUniversity = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col' id='uni1' style={{ marginTop: '160px', textAlign: 'center' }}><img  data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" mirror='true' style={{ borderRadius: '20px' }} id='imgani' src={image} width={'400px'} height={'220px'} alt="univesityImage" /></div>
                    <div className='col' id='colUni'>
                        <h5 data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Assisting World-Class Universities with an Impressive</h5>
                        <h5 data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500" mirror='true' style={{ color: 'darkorange' }}>90% acceptance rate</h5>
                        <p data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500" mirror='true' style={{ fontSize: "14px", marginTop: '25px' }}>Receive top-notch, personalized services for students and professionals alike all under one roof! With a quick turnaround time of just 2 days and zero added costs, our team crafts tailor-made SOPs based on your unique profile, desired universities, courses, faculty preferences, and exam scores. Our content writing services guarantee quality and authenticity. Rest assured, our team of education counselors conducts thorough quality checks, With a stellar acceptance rate of over 90%, no hidden fees, speedy deliveries, and a sea of positive reviews. Join the ranks of satisfied customers today!</p>
                        <div className='btnTalk' >
                            <a href="/allServices" target='_blank'>
                                <button  data-aos="flip-up" data-aos-offset="300" data-aos-duration="1500" mirror='true' type="button" id='btnHvn' style={{ fontSize: '14px' }} className="btn btn-primary">Get a free quote</button>
                            </a>
                            <a href="/portfolio" target='_blank'>
                                <button data-aos="flip-down" data-aos-offset="300" data-aos-duration="1500" mirror='true' type="button" id='btnHvn' style={{ fontSize: '14px', marginLeft: '15px', backgroundColor: 'white', color: '#030264' }} className="btn btn-primary ">View Example</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalUniversity
// 