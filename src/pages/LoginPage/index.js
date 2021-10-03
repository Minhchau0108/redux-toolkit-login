import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { login, userSelector } from "../../features/auth/authSlice";
import { StyledLoginPage, StyledForm } from "./index.styled";
import background from "../../images/background.png";
import { useScreenSize } from "../../hooks/useScreenSize";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, errorMessage } = useSelector(userSelector);
  const [form] = Form.useForm();
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);
  if (isAuthenticated) return <Redirect to='/' />;

  const onFinish = (data) => {
    dispatch(login(data));
  };

  return (
    <StyledLoginPage>
      {!isMobile && (
        <div className='image'>
          <img src={background} alt='' />
        </div>
      )}

      <StyledForm>
        <h1>Test React System</h1>
        <Form
          name='normal_login'
          className='login-form'
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            rules={[
              {
                type: "email",
                message: "The input is not valid email!",
              },
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className='site-form-item-icon' />}
              placeholder='Email'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <div to='' className='login-form-forgot'>
              Forgot password
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </StyledForm>
    </StyledLoginPage>
  );
};

export default LoginPage;
