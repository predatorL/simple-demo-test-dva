import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio} from 'antd';

const [FormItem, RadioGroup] = [Form.Item, Radio.Group];

export function C_radio(getFieldProps,{layouts,field="filed1",label = "定价模式"}) {
  console.log()
  return (
    <FormItem label={label} {...layouts} >
      <RadioGroup {...getFieldProps(field)}>
        <Radio value={1}>阶梯定价</Radio>
        <Radio value={2}>一口价</Radio>
      </RadioGroup>
    </FormItem>

  );
};
