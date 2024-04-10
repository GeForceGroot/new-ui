import React from 'react'
import '../style/contentTwoBox.css'

const ContentTwoBox = () => {
    return (
        <><div className='container' >
            <div className='row' id='twoBox'>
                <div className="col" id='col1'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'40px'} height={'40px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h4 id='head21'>Our Promises as a Reliable Content Writing Agency in India</h4>
                    <p id='paraC1'>With Das Writing Services as your SEO content partner, you get access to the world of rank-worthy web pages and other pieces of write-ups at the most affordable rates. For us, the quality of the service is of utmost importance. To ensure we craft high-quality content, we tread the extra mile to customise all write-ups to match your business and industry. We know that communication is the key to a successful relationship with customers. For that, you need to reach out to them when they are searching for you or the products you offer. As an expert content writing agency, we can assure you that you get:</p>
                    <ul id='ul1'>
                        <li>Fully In-House Managed Teams</li>
                        <li>Professional Writing Services</li>
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
