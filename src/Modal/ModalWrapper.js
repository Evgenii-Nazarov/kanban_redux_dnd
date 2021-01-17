import React from "react";
import { closeModal } from "../redux/action";
import { connect } from "react-redux";
import MyModal from "./MyModal";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import About from "../Header/About";

function formMap(form) {
  switch (form) {
    case "AddForm":
      return <AddForm />;

    case "EditForm":
      return <EditForm />;

    case "About":
      return <About />;

    default:
      return null;
  }
}

const ModalWrapper = (props) => {
  const { modal } = props;
  const { form, title, visible, width = 520 } = modal;

  return (
    <>
      <MyModal
        width={width}
        visible={visible}
        title={title}
        handleCancel={props.closeModal}
      >
        {formMap(form)}
      </MyModal>
    </>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
