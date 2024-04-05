import React from 'react'
import '../style/faq.css'
import { Collapse, initMDB } from 'mdb-ui-kit';
initMDB({ Collapse });

const Faq = () => {
    return (
        <>
            <div className='container' style={{ alignItems: "center", marginTop: "150px", marginBottom: '150px' }}>
                <div className='row'>
                    <div className='col'>
                        <h4 style={{ color: "#15c39a" }}>Academic Essays</h4>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className='col'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
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
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                        With every essay that we write, we conduct multiple quality assessment reviews and tests. These tests also include plagiarism-checking using powerful, industry-leading tools. You can also get a plagiarism report with every essay that we deliver.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Are your academic writings affordable?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                        If you check the industry, academic writing is not a cheap service. As the quality needs to be top-notch and every essay involves extensive research, it takes time for essays to finish. Therefore, no academic essays can be cheap. However, we ensure to provide affordable academic writing and the best price in the market.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        How long do you take to write the papers?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Although we cannot commit to a definite time, an academic essay can usually take anywhere from 3-5 business days. On the other hand, admission essays can only take 2-3 business days. However, the exact time will depend on the essay’s nature and requirements.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                       What if I do not like the essay you write?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    We have a free revision policy that you can use to provide us with feedback and get revisions for the parts that you did not like.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        data-mdb-collapse-init
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Can I choose my writer?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                    <div className="accordion-body">
                                    In order to ensure that all our clients get the best service, we assign the projects to our writers based on various parameters. You can rest assured that your essay is written by a writer with the right expertise and experience.
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </div>
            </div>
        </>
    )
}

export default Faq
