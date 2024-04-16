// Popup.js

import React from 'react';
import ContactUsForm from './PopUpContact'

const Popup = ({ handleClose, show }) => {
    const showHideClassName = show ? 'popup' : 'popup display-none';

    return (
        <div className={showHideClassName} >
            <section className="popup-main" style={{ textAlign: 'center', justifyContent:'center',borderRadius: '10px', backgroundColor: "lightblue" }}>
                <div className='d-flex' style={{textAlign:'center'}}>
                    <h6 style={{textAlign:"center"}}>Quick response and express delivery guaranteed !!!</h6>
                    <button onClick={handleClose} style={{ position:'fixed',right:'0', top:'0',backgroundColor: 'lightblue' }}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" width={"20px"} height={"20px"} alt="" />
                    </button>
                </div>
                <ContactUsForm />
            </section>
        </div>
    );
};

export default Popup;
