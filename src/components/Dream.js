import React from 'react'

const Dream = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                <h5 style={{ color: '#15c39a' }}>We make your dream come true</h5>
                <h6 style={{ marginTop: '25px' }}>Plagiarism-free, 100% original content curated by professional content writers</h6>
                <div className='btnTalk' style={{ textAlign: "center", marginTop: '50px' }}>
                    <a href="/contact_us" target='_blank'>
                        <button type="button" id='btnHvn' style={{ fontWeight: 'bold', fontSize: '20px' }} className="btn btn-primary">
                            <img src="https://www.iconpacks.net/icons/2/free-contact-icon-3018-thumb.png" width={'20px'} height={'20px'} style={{ marginRight: '15px' }} alt="phone" />
                            Contact Us</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Dream
