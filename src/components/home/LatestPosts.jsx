import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LatestPosts = () => {
  const navigate = useNavigate();
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5"> Latest Articles</h2>

        <Row xs="1" md="2" lg="4" className="g-4">
          {new Array(4).fill("x").map((_, ix) => (
            <Col key={ix}>
              <div> article </div>
            </Col>
          ))}
        </Row>

        <div className="mt-4 text-center">
          <Button
            variant="outline-dark"
            className="px-5"
            onClick={() => navigate("/blog")}
          >
            {" "}
            see all
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default LatestPosts;
