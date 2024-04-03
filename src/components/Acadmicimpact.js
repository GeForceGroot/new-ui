import React from 'react'
import '../style/acImpact.css'

const Acadmicimpact = () => {
    return (
        <>
            <section className='hell' style={{ justifyContent: "center", textAlign: 'center', marginTop: '50px', }}>
                <div className='ok' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 style={{ padding: '7px', color: "#15c39a" }}>Academic Impact</h2>
                    <img src="https://cdn-icons-png.flaticon.com/128/3281/3281323.png" width={'50px'} height={'50px'} style={{ marginRight: '25px' }} alt="" />
                </div>
                <div className='container'>
                    <div className='row' style={{ marginTop: "50px", textAlign: 'center' }}>
                        <div className='col' style={{ fontSize: '39px', fontWeight: 'bold', fontFamily: 'cursive'}}>4000+
                            <p style={{ fontSize: "22px", fontWeight: "normal", fontFamily: "initial" }}>Essays</p></div>
                        <div className='col' style={{ fontSize: '39px', fontWeight: 'bold', fontFamily: 'cursive'}}>2,800+
                            <p style={{ fontSize: "22px", fontWeight: "normal", fontFamily: "initial" }}>Students</p></div>
                        <div className='col' style={{ fontSize: '39px', fontWeight: 'bold', fontFamily: 'cursive'}}>10+
                            <p style={{ fontSize: "22px", fontWeight: "normal", fontFamily: "initial" }}>Countries</p></div>
                        <div className='col' style={{ fontSize: '39px', fontWeight: 'bold', fontFamily: 'cursive' }}>30+
                            <p style={{ fontSize: "22px", fontWeight: "normal", fontFamily: "initial" }}>Writers</p></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Acadmicimpact
