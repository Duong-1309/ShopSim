import PropTypes from 'prop-types'
import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
} from 'antd';

function Create(props) {
  const {category, productType, onSubmit, addSuccess} = props;
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }
  if(addSuccess !== null && addSuccess ){
    form.resetFields();
  }
  const handleSubmit = (value) => {
    const form_data = new FormData();
    form_data.append('title', value.title)
    form_data.append('description', value.description)
    form_data.append('price', value.price)
    if(image !== null) {
      form_data.append('product_img', image, image.name)
    }
    form_data.append('category', value.category)
    form_data.append('product_type', value.product_type)
    form_data.append('active', true)
    if(onSubmit !== null){
      onSubmit(form_data)
    }
  }

  const onFinishFailed = (error) => {
      console.log("Failed: ",error);
  }


  return (
        <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size='default'
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Số: " name="title" 
        rules={[{ required: true, message: 'Vui lòng nhập dữ liệu' }]}>
          <Input placeholder="Nhập số"/>
        </Form.Item>

        <Form.Item label="Mô tả: " name="description"
        rules={[{ required: true, message: 'Vui lòng nhập dữ liệu' }]}>
          <Input.TextArea placeholder="Mô tả sim"/>
        </Form.Item>

        <Form.Item label="Giá: " name="price"
        rules={[{ required: true, message: 'Vui lòng nhập dữ liệu' }]}>
          <InputNumber placeholder="Nhập giá"/>
        </Form.Item>

        <Form.Item label="Ảnh" onChange={handleImageChange} 
        accept="image/png, image/jpeg" name="product_image" extra="Không bắt buộc">
        <Input type="file" bordered={false}/>
        
        </Form.Item>

        <Form.Item label="Chuyên mục: " name="category"
        rules={[{ required: true, message: 'Vui lòng nhập dữ liệu' }]}>
          <Select placeholder="Chọn chuyên mục">
            {category.map((category) => (
              <Select.Option key={category.id} value={category.id}>{category.title}</Select.Option>
            ))}
            
          </Select>
        </Form.Item>

        <Form.Item label="Loại mạng: " name="product_type"
        rules={[{ required: true, message: 'Vui lòng nhập dữ liệu' }]}>
        <Select placeholder="Chọn mạng">
            {productType.map((type) => (
              <Select.Option key={type.id} value={type.id}>{type.title}</Select.Option>
            ))}
            
          </Select>
        </Form.Item>

        <Form.Item  label="  ">
          <Button htmlType="submit" type="primary">Tạo sim</Button>
        </Form.Item>
      </Form>
    </>
    )
}

Create.propTypes = {
  category: PropTypes.array,
  productType: PropTypes.array,
  onSubmit: PropTypes.func,
  addSuccess: PropTypes.bool,
}
Create.defaultProps = {
  category: [],
  productType: [],
  onSubmit: null,
  addSuccess: null,
}

export default Create

