import React from 'react'
import "./watch.css"
import { Container, Row, Col } from 'react-bootstrap'
import watchimg from "../../assets/watch.png"
import watchimg1 from "../../assets/watch1.png"
import watchimg2 from "../../assets/watch2.png"
import watchimg3 from "../../assets/watch3.png"

const Watch = () => {
  return (
    <>
    <section id='watch'>
      <Container>
        <Row>
          <Col lg={{span: 4, offset: 4}}>
          <div className="watch_up">
            <h6>Watch and listen</h6>
            <h2>THE benefits of joining our church</h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
          <div className="watch_down">
            <img src={watchimg} alt="" className="w-100" />
            <div className="watch_down_text">
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
          </div>
          </Col>
          <Col lg={3}>
          <div className="watch_down">
            <img src={watchimg1} alt="" className="w-100" />
            <div className="watch_down_txt">
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            </div>
          </div>
          </Col>
          <Col lg={3}>
          <div className="watch_down">
            <img src={watchimg2} alt="" className="w-100" />
            <div className="watch_down_txt">
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            </div>
          </div>
          </Col>
          <Col lg={3}>
          <div className="watch_down">
            <img src={watchimg3} alt="" className="w-100" />
            <div className="watch_down_txt">
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Watch