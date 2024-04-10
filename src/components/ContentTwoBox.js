import React from 'react'
import '../style/contentTwoBox.css'

const ContentTwoBox = () => {
    return (
        <><div className='container' >
            <div className='row' id='twoBox'>
                <div className="col" id='col1'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'40px'} height={'40px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h4 id='head21'>Writing Support before Admission</h4>
                    <p id='paraC1'>Meet Shruti Jain, our dedicated assignment expert at Smart Study Assist. With extensive experience and deep expertise in academic writing, Shruti is committed to crafting top-quality assignments tailored to your unique requirements. At Smart Study Assist, we offer a range of academic writing services including</p>
                    <ul id='ul1'>
                        <li>Admission Essays</li>
                        <li>Statements of Purpose</li>
                        <li>Personal Statements</li>
                        <li>Motivation Letters</li>
                        <li>Recommendation Letters</li>
                    </ul>
                </div>
                <div className="col" id='col2'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'40px'} height={'40px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h4 id='head22'>Writing Support before Admission</h4>
                    <p id='paraC2'>Meet Shruti Jain, our dedicated assignment expert at Smart Study Assist. With extensive experience and deep expertise in academic writing, Shruti is committed to crafting top-quality assignments tailored to your unique requirements. At Smart Study Assist, we offer a range of academic writing services including </p>
                    <ul id='ul2'>
                        <li>Admission Essays</li>
                        <li>Statements of Purpose</li>
                        <li>Personal Statements</li>
                        <li>Motivation Letters</li>
                        <li>Recommendation Letters</li>
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
