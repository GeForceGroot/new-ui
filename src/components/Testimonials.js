/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center' }}>
                <h5 style={{ color: "#15c39a" }}>Reviews of the students and researchers<br />we have helped</h5>
                <p style={{ fontSize: "18px", marginTop: "25px" }}>Trusted by over 2800+ students who no longer struggle with SOP, LOR, Resume and Academic Writing.</p>
                <img style={{ marginTop: '50px' }} src="https://www.write-right.in/img/reviewdesk.webp" alt="studnets" />
                <h5 style={{ marginTop: '100px', color:'#15c39a' }}>Testimonials</h5>
                <h4 style={{ marginTop: '20px' }}>Fulfilling your academic dreams</h4>
            </div>
            <div className='container' style={{marginTop:"100px", marginBottom:"100px"}}>
                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >Maria Smantha</h5>
                        <h6 className=" mb-3" style={{color:'#15c39a'}}>Web Developer</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                            tenetur.
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
                                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >Lisa Cudrow</h5>
                        <h6 className=" mb-3" style={{ color: "#15c39a" }}>Graphic Designer</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
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
                                <i className="fas fa-star fa-sm text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3" >John Smith</h5>
                        <h6 className="mb-3" style={{ color: "#15c39a" }}>Marketing Specialist</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
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
