/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        <>
            <section   style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: "white", border: "2px solid lightgray", position: "sticky", top: '0', zIndex: '1', opacity: '.8' }}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <img style={{ borderRadius: '25px' }} src="https://us.123rf.com/450wm/jemastock/jemastock1912/jemastock191234019/135899450-delivery-clipboard-with-hourglass-and-pencil-symbols-vector-illustration-graphic-design.jpg?ver=6" width="40" height="40" alt="logo" />
                        </a>
                        <a className="navbar-brand" href="/" style={{ fontSize: "20px" }}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <div className='container'></div>
                            <div className="form-inline my-2 my-lg-0">
                                <ul className="navbar-nav ml-auto" style={{ fontSize: "15px" }}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/allServices">Services<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/about_us">About_Us<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/contact_us">Contact_Us<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/contact_us">Portfolio<span className="sr-only"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
