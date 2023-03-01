import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Common = (props) => {
    return (
        <section className="section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 order-1 pt-5 d-flex  justify-content-center flex-column">

                                <h1>Grow your career with <strong>{props.name}</strong></h1>

                                <p>We are among the best institutions out there</p>

                                <Link to={props.btn}>
                                    <Button>{props.btnName}</Button>
                                </Link>


                            </div>
                            <div className="col-md-6 order-md-1">

                                {/* <img className='img-fluid' src={require("../images/hero1.png")} alt="" /> */}
                                <img className='img-fluid' src={props.image} alt="hero image" />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common