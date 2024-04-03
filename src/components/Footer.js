/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/footerStyle.css'

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-black mt-10" style={{ backgroundColor: '#e7e7e7', marginTop: '25px'}}>
                <div className="p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Smart Study Help</h6>
                                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                <p><a className="text-black">100% originality guaranteed</a></p>
                                <p><a className="text-black">On-time delivery</a></p>
                                <p><a className="text-black">Affordable price</a></p>
                                <p><a className="text-black">24*7 online support</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><img style={{ marginBottom: '8px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/13696/house.svg' /> :- New York, NY 10012, US</p>
                                <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/168219/email.svg' /> :- info@gmail.com</p>
                                <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/5236/phone-call.svg' /> :- + 01 234 567 88</p>
                                <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/14899/printer.svg' /> :- + 01 234 567 89</p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }} href="#!" role="button" ><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee', borderColor: '#55acee' }} href="#!" role="button" ><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39', borderColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google"></i></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac', borderColor: '#ac2bac' }} href="#!" role="button" ><i className="fab fa-instagram"></i ></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca', borderColor: '#0082ca' }} href="#!" role="button" ><i className="fab fa-linkedin-in"></i ></a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                    © 2024 Copyright :
                    <a className="text-black" style={{ color: 'black' }} href="https://mdbootstrap.com/"> Shreyansh Tiwari</a>
                </div>
            </footer >
        </>
    )
}

export default Footer
