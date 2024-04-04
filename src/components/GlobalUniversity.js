import React from 'react'
import "../style/globalUiversity.css"
import image from '../style/loactionImage.jpg'

const GlobalUniversity = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col' id='uni1' style={{marginTop:'125px'}}><img style={{borderRadius:'20px'}} id='imgani' src={image} width={'600px'} height={'400px'} alt="univesityImage" /></div>
                    <div className='col' id='colUni'>
                        <h2>Serving Global Universities at a</h2>
                        <h2 style={{ color: 'darkorange' }}>90% acceptance rate</h2>
                        <p style={{ fontSize: "18px", marginTop: '25px' }}>Get personalized and guided services for students and working professionals under one roof with a fixed TAT of 2 days and no extra charges. We create SOPs that fit individual needs using the profile, universities, courses, faculty, and exam scores with the help of our content writing services. Quality check by education counsellors, 1 free revision anytime with an above 90% acceptance rate, no hidden charges, express deliveries, and over 2000 positive customer reviews.</p>
                        <div className='btnTalk' >
                        <button type="button" id='btnHvn' style={{fontSize:'18px'}} className="btn btn-primary btn-lg">Get a free quote</button>
                        <button type="button" id='btnHvn' style={{fontSize:'18px', marginLeft:'15px', backgroundColor:'white', color:'#15c39a'}} className="btn btn-primary btn-lg">View Example</button>
                    </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default GlobalUniversity
// 