import React from 'react'
import '../style/clock.css'

const Clock = () => {
    return (
        <>
            <div className='container' style={{ marginTop: '100px', textAlign: "center" }}>
                <div className='headingClock' style={{ textAlign: 'center' }}>
                    <h2>Let us handle the writing, while you’re celebrating!🎉🎊</h2>
                </div>
                <div className="row" id='clockMian'>
                    <div className="col" id='dataCol'>
                        <h5 id='ck1'>Collecting data</h5>
                        <h5 id='ck1' style={{ color: '#15c39a', marginBottom:'25px' }}>4% time wasted</h5>
                        <h5 id='ck2'>Researching</h5>
                        <h5 id='ck2' style={{ color: '#15c39a', marginBottom:'20px'  }}>14% time wasted</h5>
                        <h5 id='ck3'>Adding relevant points</h5>
                        <h5 id='ck3' style={{ color: '#15c39a', marginBottom:'30px'  }}>24% time wasted</h5>
                        <h5 id='ck4'>Structuring & ideating</h5>
                        <h5 id='ck4' style={{ color: '#15c39a', marginBottom:'30px'  }}>14% time wasted</h5>
                        <h5 id='ck5'>Using the correct format</h5>
                        <h5 id='ck5' style={{ color: '#15c39a', marginBottom:'20px'  }}>34% time wasted</h5>
                        <h5 id='ck6'>Editing & proofreading</h5>
                        <h5 id='ck6' style={{ color: '#15c39a' }}>14% time wasted</h5>
                    </div>
                    <div className="col-8" id='clockMain'>
                        <img src="https://www.write-right.in/img/circleframe.webp" style={{ marginTop: '100px' }} id='ckImg' alt="clock" />
                    </div>
                    <div className="col" id='sideData'>
                        <p id='paraColck1' style={{color: '#15c39a', fontSize:'23px', fontWeight:'bold'}}>We've got your back, and your A+</p>
                        <p id='paraColck2' style={{fontSize:"23px"}}>From "Oh no" to "Wow!"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clock
