import React from "react";
import { connect } from "react-redux";
import { Card, Col, Dropdown, Menu, Popconfirm, Row, Tag } from "antd";
import { useDrag } from "react-dnd";
import { changeCardColumn, deleteCard, openModal } from "../redux/action";
import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ItemTypes from "../DragNDrop/types";

const { Meta } = Card;

function CardItem(props) {
  const { card, columns, isInFirstColumn, isInLastColumn, index } = props;
  const { name, priority, _id, description } = card;

  const tagColor = priority === 1 ? "green" : priority === 2 ? "orange" : "red";
  const tagName = priority === 1 ? "Low" : priority === 2 ? "Medium" : "High";

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      card,
      index,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() =>
          props.openModal({ form: "EditForm", title: "Edit card", data: card })
        }
        key="0"
        icon={<EditOutlined />}
      >
        Edit
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="1" icon={<DeleteOutlined />}>
        <Popconfirm
          onConfirm={() => props.deleteCard({ cardId: _id })}
          okText="Delete"
          title="Are you sure?"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        >
          Delete
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <Col span={24} ref={drag}>
      <Card
        hoverable={true}
        className="my-shadow-card"
        style={isDragging ? { opacity: "0.4" } : { opacity: "1" }}
        actions={[
          !isInFirstColumn && (
            <LeftOutlined
              onClick={() =>
                props.changeCardColumn({ card, columns, direction: "left" })
              }
            />
          ),

          <Dropdown overlay={menu} trigger={["click"]}>
            <SettingOutlined key="setting" />
          </Dropdown>,

          !isInLastColumn && (
            <RightOutlined
              onClick={() =>
                props.changeCardColumn({ card, columns, direction: "right" })
              }
            />
          ),
        ]}
      >
        <Row type="flex" gutter={[8, 8]} align="top">
          <Col span={16}>
            <Meta title={name} />
          </Col>
          <Col span={8}>
            <Tag color={tagColor}>{tagName}</Tag>
          </Col>
        </Row>
        <Meta description={description} />
      </Card>
    </Col>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeCardColumn: (params) => dispatch(changeCardColumn(params)),
  deleteCard: (params) => dispatch(deleteCard(params)),
  openModal: (card) => dispatch(openModal(card)),
});

export default connect(null, mapDispatchToProps)(CardItem);
