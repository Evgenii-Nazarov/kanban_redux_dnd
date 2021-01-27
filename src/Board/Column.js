import React from "react";
import CardItem from "./CardItem";
import { Col, Row } from "antd";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";
import ItemTypes from "../DragNDrop/types";
import { changeCardColumnDrop } from "../redux/action";

function Column(props) {
  const { cards = [], column, columns=[] } = props;

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      if (item.card.status !== column.status) {
        props.changeCardColumnDrop({ card: item.card, column });
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Col
      ref={drop}
      lg={5}
      sm={10}
      xs={20}
      className={`my-border ${isOver ? "my-is-over-shadow" : "my-shadow"}`}
    >
      <Row
        className="mr-3 ml-3"
        gutter={[0, 8]}
        justify="center"
        align="middle"
      >
        <Col span={24} className="d-flex justify-content-center mt-2">
          <h3>{column.name}</h3>
        </Col>

        {cards
          .filter((el) => el.status === column.status)
          .map((el, i) => (
            <CardItem
              isInFirstColumn={el.status === columns[0].status}
              isInLastColumn={el.status === columns[columns.length - 1].status}
              isFirst={i === 0}
              isLast={
                i ===
                cards.filter((el) => el.status === column.status).length - 1
              }
              key={el._id}
              card={el}
              index={i}
              columns={columns}
              cards={cards}
            />
          ))}
      </Row>
    </Col>
  );
}

const mapStateToProps = (state) => ({
  columns: state.columns,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  changeCardColumnDrop: (params) => dispatch(changeCardColumnDrop(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
