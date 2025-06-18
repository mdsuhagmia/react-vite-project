import React from 'react'
import "./upcoming.css"
import { Container, Row, Col } from 'react-bootstrap'
import { FaRegClock } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import upcomingim from "../../assets/image.jpg"
import { FaArrowRight } from "react-icons/fa";

const Upcoming = () => {
  return (
    <>
    <section id='sermons'>
      <Container>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
          <div className="upcoming">
            <h6>Upcoming SERMONS</h6>
            <h2>join us and become part of something great</h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
          <div className="upcoming_down">
            <div className="upcoming_date">
              <h4>20 <br/> JULY</h4>
            </div>
            <h6>Upcoming Event</h6>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className="upcoming_year">
              <div className="date_icon">
                <a href="#"> <FaRegClock/> </a>
              </div>
              <div className="date_text">
                <p>Friday 23:39 IST <br/> Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="upcoming_message">
              <div className="message_icon">
                <a href="#"> <FiMessageCircle /> </a>
              </div>
              <div className="message_text">
                <p>No 233 Main St. New York, <br /> United States</p>
              </div>
            </div>
            <div className="upcoming_btn">
                <a href="#">Register</a>
              </div>
          </div>
          </Col>
          <Col lg={8}>
            <div className="upcoming_img">
              <img src={upcomingim} alt="" className="w-100" />
              <h5>View all Sermons <a href="#"> <FaArrowRight /> </a> </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Upcoming