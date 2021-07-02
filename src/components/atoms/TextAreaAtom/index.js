import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export function TextAreaAtom({ placeholder, value, onChange, required, label }) {
  return (
    <Form.Group as={Row} controlId="description">
      <Col column sm="2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm="10">
        <Form.Control as="textarea" rows={3} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required={required} defaultValue="" />
      </Col>
    </Form.Group>
  );
}
