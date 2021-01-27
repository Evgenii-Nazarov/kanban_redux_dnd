import React from "react";
import {Button, PageHeader} from "antd";
import {connect} from "react-redux";
import {addCard, deleteAllCards, openModal} from "../redux/action";

const Header = (props) => {
  return (
    <>
      <PageHeader
        title="Kanban"
        subTitle="drag and drop"
        extra={[
          <Button shape="round" key="2" onClick={props.deleteAllCards}>
            Delete all tasks and set demo data
          </Button>,
          <Button
            shape="round"
            key="2"
            onClick={() =>
              props.openModal({
                form: "About",
                title: "About this app",
                width: 560,
              })
            }
          >
            About
          </Button>,
          <Button
            shape="round"
            key="1"
            type="primary"
            onClick={() =>
              props.openModal({ form: "AddForm", title: "Create card" })
            }
          >
            Add new task
          </Button>,
        ]}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
  deleteAllCards: () => dispatch(deleteAllCards()),
  openModal: (card) => dispatch(openModal(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
