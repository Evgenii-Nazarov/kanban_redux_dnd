import React from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import { closeModal, updateCard } from "../redux/action";
import { connect } from "react-redux";

const { Option } = Select;

const validateMessages = {
  required: "required",
  types: {
    number: "numbers only",
  },
};

const validator = {
  require: {
    required: true,
    message: "Required",
  },
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};

const EditForm = (props) => {
  const { modal } = props;
  const { data } = modal;
  const [form] = Form.useForm();

  const onFinish = (formValues) => {
    props.updateCard({ cardId: data._id, data: formValues });
    form.resetFields();
    props.closeModal();
  };

  return (
    <Form
      {...layout}
      form={form}
      layout={"horizontal"}
      size="large"
      name="normal_login"
      className="login-form"
      validateMessages={validateMessages}
      onFinish={onFinish}
      initialValues={data}
    >
      <Form.Item label="Name" name="name" rules={[validator.require]}>
        <Input placeholder="Card name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[validator.require]}
      >
        <Input placeholder="Card description" />
      </Form.Item>

      <Form.Item label="Priority" name="priority" rules={[validator.require]}>
        <Radio.Group>
          <Radio value={1}>Low</Radio>
          <Radio value={2}>Middle</Radio>
          <Radio value={3}>High</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Status" name="status" rules={[validator.require]}>
        <Select placeholder="Select status">
          <Option value="todo">To do</Option>
          <Option value="progress">In progress</Option>
          <Option value="review">To review</Option>
          <Option value="done">Done</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={props.closeModal}>Cancel</Button>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  updateCard: (params) => dispatch(updateCard(params)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
