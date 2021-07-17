import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";
function HomeScreen() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <div className="leftDescriptionBox">
              <div>
                <h1>Post When your audience is most active.</h1>
              </div>
              <div>
                <p>
                  With TimeNow, automatically schedule your posts on Twitter,
                  LinkedIn, and Instagram to post when your followers are most
                  active.
                </p>
              </div>
              <div>
                <ButtonGroup size="lg" className="mb-2">
                  <button className="scheduleBtn">Start Scheduling</button>
                  <button className="scheduleBtnTrans">View Demo</button>
                </ButtonGroup>
              </div>
              <div style={{ display: "flex" }}>
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 18 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C5.629 2.866 3.516 3 0 3V14.535C0 19.138 3.203 20.339 9 24C14.797 20.339 18 19.138 18 14.535V3C14.484 3 12.371 2.866 9 0ZM8.452 15L5 11.638L6.237 10.399L8.452 12.522L12.834 8.047L14.072 9.285L8.452 15Z"
                      fill="#049372"
                    />
                  </svg>
                </span>
                <p className="pl-3">TimeNow does not sell your data.</p>
                <a
                  href="/"
                  className="pl-2"
                  style={{ textDecoration: "underline" }}
                >
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeScreen;
