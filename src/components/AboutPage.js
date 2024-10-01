import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Css/About.css'; 

const AboutPage = () => (
  <Container className="about-us-page py-5">
    <h1 className="text-center mb-4">About Us</h1>
    <Row className="mb-4">
      <Col md={6}>
        <Card className="border-0 shadow-sm">
          <Card.Img
            variant="top"
            src="https://st2.depositphotos.com/5312214/9917/i/450/depositphotos_99175596-stock-photo-our-mission-teared-note-paper.jpg"
            alt="Our Mission"
          />
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              We are dedicated to providing top-notch services and products that
              exceed our customers' expectations. Our mission is to innovate and
              deliver high-quality solutions that make a positive impact on the
              world.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="border-0 shadow-sm">
          <Card.Img
            variant="top"
            src="https://img.freepik.com/premium-photo/body-language-concept-illustration_952832-7663.jpg"
            alt="Our Team"
          />
          <Card.Body>
            <Card.Title>Our Team</Card.Title>
            <Card.Text>
              Our team is composed of highly skilled professionals who are
              passionate about what they do. With years of experience and a
              commitment to excellence, we work together to achieve our common
              goals and deliver outstanding results.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <Button variant="primary" href="/contact">Contact Us</Button>
      </Col>
    </Row>
  </Container>
);

export default AboutPage;
