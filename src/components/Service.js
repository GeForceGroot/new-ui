import React from 'react'
import '../style/service.css'
import ContentTwoBox from './ContentTwoBox';
import { Helmet } from 'react-helmet'

const Service = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Discover top-quality academic writing services at Smart Study Assists portfolio. Expert assistance for essays, research papers, and more. Get started today!' />
                <title>Professional Academic Writing Services | Smart Study Assist</title>
            </Helmet>
            <section id='bgServe'>
                <div className="container" style={{ textAlign: 'center' }} >
                    <h5 id='animath5' style={{ color: "#030264", paddingTop: "100px" }} className="block-sub__title">Our Areas of Expertise ⚙️</h5>
                    {/* <h6 id='animath6' className="block-title" style={{ marginTop: '25px', color: "#fd8b00" }}>Check out our Services </h6> */}
                    <p id='paraAni' className="text-muted" style={{ marginTop: '40px', paddingBottom: '100px' }}>At Smart Study Assist, our payment process is designed for simplicity and security. Whether you're invoicing or making payments, everything happens conveniently through our platform. We offer flexible options including hourly or fixed-price projects to match your needs. For hourly work, submit timesheets effortlessly, while for fixed-price projects, set milestones and securely release funds through our escrow features.
                    </p>
                </div>
            </section>
            <section>
                <ContentTwoBox />
            </section>
            <section id='servPointLeft' style={{ marginTop: '100px' }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6" id='animath6'>
                            <h5 style={{ color: '#030264', marginTop: '10px' }}>Essay Writing Services</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">Craft perfect essays with the help of our highly qualified writers. From thematic essays to descriptive essays, we cover all styles to ensure your success. </h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">Whether you want assistance with thematic essays, descriptive essays, or any other type of essay that has a different style of writing, Our team has got you covered. You will learn<br /> how to produce engaging essays and get excellent scores with our end-to-end guidance.</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 how-imgR" id='animath5'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/pexels-george-milton-7034452.jpg" style={{ marginTop: "15px", width: '550px', height: '350px' }} className="img-fluid" alt="Help" />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6 how-img" id='animath6'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/tran-mau-tri-tam-tZnbakTUcTI-unsplash.jpg" style={{ marginTop: "15px", width: '550px', height: '310px' }} className=" img-fluid" alt="Agginmnet" />
                        </div>
                        <div className="col-md-6" id='animath5'>
                            <h5 style={{ color: '#030264' }}>Dissertation Assistance</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">Our expert writers are knowledgeable about every facet of writing a dissertation, from choosing a topic to coming up with a strong conclusion.</h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">Navigating the complexities of dissertation writing can be daunting, but with our assistance, you can sail through with confidence. With our correct writing process and meticulous attention to detail, you'll receive the perfect solution to score well on your dissertation.</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contect Im */}
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6" id='animath5'>
                            <h5 style={{ color: '#030264' }}>Coursework Writing Services</h5>
                            <h6 style={{ color: "#fd8b00" }} className="subheading">In the compelling coursework writing services, our team outlines the writings in a detailed and expressive manner as per the requirements with experts in the field.</h6>
                            <p style={{ marginTop: "25px" }} className="text-muted">With the help of our coursework writing services, you can complete assignments and course materials at any academic level and receive comprehensive support.
                                You will understand your curriculum better and receive flawless scores with our assistance.</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 how-imgR" id='animath5'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg" style={{ marginTop: "15px", width: '550px', height: '310px' }} className=" img-fluid" alt="Live Exam" />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6 how-img" id='animath6'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/pexels-andrea-piacquadio-3760069.jpg" style={{ marginTop: "15px", width: '550px', height: '310px' }} className="img-fluid" alt="Help" />
                        </div>
                        <div className="col-md-6" id='animath6'>
                            <h5 style={{ color: '#030264' }}>Case Study Help</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">Expert Assistance from Smart study assist offers invaluable support in navigating the intricate terrain of case studies. Our team of seasoned professionals is dedicated to providing tailored solutions with enriching details of the topic.</h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">Case studies present unique challenges, but our staff is qualified to assist you in overcoming them. Whether you're grappling with complex case study questions or struggling to find correct answers, our professional writers are here to help. With our timely and accurate solutions, you'll conquer even the toughest case studies with ease</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contect Im */}
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6" id='animath5'>
                            <h5 style={{ color: '#030264' }}>Research Paper Writing</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">At Smart Study Assist, we understand the importance of crafting compelling research papers that meet your academic requirements.</h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">Our team of experts is dedicated to providing you with the highest quality assistance in research paper writing. We ensure thorough research on your chosen topic, utilizing reputable sources to gather relevant information. Our writers possess the skills and expertise to present your findings in a clear and concise manner, adhering to academic standards and guidelines</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 how-imgR" id='animath6'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/pexels-lukas-669621.jpg" style={{ marginTop: "15px", width: '550px', height: '310px' }} className="img-fluid" alt="research" />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6 how-img" id='animath5'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/pexels-andrea-piacquadio-3790805.jpg" style={{ width: '550px', height: '310px' }} className="img-fluid" alt="Editing" />
                        </div>
                        <div className="col-md-6" id='animath6'>
                            <h5 style={{ color: '#030264', marginTop: "25px" }}>Thesis Writing</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">Achieving excellence in thesis writing requires careful planning, research, and execution. At Smart Study Assist, we offer comprehensive guidance to help you navigate the complexities of thesis writing with confidence. </h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">Our experienced team provides personalized support throughout the entire thesis writing process, from developing a research question to crafting a compelling argument. We assist you in conducting thorough research, organizing your ideas cohesively, and refining your thesis to meet the highest academic standards.</p>
                            <div className='btnTalk' style={{ marginTop: '25px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row" style={{ marginTop: '100px' }}>
                        <div className="col-md-6" id='animath5'>
                            <h5 style={{ color: '#030264' }}>Assignment Help</h5>
                            <h6 style={{ color: "#fd8b00", marginTop: '10px' }} className="subheading">We tend to offer personalized assistance to ensure that your assignments are well-researched, carefully written, and delivered on schedule.</h6>
                            <p style={{ marginTop: '25px' }} className="text-muted">When it comes to your academic assignments, you can trust Smart Study Assist to provide tailored solutions that meet your specific needs. Whether you're working on essays, dissertations, or any other assignment, our team is here to help you succeed. We understand the challenges students face when it comes to completing assignments on time and to the highest standard.</p>
                            <div className='btnTalk' style={{ marginTop: '25px', marginBottom: '100px' }}>
                                <a href="/contact_us">
                                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                        Work with us</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 how-imgR" id='animath6'>
                            <img src="https://smartstudyassist.com/wp-content/uploads/2024/03/pexels-lukas-669621.jpg" style={{ marginTop: "15px", width: '550px', height: '310px' }} className="img-fluid" alt="research" />
                        </div>
                    </div>
                </div>
            </section>
            {/* contect Im */}
            <section id='whyWatse' >
                <div className='container' style={{ textAlign: "center", paddingTop: '50px', paddingBottom: "50px", color: "#030264" }}>
                    <h1>Don't squander your precious time</h1>
                    <h6 style={{ color: "darkorange" }}>entrust our skilled content developers to craft top-notch content for you. Reach out to us for more information</h6>
                    <h6>Empowering Academic Success</h6>
                    <p style={{ color: 'black' }}>With our comprehensive range of assignment assistance services and dedicated team of experts, I am committed to empowering you to succeed academically. Don't think twice to sign up with me and my team and experience the difference that our services can make in your academic journey. Let us help you achieve your goals and reach your full potential.</p>
                    <p style={{ fontWeight: 'bolder', color: 'black' }}>Get Started Today! Don't let academic challenges hold you back. Connect with Smart Study Assist Hub today and start your journey towards academic excellence.</p>
                </div>
                <div className='container' style={{ textAlign: 'center', marginBottom: '40px', marginTop: '-10px' }}>
                    <h6 style={{ fontWeight: "700", color: '#030264' }}>Contact us for further details.</h6>
                </div>
                <div className='container' style={{ textAlign: 'center', paddingBottom: "50px" }}>
                    <div className='row'>
                        <div className='col' style={{ fontSize: '19px', fontFamily: "cursive" }}><img src="https://www.svgrepo.com/show/164980/cell-phone.svg" alt="phone" width={'50px'} height={'50px'} style={{ marginRight: '5px' }} />: +(91) 90739 34321</div>
                        <div className='col' style={{ fontSize: '19px', fontFamily: "cursive" }}><img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/mailbox-icon.png" alt="mail" width={'50px'} height={'50px'} style={{ marginRight: '5px' }} /> : admin@daswritingservices.com</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
