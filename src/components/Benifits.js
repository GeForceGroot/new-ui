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
                            <img width="59" height="65" loading="lazy" src="https://cdn1.myassignment.live/mah-live/img/book.svg" alt="book" />
                        </div>
                        <div className="icon1">
                            <div className="hex "></div>
                            <img width="53" height="46" loading="lazy" src="https://cdn1.myassignment.live/mah-live/img/cap.svg" alt="caMsoNormal" />
                        </div>
                    </div>
                    <h2 className="heading" id='' style={{ marginTop: "10px" }}>📖 We Do Assignments Online &amp; Offer Amazing Perks !</h2>
                </div>
            </section>
            <div className='container' id='prefer2' >
                <div className="row" >
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        {/* <img src="https://cdn-icons-png.freepik.com/512/9071/9071932.png" width={'60px'} height={'60px'} alt="pin" /> */}
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon1.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon1.svg" />
                        <h3>Solutions of impeccable quality</h3>
                        <p></p><div className="MsoNormal" style={{ textAlign: 'justify' }}>
                            <div className='container'>
                                <p className="MsoNormal">Every one of our solutions is perfect in every aspect. Our writing teams toil around the clock to make everything flawless. Be it your school homework or college assignment, expect the best assignment help&nbsp;every time</p>
                            </div>
                        </div><p></p>
                    </div>
                    <div className=" col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" />
                        <h3>100% originality guaranteed</h3>
                        <div className='container'>
                            <p></p><p className="MsoNormal">Our paper writers&nbsp;work on every order from scratch. Every solution goes through multiple plagiarism checks. We also attach FREE plagiarism&nbsp;reports when we deliver our solutions. Contact our support team&nbsp;to know more.</p><p></p>
                        </div>
                    </div>
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/mah-live/img/time-delivery.svg" alt="quality" src="https://cdn1.myassignment.live/mah-live/img/time-delivery.svg" />
                        <h3>On-time delivery</h3>
                        <div className='container'>
                            <p></p><p className="MsoNormal">Be it 2 days or 2 weeks; our qualified assignment experts&nbsp;will meet any deadline with impunity. They toil round the clock and work in teams to send a superb solution long before the deadline.</p><p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon5.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon5.svg" />
                        <h3>Affordable price</h3>
                        <p></p><div className="MsoNormal" style={{ textAlign: 'justify' }}>
                            <p className="MsoNormal"><span style={{ fontFamily: 'Times New Roman' }}>“Where can I </span>pay for my assignment&nbsp;without going broke?” Where else but right here? Enjoy the best writing service&nbsp;in the US at affordable prices&nbsp;alongside awesome offers &amp; discounts. Connect today.</p>
                        </div><p></p>
                    </div>
                    <div className="col-sm one-third item" id='blueBox'>
                        <div className="hex"></div>
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon4.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon4.svg" />
                        <h3>Get great grades</h3>
                        <p></p><p className="MsoNormal">At Myassignmenthelp, we guarantee better grades with our high-quality papers. Work with our experts and boost your grades, knowledge, and skills today. Share your requirements today.</p><p></p>
                    </div>
                    <div className="col-sm one-third item" id='greenBox'>
                        <div className="hex"></div>
                        <img width="56" height="56" kis-src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon6.svg" alt="quality" src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon6.svg" />
                        <h3>24*7 online support</h3>
                        <p></p><p className="MsoNormal">Our support team&nbsp;is always ready to help you out. Call them up for any queries &amp; doubts regarding our assignment help&nbsp;services.</p><p></p>
                    </div>
                </div>
            </div>
            <div className='btnTalk' style={{ textAlign: "center", marginTop:'75px' }}>
                <button type="button" id='btnHvn' className="btn btn-primary btn-lg">
                    <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                    Work with us</button>
            </div>
            <hr style={{ marginLeft: "150px", marginRight: "150px", marginTop: '75px', marginBottom:"100px", border: "2px solid #15c39a" }} />
        </>
    )
}

export default Benifits
