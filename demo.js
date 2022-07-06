import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Form, Button, Input } from 'antd';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    value: i,
    label: '地' + i,
  });
}

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => {
  const [productList, setProductList] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      productId: 8,
    });
    getData().then((res) => {
      setProductList(res);
    });
  }, []);

  return (
    <>
      <Form form={form} labelAlign="left">
        <Form.Item
          name="pullNewName"
          label="活动名称"
          rules={[{ required: true, message: '活动名称不能为空' }]}
        >
          <Input placeholder="请填写活动名称" />
        </Form.Item>
        <Form.Item
          name="productId"
          label="活动商品"
          rules={[{ required: true, message: '请选择活动商品' }]}
        >
          <Select
            listItemHeight={10}
            listHeight={250}
            allowClear
            showSearch
            options={productList}
            placeholder="请选择活动商品"
            filterOption={(input, options) => options.label.indexOf(input) >= 0}
            style={{
              width: 180,
            }}
          />
        </Form.Item>
      </Form>
    </>
  );

  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('getData');
        return resolve(data);
      }, 500);
    });
  }
};

const Demo = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        打开select
      </Button>
      {isShow && <App />}
    </>
  );
};

export default Demo;
