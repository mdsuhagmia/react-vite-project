import React from 'react'
import "./footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import footericon from "../../assets/Vector.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <section id='footer'>
      <Container>
        <Row>
          <Col lg={2}>
            <div className="footer_left">
              <img src={footericon} alt="" />
              <h5>© Copyright Finsweet 2022</h5>
              <h6>(480) 555-0103</h6>
              <h6>4517 Washington Ave. </h6>
              <h6>finsweet@example.com</h6>
            </div>
          </Col>
          <Col lg={{span: 1, offset: 2}}>
            <div className="footer_middle">
              <h6>Quicklinks</h6>
              <a href="#">About us</a>
              <a href="#">Sermons</a>
              <a href="#">Events</a>
              <a href="#">Blog</a>
            </div>
          </Col>
          <Col lg={2}>
          <div className="footer_icon">
             <h6>Connect</h6>
             <div className="ficon">
              <div className="ficon1">
                <a href="#"><FaFacebook /></a>
              </div>
              <div className="ficon2">
                <a href="#"><FaTwitter /></a>
              </div>
              <div className="ficon3">
                <a href="#"><FaLinkedin /></a>
              </div>
             </div>
            </div>
          </Col>
          <Col lg={5}>
           <div className="footer_right">
            <h3>Subscribe to get Latest Updates and News</h3>
             <div className="subscribe-box">
               <input type="email" placeholder="Yourmail@gmail.com" className="email-input" />
               <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Footer