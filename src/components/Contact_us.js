import React from 'react'
import '../style/contact-us.css'

const Contact_us = () => {
    return (
        <>
            <section className='contactUs'>
                <div className='container'>
                    <div className='row' >
                        <div className='col' style={{ marginTop: '175px', marginBottom: '175px' }}>
                            <div className='phone' style={{ marginTop: '75px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaOAd4729IT4l4BO3txtJZdE9Ifv_BED_mXw3U0S-9w&s" width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h7 style={{ color: "#15c39a" }}>TALK TO OUR CLIENT SUPPORT TEAM</h7>
                                    <h5 style={{ color: 'darkorange' }}>+919048 815 031</h5>
                                </div>
                            </div>
                            <div className='phone' style={{ marginTop: '50px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png' width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h7 style={{ color: "#15c39a" }}>WRITE TO US ABOUT YOUR NEEDS</h7>
                                    <h5 style={{ color: 'darkorange' }}>xyz@gmail.com</h5>
                                </div>
                            </div>
                            <div className='phone' style={{ marginTop: '50px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src="https://www.svgrepo.com/show/493957/address.svg" width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h7 style={{ color: "#15c39a" }}>TALK TO OUR CLIENT SUPPORT TEAM</h7>
                                    <h5 style={{ color: 'darkorange' }}>Building No: 902 - Tower 2, National Empress Gardens Vennala, Kochi, Kerala, Pin- 682028</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col' style={{ marginTop: '175px', marginBottom: '175px', textAlign: "center" }}>
                            {/* <!-- Contact 1 - Bootstrap Brain Component --> */}
                            <h5>Quick response and express delivery guaranteed !!!</h5>
                            <form className="form">
                                <div className='row' id='rowForm' >
                                    <div className="col form-group" id='colForm'>
                                        <label htmlFor="name">Your Name (Required)</label>
                                        <input style={{ border: '2px solid' }} type="text" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="email">Your Email (Required)</label>
                                        <input style={{ border: '2px solid' }} type="email" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone (Optional)</label>
                                    <input style={{ border: '2px solid' }} type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="requirement">Tell Us About Your Requirement</label>
                                    <textarea style={{ border: '2px solid' }} id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                                </div>
                                <button id='btnHvn' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_us
