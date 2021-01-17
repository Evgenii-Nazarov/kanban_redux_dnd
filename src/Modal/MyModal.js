import React from "react";
import { Modal } from "antd";

const MyModal = (props) => {
  const { title, visible, children, width = 520 } = props;

  return (
    <Modal
      visible={visible}
      width={width}
      title={title}
      onCancel={props.handleCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
