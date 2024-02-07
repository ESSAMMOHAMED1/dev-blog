import React, { useContext, useEffect, useRef } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { PostsContext } from "../../context/PostsContext";
import PostCard from "./PostCard";

const MainBlog = () => {
  const { fetch, loading, error, data } = useContext(PostsContext);
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

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        {error ? (
          <div>
            <Alert variant="danger">{error}</Alert>
          </div>
        ) : null}

        {(!error || !loading) && data ? (
          <Row xs="1" md="2" lg="4" className="g-4">
            {data.map((post) => (
              <Col key={post.id}>
                <PostCard post={post} />
              </Col>
            ))}
          </Row>
        ) : null}
      </Container>
    </section>
  );
};

export default MainBlog;
