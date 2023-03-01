import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Contact = () => {

  const [user, setuser] = useState({
    fullName: "",
    email: ""
  })

  const handleChange = (e) => {

    const { name, value } = e.target;

    setuser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User name is ${user.fullName} and his email is ${user.email}`)

    setuser({
      fullName: "",
      email: ""
    })

  }


  return (
    <section className="contact">

      <h1 className='text-center m-5'>Contact Us</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"
                  value={user.fullName}
                  onChange={handleChange}
                  name="fullName" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  value={user.email}
                  onChange={handleChange}
                  name="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact