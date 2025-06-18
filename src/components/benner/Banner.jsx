import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./banner.css"

const Banner = () => {
  return (
    <>
      <section id='banner'>
      <Container>
        <Row>
          <Col lg={6}>
          <div className="banner">
            <h6>Welcome to our CHURCH</h6>
            <h1>Become a part of our community</h1>
            <div className="ban_btn">
              <a href="#">Learn more</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Banner