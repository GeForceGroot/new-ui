import React from 'react'
import '../style/faq.css'
import { Collapse, initMDB } from 'mdb-ui-kit';
initMDB({ Collapse });

const Faq = () => {
    return (
        <>
            <div className='container' style={{ alignItems: "center", marginTop: "150px", marginBottom: '150px' }}>
                <div className='row' id='faqRow'>
                    <div className='col'>
                        <h4 style={{ color: "#15c39a" }}>Academic Essays</h4>
                        <h4>Frequently Asked Questions</h4>
                    </div>
                    <div className='col' id='colFaq'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingOne">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        How do you ensure that the essays are original and plagiarism-free?
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                        With every essay that we write, we conduct multiple quality assessment reviews and tests. These tests also include plagiarism-checking using powerful, industry-leading tools. You can also get a plagiarism report with every essay that we deliver.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        What are the benefits of academic writing in the lives of students?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Regardless of your study discipline, academic writing helps you to build arguments, communicate ideas, and participate in scholarly conversations. It is a skill that you need to master to make the most out of your academic qualification.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Why do students struggle with academic writing?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Students may struggle with academic writing due to various reasons, including:
                                    <ul>
                                        <li>Difficulty getting started and feeling overwhelmed by the task.</li>
                                        <li>Needing concentration to form letters as it's not an automatic process.</li>
                                        <li>Struggling to organize and use mechanics of writing.</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                       What if I do not like the essay you write?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    We have a free revision policy that you can use to provide us with feedback and get revisions for the parts that you did not like.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Can I choose my writer?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    In order to ensure that all our clients get the best service, we assign the projects to our writers based on various parameters. You can rest assured that your essay is written by a writer with the right expertise and experience.
                                    </div>
                                </div>
                            </div> */}
                        </div></div>
                </div>
            </div>
        </>
    )
}

export default Faq
