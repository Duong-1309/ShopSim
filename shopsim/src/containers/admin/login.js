import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth'

const Login = (props) => {
  const onFinish = (values) => {
    props.onAuth(values.username, values.password);
};
  let errorMessage = null;
  if(props.error){
    console.log(props.error.message);
      errorMessage = (
        <p className="text-danger">Tên đăng nhập hoặc mật khẩu không đúng</p>
      )
  }
  return (
    <div className="features-section bg-gray">
    <div className="container">
    <h1 className="subtitle text-center p-3">ĐĂNG NHẬP VÀO ADMIN</h1>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="feature-box bg-white">
            <div className="feature-box-content">
            {errorMessage}
            {props.loading ? 
            <Spin tip="Loading..."/>
            :
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Nhập tên' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Nhập mật khẩu' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Đăng nhập
                </Button>
            </Form.Item>
            </Form>
        }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const mapStateToProps = state =>{
    return { 
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
