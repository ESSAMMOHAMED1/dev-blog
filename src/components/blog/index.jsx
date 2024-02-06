import React, { useContext, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PostsContext } from "../../context/PostsContext";

const MainBlog = () => {
  const { fetch } = useContext(PostsContext);
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      fetch();
      isMount.current = true;
    }
  }, []);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5"> Latest Posts</h2>

        <Row xs="1" md="2" lg="4" className="g-4">
          <Col> post</Col>
          <Col> post</Col>
          <Col> post</Col>
          <Col> post</Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainBlog;
