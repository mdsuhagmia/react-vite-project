import React from 'react'
import "./around.css"
import { Container, Row, Col } from 'react-bootstrap'
import smallimg from "../../assets/Quote.png"

const Around = () => {
  return (
    <>
    <section id='around'>
      <Container>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
          <div className="arounds">
            <h2>We want to serve the world around us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            <div className="around_btn">
              <a href="#">Visit</a>
              <div className="around_small_img">
                <img src={smallimg} alt="" />
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Around