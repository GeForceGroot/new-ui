/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/profolio.css'
const Protfolio = () => {
  return (
    <>
      <section id='bgServe'>
        <div className="container" style={{ textAlign: 'center' }} >
          <h3 id='animath5' style={{ color: "#030264", paddingTop: "100px" }} className="block-sub__title">Portfolio</h3>
          <p id='paraAni' className="text-muted" style={{ marginTop: '40px', paddingBottom: '100px' }}>Trusted by over 2000 students who no longer struggle with SOP, LOR, Resume and Academic Writing.
          </p>
        </div>
      </section>
      <div className='container' style={{ textAlign: 'center' }}>
        <h3 style={{ marginTop: '50px' }}>Designed to make SOP, LOR, Resume writing easy for the students</h3>
        <p style={{ fontSize: '18px', marginTop: "10px" }}>All the specialists who wish to work with us pass several tests and regularly develop their skills.</p>
      </div>
      <div className='container' style={{marginBottom:'100px'}}>
        <div className='row' style={{ marginTop: '50px' }}>
          <div className='col-sm' id='carCssPort'>
            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }}>
              <img className="card-img-top" src="https://www.write-right.in/samples/wp-content/uploads/2023/09/2922500_27114-scaled.jpg" height={"110px"} alt="Card image cap" />
              <div className="card-body">
                <h4 style={{color:"#030264"}} className="card-title">SOP for Canada Visa</h4>
                <h3 style={{color:"darkorange"}}>Sample Sop for bachloer</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/portolio_1" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className='col-sm' id='carCssPort'>
            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }}>
              <img className="card-img-top" src="https://www.write-right.in/samples/wp-content/uploads/2023/09/DOA.jpg" height={"110px"} alt="Card image cap" />
              <div className="card-body">
                <h4 style={{color:"#030264"}} className="card-title">SOP for Canada Visa</h4>
                <h3 style={{color:"darkorange"}}>Sample Sop for bachloer</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/portolio_1" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className='col-sm' id='carCssPort'>
            <div className="card" style={{ width: "20rem", border: '1px solid rgb(234, 236, 237)' }}>
              <img className="card-img-top" src="https://www.write-right.in/samples/wp-content/uploads/2023/09/2922487_27101-scaled.jpg" height={"110px"} alt="Card image cap" />
              <div className="card-body">
                <h4 style={{color:"#030264"}} className="card-title">SOP for Canada Visa</h4>
                <h3 style={{color:"darkorange"}}>Sample Sop for bachloer</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/portolio_1" id='btnHvn' style={{ fontSize: "15px" }} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Protfolio
