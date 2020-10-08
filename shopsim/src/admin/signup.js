import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth'

const Signup = (props) => {
  const onFinish = (values) => {
      console.log(values);
    props.onAuth(values.username, 
                values.email, 
                values.password, 
                values.confirm);
    props.history.push('/admin')
};
  let errorMessage = null;
  if(props.error){
      errorMessage = (
          <p>{props.error.message}</p>
      )
  }
  return (
    <div className="features-section bg-gray">
    <div className="container">
    <h1 className="subtitle text-center p-3">ĐĂNG KÝ ADMIN</h1>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="feature-box bg-white">
            <div className="feature-box-content">
            {errorMessage}
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
                name="email"
                rules={[{ required: true, message: 'Nhập email' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                type="email"
                placeholder="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Nhập mật khẩu',
                },
                () => ({
                    validator(rule, value) {
                    if (value.length >= 8 ) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Mật khẩu phải hơn 8 kí tự');
                    },
                }),
                ]}
                hasFeedback
            >
                 <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Mật khẩu"
                    />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Nhập lại mật khẩu',
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Mật khẩu không khớp');
                    },
                }),
        ]}
      >
         <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Xác nhận mật khẩu"
        />
      </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Đăng kí
                </Button>
            </Form.Item>
            <span>Lưu ý: mật khẩu phải chứa cả chữ và số.</span>
            </Form>
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
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
