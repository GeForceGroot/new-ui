import React from 'react'
import { useState } from 'react'
import '../style/assignmnetProvide.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AssignmnetProvide = () => {
    const [hoverI, setHoverI] = useState(true);
    const [hoverII, setHoverII] = useState(true);
    const [hoverIII, setHoverIII] = useState(true);
    const [hoverIV, setHoverIV] = useState(true);
    const [hoverV, setHoverV] = useState(true);
    const [hoverVI, setHoverVI] = useState(true);
    const handleHoverEnterI = () => {
        setHoverI(true);
    };

    const handleHoverLeaveI = () => {
        setHoverI(false);
    };
    const handleHoverEnterII = () => {
        setHoverII(true);
    };

    const handleHoverLeaveII = () => {
        setHoverII(false);
    };
    const handleHoverEnterIII = () => {
        setHoverIII(true);
    };

    const handleHoverLeaveIII = () => {
        setHoverIII(false);
    };
    const handleHoverEnterIV = () => {
        setHoverIV(true);
    };

    const handleHoverLeaveIV = () => {
        setHoverIV(false);
    };
    const handleHoverEnterV = () => {
        setHoverV(true);
    };

    const handleHoverLeaveV = () => {
        setHoverV(false);
    };
    const handleHoverEnterVI = () => {
        setHoverVI(true);
    };

    const handleHoverLeaveVI = () => {
        setHoverVI(false);
    };
  return (
    <>
                <section className="popular space container" style={{marginTop:"100px"}}>
                <div className="box hexagon">
                    <div className="text-center section-heading" >
                        <h4 data-aos="flip-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>🧑🏻‍🏫Discover the Variety of Assignments We Offer!</h4>
                    </div>
                    <div className="row" id='provideAss' >
                        {hoverI ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveI} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img  src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon7.svg" alt="" width={"40px"} height={'40px'} />
                                    <h4>Study assistance</h4>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#f467f4", borderRadius: '15px', color: 'darkgre' }} id='stdHelpH' onMouseLeave={handleHoverEnterI}>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h6>Study assistance</h6>
                                    <p></p>
                                    <p className="MsoNormal">Get the study support you need to reach your academic goals with the expert essay helpers at Smart Study Assist. Learn valuable lessons, clarify doubts, and enhance your knowledge with our short and effective sessions. Don't hesitate to subscribe to our services and take your learning to the next level!</p>
                                    <p></p>
                                </div>
                            </div>
                        )}
                        {/* ----------- */}
                        {hoverII ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveII} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img  src="https://myassignment.live/front/img/essay-writing.svg" alt="" width={"40px"} height={'40px'} />
                                    <h4>Essay Assistance</h4>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" id='stdHelpH' style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#b867f4", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterII}>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h6>Essay Assistance</h6>
                                    <p></p>
                                    <p className="MsoNormal">Struggling with your essay? Let our online essay writers create a masterpiece that showcases research skills, creativity, and strong argumentation. Our essays not only meet requirements but also captivate your professors</p>
                                    <p></p>
                                </div>
                            </div>
                        )}


                        {/* ---------------- */}

                        {hoverIII ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveIII} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img  src="https://cdn1.myassignment.live/mal-img/management.svg" alt="" width={"40px"} height={'40px'} />
                                    <h4>Research Paper Support</h4>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" id='stdHelpH' style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "lightblue", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterIII}>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h6>Research Paper Support</h6>
                                    <p></p>
                                    <p className="MsoNormal">Need help with your research paper? Simply tell us, 'Help me write a research paper,' and our experts will address all your concerns. They ensure that all crucial details are included and all sections are well-presented. Don't wait, reach out to us now for top-notch research paper help!</p>
                                    <p></p>
                                </div>
                            </div>
                        )}



                        {/* ----------- */}
                        <div className='row' style={{ marginTop: '50px', marginBottom: '50px' }}>

                            {/* -------------/ */}

                            {hoverIV ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveIV} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img  src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon8.svg" alt="" width={"40px"} height={'40px'} />
                                        <h4>Homework Aid</h4>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelpH' style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "lightgreen", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterIV}>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h6>Homework Aid</h6>
                                        <p></p>
                                        <p className="MsoNormal">Struggling with Homework? Look no further! Smart Study Assist has the ultimate solution for all your academic needs. From tricky math problems to intricate Chemistry assignments, our expert team will guide you through the steps to ensure you meet your deadlines with confidence. Just say 'Do my homework for me' and let us handle the rest.</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}


                            {/* ----------- */}

                            {hoverV ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveV} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img  src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" alt="" width={"40px"} height={'40px'} />
                                        <h4>Case Study Solutions</h4>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelpH' style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "orange", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterV}>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h6>Case Study Solutions</h6>
                                        <p></p>
                                        <p className="MsoNormal">Need help with a Case Study? Let our online essay writers lead the way. We'll pinpoint key issues, suggest necessary changes, and propose innovative solutions to help you achieve that coveted A+. Plus, explore our extensive collection of samples to hone your case study skills.</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}


                            {/* ---------- */}
                            {hoverVI ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveVI} data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500" mirror='true'>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img  src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon9.svg" alt="" width={"40px"} height={'40px'} />
                                        <h4>Other Academic and Content Tasks</h4>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelpH' style={{ transition: "all 0.8s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#ff2323c7", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterVI}>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h6>Other Academic and Content Tasks</h6>
                                        <p></p>
                                        <p className="MsoNormal">In addition to writing help, we offer a range of services including proofreading, editing, free plagiarism reports, unlimited revisions, and access to handy tools like plagiarism checkers and spellcheckers. Save time and ace your assignments with the support of Smart Study Assist!</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}

                            {/* ------------ */}
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AssignmnetProvide
