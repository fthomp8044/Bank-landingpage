import React from "react";
import Header from "../components/Header";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <section>
              <div>
                <h1>Next generation digital banking</h1>
              </div>
              <div>
                <p>
                  Take your financial life online. Your Easybank account will be
                  a one-stop-shop for spending, saving, budgeting, investing,
                  and much more.
                </p>
              </div>
              <div>
                <Button>Request Invite</Button>
              </div>
            </section>
          </Col>
          <Col xs={12} md={6}>
            <div className="backgroundIntroBg">
              <Image src="../images/image-mockups.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
