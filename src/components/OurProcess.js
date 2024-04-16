import React from 'react'
import '../style/ourProcess.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const OurProcess = () => {
    return (
        <>
            <div className='container' id='orP'>
                <div id='headorP'>
                    <h5 style={{ color: "#030264" }} data-aos="zoom-out-left" data-aos-offset="300" data-aos-duration="1500" mirror='true'>OUR PROCESS</h5>
                    <h5 data-aos="zoom-out-right" data-aos-offset="300" data-aos-duration="1500" mirror='true'>How Our Academic Assistance Service Works</h5>
                    <p style={{fontSize:'20px', textAlign:'center', marginTop:'15px', marginBottom:'15px'}} data-aos="zoom-in-down" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Our content writing team has catered to clients from various industries worldwide. No matter what your business niche may be, we've got the writing chops to deliver quality content that you and your audience will adore.</p>
                </div>
                <div className='row'>
                    <div className="col ourCol" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#1</h5>
                        <h5 id='head2'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Initial Contact</h5>
                        <p id='paraOurp'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Engaging with students to understand their requirements.</p>
                    </div>
                    <div className="col ourCol" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#2</h5>
                        <h5 id='head2'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Requirement Analysis</h5>
                        <p id='paraOurp'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Assessing the specific needs of each student.</p>
                    </div>
                    <div className="col ourCol" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#3</h5>
                        <h5 id='head2' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Client Interaction</h5>
                        <p id='paraOurp' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Establishing clear communication channels with clients.</p>
                    </div>
                    <div className="col ourCol" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#4</h5>
                        <h5 id='head2'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Understanding Goals</h5>
                        <p id='paraOurp'data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Comprehending the academic objectives and goals.</p>
                    </div>
                </div>
                <div className='row'    >
                    <div className="col ourCol1" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#5</h5>
                        <h5 id='head2' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Tailoring Services</h5>
                        <p id='paraOurp' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Customizing services to meet individual requirements.</p>
                    </div>
                    <div className="col ourCol1" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#6</h5>
                        <h5 id='head2' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Clarifying Expectations</h5>
                        <p id='paraOurp' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Ensuring alignment between client expectations and services.</p>
                    </div>
                    <div className="col ourCol1" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#7</h5>
                        <h5 id='head2' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Gathering Information</h5>
                        <p id='paraOurp' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Collecting necessary details and information from the students.</p>
                    </div>
                    <div className="col ourCol1" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1500" mirror='true'>
                        <h5 id='headOurP' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>#8</h5>
                        <h5 id='head2' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Building Rapport</h5>
                        <p id='paraOurp' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Establishing a positive relationship with clients from the outset.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess
