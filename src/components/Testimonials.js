/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/testnomical.css'
import SectionTitle from "./Section.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Testimonials = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center' }}>
                <h5 data-aos="flip-up" data-aos-offset="300" data-aos-duration="1500" mirror='true' style={{ color: "#030264" }}>Reviews Of The Students And Researchers<br />We Have Helped</h5>
                <p data-aos="flip-up" data-aos-offset="300" data-aos-duration="1500" mirror='true' style={{ fontSize: "18px", marginTop: "25px" }}>Trusted by over 1041+ students who no longer struggle with Essay Writing, Blog Report Writing, Thesis Writing and Academic Writing.</p>
                <div id='writeImg' style={{ marginBottom: '100px' }} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                    <img src="https://www.write-right.in/img/reviewdesk.webp" alt="studnets" />
                </div>
            </div>
            <div className='container' style={{ textAlign: 'center' }}>
                <SectionTitle title="Fulfilling Your Academic Dreams" subtitle="Testimonials" />
            </div>
            <div className='container' style={{ alignItems: 'center' }}>
                <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-8">
                            <div className="card card-main border-0 text-center">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <div className="card border-0 card-0">
                                                <div className="card profile py-3 px-4">
                                                    <div className="text-center">
                                                        <img src="https://i.imgur.com/gazoShk.jpg" className="img-fluid profile-pic"/>
                                                    </div>
                                                    <h6 className="mb-0 mt-2">Marielle Haag</h6>
                                                    <small>Backend Developer</small>
                                                </div>
                                                <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20"/>
                                                    <p className="content mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                    <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20"/>
                                                    </div>
                                            </div>
                                            <div className="carousel-item active">
                                                <div className="card border-0 card-0">
                                                    <div className="card profile py-3 px-4">
                                                        <div className="text-center">
                                                            <img src="https://i.imgur.com/oW8Wpwi.jpg" className="img-fluid profile-pic"/>
                                                        </div>
                                                        <h6 className="mb-0 mt-2">Ximena Vegara</h6>
                                                        <small>UI/UX Designer</small>
                                                    </div>
                                                    <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20"/>
                                                        <p className="content mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                                                        <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20"/>
                                                        </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="card border-0 card-0">
                                                        <div className="card profile py-3 px-4">
                                                            <div className="text-center">
                                                                <img src="https://i.imgur.com/ndQx2Rg.jpg" className="img-fluid profile-pic"/>
                                                            </div>
                                                            <h6 className="mb-0 mt-2">John Paul</h6>
                                                            <small>UI/UX Designer</small>
                                                        </div>
                                                        <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20"/>
                                                            <p className="content mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                            <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20"/>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    )
}

                    export default Testimonials
