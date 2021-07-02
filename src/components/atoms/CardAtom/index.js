import React from "react";
import { Card } from "react-bootstrap";
import ReactTimeAgo from "react-time-ago";

export function CardAtom({ todo }) {
  return (
    <Card key={todo.id} className={"todo"}>
      <Card.Header>
      Created At - <ReactTimeAgo date={todo.created_at} locale={"en-IN"} />
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{todo.title}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{todo.description}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
