import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BiPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-5"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "white",
        marginTop: "auto",
      }}
    >
      <div className="container p-5 pb-0">
        <Row className="text-center text-md-left">
          <Col md={4}>
            <h3 className="">Farm Name</h3>
          </Col>

          {/* About Us Column */}
          <Col md={4} className="mb-4">
            <h5>ABOUT US</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean.
            </p>
            <Link to={"about"}>
              <Button variant="link" className="twhite">
                Read More
              </Button>
            </Link>
          </Col>

          {/* Get Connected Column */}
          <Col md={4} className="mb-4">
            <h5>GET CONNECTED</h5>
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="d-flex gap-2">
                <HiLocationMarker size={20} />
                {/* <span className="fw-bold">Address:</span> 203 Fake St. Mountain
                View, San Francisco, California, USA */}
                Online
              </p>
              <p className="d-flex gap-2">
                <BiPhone size={20} />
                07012345678
              </p>
              <p className="d-flex gap-2">
                <MdEmail size={20} />
                farm@yahoo.com
              </p>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="text-center mt-4" style={{ color: "#888" }}>
          <p>Copyright ©2025 All rights reserved | Farm Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
