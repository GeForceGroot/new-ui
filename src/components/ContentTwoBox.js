import React from 'react'
import '../style/contentTwoBox.css'

const ContentTwoBox = () => {
    return (
        <><div className='container' >
            <div className='row' id='twoBox'>
                <div className="col" id='col1'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'60px'} height={'60px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h2 id='head21'>Writing Support before Admission</h2>
                    <p id='paraC1'>Team Anjit VS creates admission and academic essays that students need throughout their academic journey. We help them apply successfully to their preferred universities with admission essays and create insightful assignments and dissertations for better grades and scores. We offer the following academic writing help.</p>
                    <ul id='ul1'>
                        <li>Admission Essays</li>
                        <li>Statements of Purpose</li>
                        <li>Personal Statements</li>
                        <li>Motivation Letters</li>
                        <li>Recommendation Letters</li>
                    </ul>
                </div>
                <div className="col" id='col2'>
                    <img src="https://anjitvs.in/wp-content/uploads/2022/07/7371204.png" width={'60px'} height={'60px'} style={{ marginTop: '10px' }} alt="bookimage" />
                    <h2 id='head22'>Writing Support before Admission</h2>
                    <p id='paraC2'>Team Anjit VS creates admission and academic essays that students need throughout their academic journey. We help them apply successfully to their preferred universities with admission essays and create insightful assignments and dissertations for better grades and scores. We offer the following academic writing help.</p>
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
            <div className='btnTalk' style={{ textAlign: "center"}}>
                <button type="button" style={{ marginTop: '50px',fontWeight:'bold', fontSize:'25px' }} class="btn btn-primary btn-lg">
                    <img src="https://www.iconpacks.net/icons/1/free-phone-icon-505-thumb.png" width={'25px'} height={'25px'} style={{marginRight:'15px'}} alt="phone" />
                    Talk to an expert</button>
            </div>
        </>
    )
}

export default ContentTwoBox
