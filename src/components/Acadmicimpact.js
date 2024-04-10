import React from 'react'
import '../style/acImpact.css'

const Acadmicimpact = () => {
    return (
        <>
            <section className='hell' style={{ justifyContent: "center", textAlign: 'center', marginTop: '50px', }}>
                <div className='ok' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 style={{ padding: '7px', color: "#15c39a" }}>Academic Impact: Our Track Record</h4>
                    <img src="https://cdn-icons-png.flaticon.com/128/3281/3281323.png" width={'40px'} height={'40px'} style={{ marginRight: '25px' }} alt="" />
                </div>
                <div className='container'>
                    <div className='row' style={{ marginTop: "50px", textAlign: 'center' }}>
                        <div className='col' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive'}}>15+
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>years of experience </p></div>
                        <div className='col' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive'}}>1571
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>projects</p></div>
                        <div className='col' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive'}}>1042
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>happy students</p></div>
                        {/* <div className='col' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive' }}>30+
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>Writers</p></div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Acadmicimpact
