import React from 'react'
import '../style/serviceHome.css'

const ServiceHome = () => {
    return (
        <>
            <section id='srviceBgset'>
                <div className='container servecieHome' id='servecieHome'>
                    <div className='hellooo' style={{ textAlign: "center" }}>
                        <h4 style={{ marginTop: '25px', paddingTop: '25px' }}>Our Services Cater To All Your Academic Needs, Including</h4>
                    </div>
                    <div className='row' style={{ marginTop: '50px', textAlign: 'center' }} id='servrRow'>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/Accounting.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: 'darkgreen' }}>Accounting</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/management.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: '#4747dd' }}>Mangement</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/finance.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: 'darkorange' }}>Finance</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/programming.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: '#c63232' }}>Programing</h6>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: '50px', textAlign: 'center' }} id='servrRow'>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/law.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: '#c63232' }}>Law</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/math.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: 'darkgreen' }}>Maths</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/science.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: '#4747dd' }}>Science</h6>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/other.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h6 id='headServ' style={{ color: '#4747dd' }}>And Other Subjects</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceHome
