import React from "react";
import Column from "./Column";
import { Row } from "antd";

function Board(props) {
  const { columns } = props;

  return (
    <Row justify="space-around">
      {columns.map((el) => (
        <Column key={el._id} column={el} />
      ))}
    </Row>
  );
}

export default Board;
