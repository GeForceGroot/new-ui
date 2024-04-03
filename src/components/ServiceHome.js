import React from 'react'
import '../style/serviceHome.css'

const ServiceHome = () => {
    return (
        <>
            <div className='servecieHome' id='servecieHome'>
                <div className='hellooo' style={{ textAlign: "center" }}>
                    <h1 style={{marginTop:'25px', paddingTop:'25px'}}>Services For All Your Needs</h1>
                </div>
                    <div className='row' style={{marginTop:'50px', textAlign:'center'}} id='servrRow'>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/Accounting.svg" width={'30px'} height={"30px"}   alt="accounting" />
                            <h4 id='headServ' style={{color:'darkgreen'}}>Accounting</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/management.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ'style={{color:'#4747dd'}}>Mangement</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/finance.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ' style={{color:'darkorange'}}>Finance</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/programming.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ'style={{color:'#c63232'}}>Programing</h4>
                        </div>
                    </div>
                    <div className='row' style={{marginTop:'50px', textAlign:'center'}} id='servrRow'>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/law.svg" width={'30px'} height={"30px"}  alt="accounting" />
                            <h4 id='headServ' style={{color:'#c63232'}}>Law</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/math.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ'style={{color:'darkgreen'}}>Maths</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/science.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ' style={{color:'#4747dd'}}>Science</h4>
                        </div>
                        <div className='col' id='serverCol'>
                            <img src="https://cdn1.myassignment.live/mal-img/other.svg" width={'30px'} height={"30px"} alt="accounting" />
                            <h4 id='headServ'style={{color:'#4747dd'}}>Other Subjects</h4>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default ServiceHome