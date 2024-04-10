import React from 'react'
import '../style/benifitsStyle.css'

const Benifits = () => {
    return (
        <>
            <section className='prefer' id='prefer1' style={{ display: 'block' }}>
                <div className="text-center section-heading">
                    <div className="heading-icons" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="icon1">
                            <div className="hex "></div>
                            <img id='hex1' width="45" height="50" loading="lazy" src="https://cdn1.myassignment.live/mah-live/img/book.svg" alt="book" />
                        </div>
                        <div className="icon1">
                            <div className="hex "></div>
                            <img id='hex1' width="43" height="36" loading="lazy" src="https://cdn1.myassignment.live/mah-live/img/cap.svg" alt="caMsoNormal" />
                        </div>
                    </div>
                    <h5 className="heading"  style={{ marginTop: "10px" }}>📖 Get your assignments done online with us and unlock amazing perks !</h5>
                </div>
            </section>
            <div className='container' id='prefer2' >
                <div className="row" >
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon1.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon1.svg" />
                        <h6>100% Non-Plagiarism Guarantee</h6>
                        <p></p><div className="MsoNormal" style={{ textAlign: 'justify' }}>
                            <div className='container'>
                                <p className="MsoNormal">Originality is paramount in academic writing. With Smart Study Assist, you can rest assured that every assignment is plagiarism-free. Our team of certified writers adheres to rigorous standards to ensure the authenticity of every piece of work.</p>
                            </div>
                        </div><p></p>
                    </div>
                    <div className=" col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" />
                        <h6>All Subjects Covered</h6>
                        <div className='container'>
                            <p></p><p className="MsoNormal">From humanities to sciences, and everything in between, Smart Study Assist offers comprehensive coverage across all academic disciplines. Whatever your subject area, we're equipped to assist you in achieving your academic goals.</p><p></p>
                        </div>
                    </div>
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/mah-live/img/time-delivery.svg" alt="quality" src="https://cdn1.myassignment.live/mah-live/img/time-delivery.svg" />
                        <h6>On-Time Delivery</h6>
                        <div className='container'>
                            <p></p><p className="MsoNormal">We understand the importance of deadlines in academic life. With our commitment to punctuality, you can rely on Smart Study Assist to deliver your assignments promptly, every time. Your deadlines are sacred to us, and we ensure timely delivery without compromise.</p><p></p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'15px'}}>
                    <div className="col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon5.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon5.svg" />
                        <h6>100% Money Back Guarantee</h6>
                        <p></p><div className="MsoNormal" style={{ textAlign: 'justify' }}>
                            <p className="MsoNormal">We prioritize your satisfaction above all else. If you're not completely satisfied with our services, we offer a full refund, no questions asked. Your academic success is our top priority, and we stand by our commitment to excellence.</p>
                        </div><p></p>
                    </div>
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon4.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon4.svg" />
                        <h6>Certified and Experienced Writers</h6>
                        <p></p><p className="MsoNormal">Our team comprises certified professionals with years of experience in academic writing. Their expertise and dedication guarantee top-notch quality in every project they undertake. With Smart Study Assist, you're in capable hands.</p><p></p>
                    </div>
                    <div className="col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="40" height="40" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon6.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon6.svg" />
                        <h6>24*7 online support</h6>
                        <p></p><p className="MsoNormal">We understand that academic emergencies can arise at any time. That's why our support team is available round the clock to address any questions or concerns you may have. With Smart Study Assist, assistance is just a click away, whenever you need it.</p><p></p>
                    </div>
                </div>
            </div>
            <div className='btnTalk' style={{ textAlign: "center", marginTop: '75px' }}>
                <a href="/contact_us" target='_blank'>
                    <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                        <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                        Work with us</button>
                </a>
            </div>
            <hr style={{ marginLeft: "150px", marginRight: "150px", marginTop: '75px', marginBottom: "100px", border: "2px solid #15c39a" }} />
        </>
    )
}

export default Benifits
