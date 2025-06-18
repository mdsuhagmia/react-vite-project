import React from 'react'
import "./blog.css"
import { Container, Row, Col } from 'react-bootstrap'

const Blog = () => {
  return (
     <>
     <section id='blog'>
      <Container>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
          <div className="blog_up">
            <h6>Read our Blog</h6>
            <h2>SHARE, INSPIRE, INNOVATE</h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
           <div className="blog">
            <h5>Relationship</h5>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h6>By Mathew Johnson</h6>
            <h6>Tuesday 13 May, 2021</h6>
           </div>
          </Col>
          <Col lg={3}>
           <div className="blog">
            <h5>Relationship</h5>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h6>By Mathew Johnson</h6>
            <h6>Tuesday 13 May, 2021</h6>
           </div>
          </Col>
          <Col lg={3}>
           <div className="blog">
            <h5>Relationship</h5>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h6>By Mathew Johnson</h6>
            <h6>Tuesday 13 May, 2021</h6>
           </div>
          </Col>
          <Col lg={3}>
           <div className="blog">
            <h5>Relationship</h5>
            <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h6>By Mathew Johnson</h6>
            <h6>Tuesday 13 May, 2021</h6>
           </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Blog