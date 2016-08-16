import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';
import {connect} from 'dva';
import {Item_Radios} from '../../components/CreateItems.jsx';
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

                {Item_Radios(getFieldProps,{cols:_cols._4_16,label:"定价模式",field:'type2',data:[{val:'1',title:'阶梯定价'},{val:'2',title:'一口价'}]})}
                {Item_Radios(getFieldProps,{cols:_cols._4_16,label:"定价方案",field:'type3',data:[{val:1,title:'阶梯定价'},{val:2,title:'一口价'}]})}

              </Col>
              </Row>
              <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                <Button type="primary" htmlType="submit">确定</Button>
              </FormItem>
              {props.cc}
            </Form>

            // <Form inline onSubmit={handleSubmit}>
            //   <FormItem label="姓名">
            //     <Input placeholder="员工姓名"
            //       {...getFieldProps('userName')}/>
            //   </FormItem>
            //
            //   <FormItem label="手机号">
            //     <Input type="phoneNumber" placeholder="员工手机"
            //       {...getFieldProps('phoneNumber')} />
            //   </FormItem>
            //
            //   <FormItem label="账号">
            //     <Input type="staffAccount" placeholder="员工账号"
            //       {...getFieldProps('staffAccount')} />
            //   </FormItem>
            //   <FormItem label="工号">
            //     <Input type="Staffid" placeholder="员工工号"
            //       {...getFieldProps('Staffid')} />
            //   </FormItem>
            //
            //   <FormItem label="商圈">
            //     <Select style={{ width: 120 }} {...getFieldProps('area',{initialValue: props.searchs.area || ''})}>
            //       <Option value="1">圈1</Option>
            //       <Option value="2">圈2</Option>
            //       <Option value="3">圈3</Option>
            //     </Select>
            //   </FormItem>
            //
            //   <Button type="primary" htmlType="submit">查询</Button>
            //   <Button type="primary" htmlType="submit">登录</Button>
            // </Form>


          )
};
MainForm = Form.create()(MainForm);

let employee_list_view = ({product_setup,dispatch}) => {
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

function mapStateToProps({employee_list}) {
  return {employee_list};
};

export default connect(mapStateToProps)(employee_list_view);
