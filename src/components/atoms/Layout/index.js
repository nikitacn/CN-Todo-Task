import React from "react";
import { Row } from "react-bootstrap";

export function Layout({ children }) {
  return <Row style={{ padding: "45px" }}>{children}</Row>;
}
