/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logoImage from '../style/SSA_page-0001.jpg'
import '../style/navbarCss.css'

const Navbar = () => {
    return (
        <>
            <section   style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: "white", border: "2px solid lightgray", position: "sticky", top: '0', zIndex: '1', opacity: '.8' }}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <img style={{ borderRadius: '25px' }} src={logoImage} width="70" height="70" alt="logo" />
                        </a>
                        <a className="navbar-brand" href="/" >Smart Study Assist</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <div className='container'></div>
                            <div className="form-inline my-2 my-lg-0" >
                                <ul className="navbar-nav ml-auto" style={{ fontSize: "15px", marginBottom:"15px", paddingTop:"10px"}}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/about_us">About&nbsp;us<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/allServices">Services<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/portfolio">Portfolio<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/contact_us">Contact&nbsp;us<span className="sr-only"></span></a>
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
