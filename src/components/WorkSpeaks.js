/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/workSpeak.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WorkSpeaks = () => {
    return (
        <>
            <section className='container' style={{ textAlign: "center", marginTop: "50px" }}>
                <h5 style={{ color: "#030264" }} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>Our Work Is A Testament To Our Capabilities</h5>
                <div className='container'>
                    <div className='row' id='workSpeakFix' style={{textAlign:'center'}}>
                        <div className='col-sm' id='columeLeft' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }}>
                                <img className="card-img-top" src="https://www.write-right.in/img/soptop.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">SOP for Canada Visa</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/allServices" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }} >
                                <img className="card-img-top" src="https://www.write-right.in/img/soptop.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">SOP for Canada Visa</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/allServices" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }}>
                                <img className="card-img-top" src="https://www.write-right.in/img/soptop.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">SOP for Canada Visa</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/allServices" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkSpeaks
