import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import icon from"../../assets/icon.png"
import icon1 from "../../assets/icon (1).png"
import icon2 from "../../assets/icon (2).png"
import "./about.css"

const About = () => {
  return (
    <>
    <section id='about'>
      <Container>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
          <div className="about_up">
            <h6>sub-headline</h6>
            <h2>a church that's relevant</h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
           <div className="about_down">
            <div className="about_down_up">
              <img src={icon} alt="" />
              <h3>About us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about_down_down"></div>
           </div>
          </Col>
          <Col lg={4}>
           <div className="about_down">
            <div className="about_down_up">
              <img src={icon1} alt="" />
              <h3>Get involved</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about_down_down"></div>
           </div>
          </Col>
          <Col lg={4}>
           <div className="about_down">
            <div className="about_down_up">
              <img src={icon2} alt="" />
              <h3>Giving back</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about_down_down"></div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About