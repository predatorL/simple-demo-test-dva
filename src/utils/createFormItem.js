import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';

const [FormItem, RadioGroup] = [Form.Item, Radio.Group];

export function C_radio(getFieldProps,params) {
  const {layouts,field="noFiled",label = "没填值"} = params;
  console.log(params)
  return (
    <FormItem label={label} {...layouts} >
      <RadioGroup {...getFieldProps(field)}>
        <Radio value={1}>阶梯定价</Radio>
        <Radio value={2}>一口价</Radio>
      </RadioGroup>
    </FormItem>

  );
};
export function C_select(getFieldProps,{layouts,field="noFiled",label = "没填值"}) {
  return (
    <FormItem label={label} {...layouts} >
      <RadioGroup {...getFieldProps(field)}>
        <Radio value={1}>阶梯定价</Radio>
        <Radio value={2}>一口价</Radio>
      </RadioGroup>
    </FormItem>

  );
};
