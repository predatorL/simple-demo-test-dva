import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';
import {connect} from 'dva';
import {C_radio} from '../../utils/createFormItem.js';


const [FormItem, RadioGroup] = [Form.Item, Radio.Group];
let MainForm = (props) => {
  const {getFieldProps, validateFields, getFieldsValue} = props.form;

  const _cols = {
    _8_12: {labelCol: { span: 6 },  wrapperCol: { span: 14 }},
    _4_16: {labelCol: { span: 4 },  wrapperCol: { span: 16 }},
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', getFieldsValue());
  };
  return (
    <Form horizontal onSubmit={handleSubmit} className="main-form">
      <p>产品基本信息</p>
      <Row type="flex" justify="start">
        <Col sm={11}>
          <FormItem label="产品名称" {..._cols._8_12} >
            <Input {...getFieldProps('name')}/>
          </FormItem>
          <FormItem label="营业时间" {..._cols._8_12} >
            <Input {...getFieldProps('time')} />
          </FormItem>
        </Col>
        <Col sm={11}>
          <FormItem label="业务模式" {..._cols._8_12} >
            <RadioGroup {...getFieldProps('type')}>
              <Radio value={1}>本地生活圈即时送</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="配送时间(分钟)" {..._cols._8_12} >
            <Input placeholder="请输入搜索名称" {...getFieldProps('time2')}/>
          </FormItem>
        </Col>

      </Row>
      <p>产品定价</p>
      <Row>
      <Col sm={22}>

        {C_radio(getFieldProps,{cols:_cols._4_16,label:"定价模式",field:'type2',data:[{val:'1',title:'阶梯定价'},{val:'2',title:'一口价'}]})}

        {C_radio(getFieldProps,{cols:_cols._4_16,label:"定价方案",field:'type3',data:[{val:1,title:'阶梯定价'},{val:2,title:'一口价'}]})}

      </Col>
      </Row>
      <FormItem wrapperCol={{ span: 16, offset: 6 }}>
        <Button type="primary" htmlType="submit">确定</Button>
      </FormItem>
      {props.cc}
    </Form>
  )
};
MainForm = Form.create()(MainForm);

let View = ({product_setup,dispatch}) => {
  //const {} = product_setup;
  const fromProps = {

  };
  return (
    <div className="con-body">
      <div className="bd-header"></div>
      <div className="bd-content">
        <MainForm />
      </div>
    </div>
  );
};

function mapStateToProps({product_setup}) {
  return {product_setup};
};

export default connect(mapStateToProps)(View);
