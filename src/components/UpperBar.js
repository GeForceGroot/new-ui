/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/upperbar.css'

const UpperBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f6f6f6'}} id='upBar'>
                <div className='container'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="navbar-nav mr-auto  mt-lg-0">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Mail" width={'30px'} height={'30px'} />
                            <p style={{ marginLeft: "10px", fontSize:'20px', fontWeight:"400" }}>info@smartstudyassist.com</p>
                            <img style={{ marginLeft: "10px" }} src="https://freesvg.org/img/1527145993.png" alt="Phone" width={'30px'} height={'30px'} />
                            <p style={{ marginLeft: "10px", fontSize:'20px', fontWeight:"400" }}>+91-9530473222</p>
                        </div>
                        <div className="form-inline my-lg-0">
                            <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" style={{ marginRight: '30px' }} alt="Facebook" width={'30px'} height={'30px'} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" style={{ marginRight: '30px' }} alt="x" width={'30px'} height={'30px'} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" style={{ marginRight: '10px' }} alt="LInkedIn" width={'30px'} height={'30px'} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UpperBar
