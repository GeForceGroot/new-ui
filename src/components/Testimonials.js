/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/testnomical.css'

const Testimonials = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center' }}>
                <h5 style={{ color: "#15c39a" }}>Reviews Of The Students And Researchers<br />We Have Helped</h5>
                <p style={{ fontSize: "18px", marginTop: "25px" }}>Trusted by over 1041+ students who no longer struggle with Essay Writing, Blog Report Writing, Thesis Writing and Academic Writing.</p>
                <div  id='writeImg'>
                    <img src="https://www.write-right.in/img/reviewdesk.webp" alt="studnets" />
                </div>
                <h5 style={{ marginTop: '100px', color: '#15c39a' }}>Testimonials</h5>
                <h4 style={{ marginTop: '20px' }}>Fulfilling Your Academic Dreams</h4>
            </div>
            <div className='container' style={{ marginTop: "100px", marginBottom: "100px" }}>
                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >Priya</h5>
                        <h6 className=" mb-3" style={{ color: '#15c39a' }}>Happy Student</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>Smart Study Assist helped me ace my assignments with their impeccable service. Their money-back guarantee gave me the confidence to trust their expertise, and they delivered beyond my expectations! <i className="fas fa-quote-right pe-2"></i></p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >Rohan</h5>
                        <h6 className=" mb-3" style={{ color: "#15c39a" }}>Satisfied Customer</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>I was impressed by the originality of the assignments delivered by Smart Study Assist. Their commitment to non-plagiarism is commendable, and it's a relief to know that my work is authentic and unique. <i className="fas fa-quote-right pe-2"></i></p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >Neha</h5>
                        <h6 className="mb-3" style={{ color: "#15c39a" }}>Grateful Student</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>The writers at Smart Study Assist are truly experts in their field. Their wealth of experience shines through in the quality of their work, and I couldn't be happier with the results. <i className="fas fa-quote-right pe-2"></i>
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                            <li>
                                <i className="far fa-star fa-sm text-warning"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
