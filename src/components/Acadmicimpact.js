import React, { useEffect } from 'react'
import '../style/acImpact.css'





const Acadmicimpact = () => {
    useEffect(() => {
        let valueDisplays = document.querySelectorAll('.num');
        let interval = 3000;

        valueDisplays.forEach((valueDisplays) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplays.getAttribute('data-val'));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplays.textContent = startValue;
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);
        })
    }, [])
    return (
        <>
            <section className='hell' style={{ justifyContent: "center", textAlign: 'center', marginTop: '50px', }}>
                <div className='ok' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 style={{ padding: '7px', color: "#030264" }}>Academic Impact: Our Track Record</h4>
                    <img src="https://cdn-icons-png.flaticon.com/128/3281/3281323.png" width={'40px'} height={'40px'} style={{ marginRight: '25px' }} alt="" />
                </div>
                <div className='container'>
                    <div className='row' style={{ marginTop: "50px", textAlign: 'center' }}>
                        <div className='col' >
                            <span data-val="15" className='num' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive' }}>0000</span>
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>years of experience </p></div>
                        <div className='col' >
                            <span data-val="1041" className='num' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive' }}>0000</span>
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>projects</p></div>
                        <div className='col' >
                            <span data-val="1571" className='num' style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'cursive' }}>0000</span>
                            <p style={{ fontSize: "16px", fontWeight: "normal", fontFamily: "initial" }}>happy students</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export default Acadmicimpact
