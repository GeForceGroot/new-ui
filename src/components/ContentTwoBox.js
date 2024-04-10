import React from 'react'
import '../style/contentTwoBox.css'

const ContentTwoBox = () => {
    return (
        <><div className='container' >
            <div className='row' id='twoBox'>
                <div className="col" id='col1'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'40px'} height={'40px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h4 id='head21'>Our promises as a Reliable Academic Writing Service Providers in India</h4>
                    <p id='paraC1'>Struggling to craft that perfect essay or research paper? Smart Study Assist is here to help! We go beyond just tutoring, offering comprehensive academic writing assistance to elevate your skills. Our team of qualified experts provides personalized guidance on everything from developing a strong thesis to polishing your citations. With Smart Study Assist, you'll not only get a polished final product, but also gain the knowledge and confidence to tackle future writing assignments on your own.</p>
                    <ul id='ul1'>
                        <li>Professional Writing Services</li>
                        <li>Fully In-House Managed Teams</li>
                        <li>Prompt Meetings with Writers & Editors</li>
                        <li>Dedicated Research & Development team   </li>
                        <li>Search Essentials Optimised Content</li>
                        <li>Scalable Writing Exclusive to Your Requirements</li>
                    </ul>
                </div>  
            </div>
        </div>
            <div className='btnTalk' style={{ textAlign: "center" }}>
                <a href="/contact_us" target='_blank'>
                    <button type="button" className="btn btn-primary" id='btnHv'>
                        <img src="https://www.iconpacks.net/icons/1/free-phone-icon-505-thumb.png" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                        Talk to an expert</button>
                </a>
            </div>
        </>
    )
}

export default ContentTwoBox
