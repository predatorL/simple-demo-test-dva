import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';

const [FormItem, RadioGroup] = [Form.Item, Radio.Group];

export function C_radio(getFieldProps,params) {
  const {cols,field="noFiled",label = "没填值", data} = params;
  // console.log(data) //这个会重复出发，什么机制，组件？？？
  return (
    <FormItem label={label} {...cols} >
      <RadioGroup {...getFieldProps(field)}>
        {data.map(
          (item,index) => <Radio key={field + index} value={item.val}>{item.title}</Radio>
        )}
      </RadioGroup>
    </FormItem>
  );
};
export function C_select(getFieldProps,{cols,field="noFiled",label = "没填值"}) {
  return (
    <FormItem label={label} {...cols} >
      <RadioGroup {...getFieldProps(field)}>
        <Radio value={1}>阶梯定价</Radio>
        <Radio value={2}>一口价</Radio>
      </RadioGroup>
    </FormItem>

  );
};
