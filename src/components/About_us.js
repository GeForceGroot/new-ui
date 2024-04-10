/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/aboutUs.css'
import { Helmet } from 'react-helmet'

const About_us = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Smart Study Assist: Your academic writing partner! Expert assistance for essays, research papers & more. Quality, reliability, and excellence guaranteed.' />
                <title>Empowering Academic Excellence: Smart Study Assist - About Us</title>
            </Helmet>
            <section id='bgServe'>
                <div className="container" style={{ textAlign: 'center' }} >
                    <h3 id='animath5' style={{ color: "#030264", paddingTop: "100px" }} className="block-sub__title">About Us </h3>
                    <p id='paraAni' className="text-muted" style={{ marginTop: '40px', paddingBottom: '100px' }}>Welcome to Smart Study Assist, your reliable companion in achieving academic success through our writing assistance services. Established with the mission to empower students in their educational endeavors, we excel in delivering customized support to individuals across diverse disciplines and academic levels.
                    </p>
                </div>
            </section>
            <div className='container' style={{ textAlign: "center", marginTop: "75px", marginBottom: '75px' }}>
                <h4 style={{ color: "#030264" }}>Who We Are?</h4>
                <p style={{ fontSize: '16px', marginTop: '25px' }}>At Smart Study Assist, we comprehend the hurdles students encounter in today's rigorous academic landscape. Hence, we've curated a cadre of certified and seasoned writers committed to producing high-caliber work tailored to your specific needs. Whether it's essays, research papers, presentations, or any other academic task, our team stands ready to support you throughout the process.</p>

                <div className='row' style={{ textAlign: 'center', marginTop: '100px' }}>
                    <div className='col-sm'>
                        <img src="https://www.svgrepo.com/show/1320/rocket.svg" alt="Mission" width={'40px'} height={'40px'} />
                        <h4 style={{ marginTop: '10px' }}>OUR MISSION</h4>
                        <p style={{ fontSize: "18px", marginTop: '40px' }}>We at Smart Study Assist are aware of the challenges that students face in the demanding academic environment of today. Our purpose? Facilitating educational progress through personalized guidance and steadfast encouragement.</p>
                    </div>
                    <div className='col-sm'>
                        <img src="https://i.pinimg.com/564x/62/65/ee/6265eead1e6bd8ca6a3da000ec5e7712.jpg" alt="Vision" width={'40px'} height={'40px'} />
                        <div className="vl">
                            <h4 style={{ marginTop: '10px' }}>OUR VISION</h4>
                            <p style={{ fontSize: "18px", marginTop: '40px', marginLeft: '30px' }}>Welcome to Smart Study Assist, where our vision is to empower students on their academic journey through personalized assistance and unwavering support.<br />Meet the dedicated professionals behind Smart Study Assist. </p>
                        </div>
                    </div>
                    <div className='col-sm' id='valueImg'>
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/value-4373784-3622263.png?f=webp" alt="Value" width={'40px'} height={'40px'} />
                        <div className="vl">
                            <h4 style={{ marginTop: '10px' }}>OUR VALUES</h4>
                            <p style={{ fontWeight: "bold", listStyleType: 'none', marginTop: '20px' }}>Customer Satisfaction</p>
                            <p style={{ fontSize: "16px", marginTop: '10px', marginLeft: '30px' }}>Your satisfaction is our success. That's why we offer round-the-clock support to address any questions or concerns you may have, ensuring a smooth and hassle- free experience.</p>
                            <p style={{ fontWeight: "bold", listStyleType: 'none' }}>Our Commitment to Quality</p>
                            <p style={{ fontSize: "16px", marginTop: '10px', marginLeft: '30px' }}>Your satisfaction is our success. Our professionals at Smart Study Assist are experienced, qualified writers craft customized excellence. They're dedicated to meeting your distinct needs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginBottom: "100px" }} id='abtPoint'>
                <h2 style={{ marginBottom: "100px", color: "#030264", textAlign: 'center' }}>WHY IT’S A GOOD IDEA TO ENTRUST US WITH YOUR PAPER</h2>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'><h2 style={{ color: "#ffb806" }}>01.</h2></div>
                                <div className='col'><p style={{ fontSize: '21px', fontWeight: "400", marginTop: "8px", color: 'black', textAlign: 'start' }}>Expert Writers</p>
                                    <p style={{ fontSize: '18px' }}>At Smart Study Assist, we meticulously vet all specialists who wish to join our team. Through rigorous testing and continuous skill development, we ensure that only the best experts are selected to provide top-notch assistance to our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'><h2 style={{ color: "#ffb806" }}>02.</h2></div>
                                <div className='col'><p style={{ fontSize: '21px', fontWeight: "400", marginTop: "8px", color: 'black', textAlign: 'start' }}>Privacy Guarantee</p>
                                    <p style={{ fontSize: '18px' }}>Your privacy is our priority. We never disclose your personal information publicly. Rest assured that all phone numbers and email addresses are solely used for communication purposes and to deliver papers to our valued customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'><h2 style={{ color: "#ffb806" }}>03.</h2></div>
                                <div className='col'><p style={{ fontSize: '21px', fontWeight: "400", marginTop: "8px", color: 'black', textAlign: 'start' }}>On-Time Delivery</p>
                                    <p style={{ fontSize: '18px' }}>We pride ourselves on our punctuality. With Smart Study Assist, you can trust that 98% of our orders are delivered on time, ensuring you meet your academic deadlines with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'><h2 style={{ color: "#ffb806" }}>04.</h2></div>
                                <div className='col'><p style={{ fontSize: '21px', fontWeight: "400", marginTop: "8px", color: 'black', textAlign: 'start' }}>We select only the best experts</p>
                                    <p style={{ fontSize: '18px' }}>All the specialists who wish to work with us pass several tests and regularly develop their skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'><h2 style={{ color: "#ffb806" }}>05.</h2></div>
                                <div className='col'><p style={{ fontSize: '21px', fontWeight: "400", marginTop: "8px", color: 'black', textAlign: 'start' }}>We guarantee privacy</p>
                                    <p style={{ fontSize: '18px' }}>We never disclose your personal information publicly. All phone numbers and email addresses are only used to communicate and deliver papers to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm' style={{ paddingBottom: "10px" }}>
                        <div className='state container'>
                            <div className='innerItem' style={{ marginTop: "50px" }}>
                                <span style={{ color: "#ffb806", fontSize: '40px', fontWeight: '500' }}>97.98%</span>
                                <h6>Of Our all order deliverd on time</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_us
