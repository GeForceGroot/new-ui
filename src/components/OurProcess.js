import React from 'react'
import '../style/ourProcess.css'
const OurProcess = () => {
    return (
        <>
            <div className='container' id='orP'>
                <div id='headorP'>
                    <h5 style={{ color: "#030264" }}>OUR PROCESS</h5>
                    <h5>How Our Academic Assistance Service Works</h5>
                    <p style={{fontSize:'20px', textAlign:'center', marginTop:'15px', marginBottom:'15px'}}>Our content writing team has catered to clients from various industries worldwide. No matter what your business niche may be, we've got the writing chops to deliver quality content that you and your audience will adore.</p>
                </div>
                <div className='row'>
                    <div className="col ourCol">
                        <h5 id='headOurP'>#1</h5>
                        <h5 id='head2'>Initial Contact</h5>
                        <p id='paraOurp'>Engaging with students to understand their requirements.</p>
                    </div>
                    <div className="col ourCol">
                        <h5 id='headOurP'>#2</h5>
                        <h5 id='head2'>Requirement Analysis</h5>
                        <p id='paraOurp'>Assessing the specific needs of each student.</p>
                    </div>
                    <div className="col ourCol">
                        <h5 id='headOurP'>#3</h5>
                        <h5 id='head2'>Client Interaction</h5>
                        <p id='paraOurp'>Establishing clear communication channels with clients.</p>
                    </div>
                    <div className="col ourCol">
                        <h5 id='headOurP'>#4</h5>
                        <h5 id='head2'>Understanding Goals</h5>
                        <p id='paraOurp'>Comprehending the academic objectives and goals.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col ourCol1">
                        <h5 id='headOurP'>#5</h5>
                        <h5 id='head2'>Tailoring Services</h5>
                        <p id='paraOurp'>Customizing services to meet individual requirements.</p>
                    </div>
                    <div className="col ourCol1">
                        <h5 id='headOurP'>#6</h5>
                        <h5 id='head2'>Clarifying Expectations</h5>
                        <p id='paraOurp'>Ensuring alignment between client expectations and services.</p>
                    </div>
                    <div className="col ourCol1">
                        <h5 id='headOurP'>#7</h5>
                        <h5 id='head2'>Gathering Information</h5>
                        <p id='paraOurp'>Collecting necessary details and information from the students.</p>
                    </div>
                    <div className="col ourCol1">
                        <h5 id='headOurP'>#8</h5>
                        <h5 id='head2'>Building Rapport</h5>
                        <p id='paraOurp'>Establishing a positive relationship with clients from the outset.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess
