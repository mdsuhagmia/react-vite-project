import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./headline.css"
import headicon from "../../assets/headline.png"
import headicon1 from "../../assets/headline1.png"
import headicon2 from "../../assets/headline2.png"

const Headline = () => {
  return (
     <>
    <section>
      <Container>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
            <div className="headline">
              <h6>SUB-HEADLINE</h6>
              <h3>love and compassion</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="headline_btn">
                <a href="#">Read more</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 3, offset: 1}}>
           <div className="headline_middle">
            <img src={headicon} alt="" className="w-100" />
           </div>
          </Col>
          <Col lg={4}>
           <div className="headline_middle1">
            <img src={headicon1} alt="" className="w-100" />
           </div>
          </Col>
          <Col lg={3}>
           <div className="headline_middle">
            <img src={headicon2} alt="" className="w-100" />
           </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
           <div className="headline_down">
            <h6>our mission & vision</h6>
            <h3>celebrate WITH US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="headline_down_btn">
              <a href="#">Read More</a>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Headline