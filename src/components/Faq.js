/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'
import '../style/faq.css'
import { Collapse, initMDB } from 'mdb-ui-kit';
initMDB({ Collapse });

const Faq = () => {
    return (
        <>
            <div className='container' style={{ alignItems: "center", marginTop: "50px", marginBottom: '150px' }}>
                <div className='row' id='faqRow'>
                    <div className='col' style={{textAlign:'center', marginTop:'125px'}}>
                        <h4 style={{ color: "#030264" }}>Academic Essays</h4>
                        <h4>Frequently Asked Questions</h4>
                    </div>
                    <div className='col' id='colFaq'>
                        <div className="faq_area section_padding_130" id="faq">
                            <div className="container">
                                <div className="row justify-content-center">
                                    {/* <!-- FAQ Area--> */}
                                    <div className="col-12 col-sm-10 col-lg-8">
                                        <div className="accordion faq-accordian" id="faqAccordion">
                                            <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', AnimationEffect: '0.2s', animationName: 'fadeInUp'}}>
                                                <div className="card-header" id="headingOne">
                                                    <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">01. How do you ensure that the essays are original and plagiarism-free?<span className="lni-chevron-up"></span></h6>
                                                </div>
                                                <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                                    <div className="card-body">
                                                        <p>With every essay we write, we conduct multiple quality assessment reviews and tests. These tests include plagiarism-checking using powerful, industry-leading tools. You can also receive a plagiarism report with every essay that we deliver.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', AnimationEffect: '0.2s', animationName: 'fadeInUp'}}>
                                                <div className="card-header" id="headingTwo">
                                                    <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">02. What are the benefits of academic writing in the lives of students?<span className="lni-chevron-up"></span></h6>
                                                </div>
                                                <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                                    <div className="card-body">
                                                        <p>Regardless of your study discipline, academic writing helps you to build arguments, communicate ideas, and participate in scholarly conversations. It is a skill that you need to master to make the most out of your academic qualification.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', AnimationEffect: '0.2s', animationName: 'fadeInUp'}}>
                                                <div className="card-header" id="headingThree">
                                                    <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">03. Why do students struggle with academic writing?<span className="lni-chevron-up"></span></h6>
                                                </div>
                                                <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                                                    <div className="card-body">
                                                        <p>Students may struggle with academic writing due to various reasons, including:</p>
                                                        <ul>
                                                            <li>Difficulty getting started and feeling overwhelmed by the task</li>
                                                            <li>Needing concentration to form letters as it's not an automatic process.</li>
                                                            <li>Struggling to organize and use mechanics of writing.</li>
                                                        </ul>
                                                    </div>
                                                </div>
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

export default Faq
