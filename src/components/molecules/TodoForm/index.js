import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ButtonAtom, InputAtom, TextAreaAtom } from "../../atoms";

export function TodoFrom({title, setTitle, description, setDescription, handleAddTodo }) {
  return (
    <Form onSubmit={handleAddTodo}>
      <InputAtom placeholder={"Enter Title"} value={title} onChange={setTitle} required={true} label={"Title"}/>
      <TextAreaAtom placeholder="Description" required={true} value={description} onChange={setDescription} label={"Description"} />
      <Row>
        <Col sm={2}></Col>
        <Col sm={10}>
          <ButtonAtom className="form-control" variant="primary" type="submit" btnText="Add Todo" />
        </Col>
      </Row>
    </Form>
  );
}
