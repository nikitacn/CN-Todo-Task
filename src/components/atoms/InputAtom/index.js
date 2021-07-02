import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export function InputAtom({ placeholder, value, onChange, required, label }) {
  return (
    <Form.Group as={Row} controlId="title">
      <Col column sm="2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm="10">
        <Form.Control placeholder={placeholder} onChange={(e) => onChange(e.target.value)} required={required} defaultValue="" />
      </Col>
    </Form.Group>
  );
}
