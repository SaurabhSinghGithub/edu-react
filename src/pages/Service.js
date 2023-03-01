import React from 'react'
import apiData from '../apiData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = () => {
  return (
    <section className="service">

      <h1 className='text-center m-5'>Our Services</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className="row">
              {apiData.map((elem) => {

                const { id, imgsrc, title } = elem;

                return (
                  <div className="col-md-4 mb-4" key={id}>

                    <Card>
                      <Card.Img variant="top" src={imgsrc} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Service