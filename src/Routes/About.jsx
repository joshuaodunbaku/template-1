import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="container py-5">
          <Row className="text-center">
            <Col md={4}>
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">
                To deliver solutions that empower businesses and enrich user
                experiences globally.
              </p>
            </Col>
            <Col md={4}>
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted">
                To be a leading force in digital transformation across
                industries and borders.
              </p>
            </Col>
            <Col md={4}>
              <h5 className="fw-bold">Core Values</h5>
              <p className="text-muted">
                Innovation, Integrity, Collaboration, and Excellence in every
                project we undertake.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
