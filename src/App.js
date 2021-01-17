import React, { useEffect } from "react";
import { connect } from "react-redux";
import Board from "./Board/Board";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { addCard, getCards } from "./redux/action";
import Header from "./Header/Header";
import ModalWrapper from "./Modal/ModalWrapper";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App(props) {
  useEffect(() => {
    props.getCards();
  });

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Board columns={props.columns} />
        <ModalWrapper />
      </DndProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
  getCards: () => dispatch(getCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
