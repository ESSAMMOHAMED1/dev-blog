import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MainNewPost = () => {
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const excert = e.target.excert.value;
    const image = e.target.image.value;
    console.log({ title, excert, image, body });
  };
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md="8" lg="6" className="mx-auto">
            <h2 className="mb-4"> Add new post</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Post Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter post title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formExcert">
                <Form.Label>Post Excert</Form.Label>
                <Form.Control
                  type="text"
                  name="excert"
                  placeholder="Enter post excert"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Post Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Enter image url"
                />
              </Form.Group>
              <ReactQuill theme="snow" value={body} onChange={setBody} />
              <Button type="submit" className="mt-4 w-100">
                submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainNewPost;
