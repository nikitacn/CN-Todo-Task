import React from "react";
import { Col } from "react-bootstrap";
import { Layout } from "../../atoms";
import { TodoFrom, Todos } from "../../molecules";

export function TodoTemplate({ todos, loading, handleAddTodo, title, setTitle, description, setDescription }) {
  return (
    <Layout>
      <Col sm={4}>
        <TodoFrom handleAddTodo={handleAddTodo} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
      </Col>
      <Col sm={8}>
        <Todos todos={todos} loading={loading} />
      </Col>
    </Layout>
  );
}
