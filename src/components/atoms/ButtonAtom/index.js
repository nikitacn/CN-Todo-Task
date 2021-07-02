import React from "react";
import { Button } from "react-bootstrap";
export function ButtonAtom(props) {
  return (
    <Button variant={props.variant} block type={props.type}>
      {props.btnText}
    </Button>
  );
}
