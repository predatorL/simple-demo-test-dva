import React, {Component, PropTypes} from 'react';
import {Form, Input, InputNumber, Button, Checkbox, Row, Col, DatePicker, Radio, Select} from 'antd';

const [FormItem, RadioGroup, Option] = [Form.Item, Radio.Group, Select.option];

let _cols = (cols) => {
  return {
    labelCol: {span:cols.l_s},
    wrapperCol: {span:cols.w_s}
  };
};

export let Item_Input = ({getFieldProps,cols,field,label, data}) => {
  return (
    <FormItem label={label} {..._cols(cols)}>
      <Input {...getFieldProps(field)}/>
    </FormItem>
  );
};

export let Item_Radios = ({getFieldProps,cols,field,label, data}) => {
  return (
    <FormItem label={label} {..._cols(cols)} >
      <RadioGroup {...getFieldProps(field)}>
        {data.map(
          (item,index) => <Radio key={field + index} value={item.val}>{item.title}</Radio>
        )}
      </RadioGroup>
    </FormItem>
  );
};

export let Item_Selects = ({getFieldProps,cols,field,label, data}) => {
  return (
    <FormItem label={label} {..._cols(cols)} >
      <Select {...getFieldProps(field)}>
        {data.map(
          (item,index) => <Option key={field + index} value={item.val}>{item.title}</Option>
        )}
      </Select>
    </FormItem>
  );
};
