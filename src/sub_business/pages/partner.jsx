import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';
import {connect} from 'dva';
import { Item_Radios, Item_Input} from '../../components/CreateItems.jsx';

const [FormItem, RadioGroup] = [Form.Item, Radio.Group];

//configs
let pageCfgs = {
  field: {}
};

//components
let MainForm = (props) => {
  const {getFieldProps, validateFields, getFieldsValue} = props.form;

  const _cols = {
    _8_12: {l_s:8, w_s: 12},
    _4_16: {l_s:4, w_s: 16},
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', getFieldsValue());
  };
  return (
    <Form horizontal onSubmit={handleSubmit} className="main-form">
      <p>产品基本信息</p>
      <Row type="flex" justify="start">
        <Col sm={11}>
          <Item_Input getFieldProps={getFieldProps} {...{
            label:'产品名称',
            cols:_cols._8_12,
            field:'name'
          }}/>

        </Col>

      </Row>
      <p>产品定价</p>
      <Row>
      <Col sm={22}>

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

function mapStateToProps({business_product_setup}) {
  return {business_product_setup};
};

export default connect(mapStateToProps)(View);
