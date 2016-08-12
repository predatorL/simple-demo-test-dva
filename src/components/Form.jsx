import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';
const FormItem = Form.Item;

let Qh_form = (props) => {
  const {getFieldProps, validateFields, getFieldsValue} = props.form;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', getFieldsValue());
  };
  return (
    <Form horizontal onSubmit={handleSubmit} className={props.formClassName || "main-form"}>
      <p>产品基本信息</p>
      <Row type="flex" justify="start">
        <Col sm={11}>
          <FormItem
            label="产品名称"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
          >
            <Input placeholder="请输入搜索名称" size="default" />
          </FormItem>
          <FormItem
            label="营业时间"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
          >
            <Input placeholder="请输入搜索名称" size="default" />
          </FormItem>
        </Col>
        <Col sm={11}>
          <FormItem
            label="业务模式"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
          >
            <Radio value="2">本地生活圈即时送</Radio>

          </FormItem>
          <FormItem
            label="配送时间(分钟)"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
          >
            <Input placeholder="请输入搜索名称" size="default" />
          </FormItem>
        </Col>

      </Row>
      <p>产品定价</p>
      <Row>
      <Col sm={22}>
        <FormItem
          label="定价模式"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          <Radio value="2">阶梯定价</Radio>
          <Radio value="2">一口价</Radio>
        </FormItem>
        <FormItem
          label="定价方案"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          <Radio value="2">距离+时间阶梯价</Radio>
          <Radio value="2">距离阶梯价</Radio>
          <Radio value="2">时间阶梯价</Radio>
        </FormItem>
      </Col>
      </Row>
      <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
        <Button type="primary" htmlType="submit">确定</Button>
      </FormItem>
    </Form>
  );
};


export default Form.create()(Qh_form)
