import React, { Component } from "react";
import "./login.scss";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import { message } from "antd";
class Login extends Component {
  constructor() {
    super();
    let user = JSON.parse(sessionStorage.getItem("user")) || ""; //拿到缓存的值
    this.state = {
      // 设置默认值
      user: user.user, //默认拿到的user值
      pwd: "", //默认拿到的pwd值
      userinfo: user.user,
      pwdinfo: user.pwd
    };
  }
  loginChange = ({ target }) => {
    this.setState({
      // es6 的写法，采用三元表达式，将你当前的name项对应的值改为你当前输入的value的值，
      [target.name]: target.value
    });
    // console.log(target.name);
    // console.log(target.value);
  };
  // 验证函数
  yanzheng = () => {
    const { userinfo, pwdinfo } = this.state;
    if (this.state.user !== userinfo) {
      message.error("用户名错误");
      return false;
    } else if (this.state.pwd !== pwdinfo) {
      message.error("密码错误");
      return false;
    } else {
      return true;
    }
    // 从state里拿到默认值
  };
  // 登录函数
  login = () => {
    if (this.yanzheng()) {
      // 调用验证函数
      message.success("登录成功");
      this.props.getSonData("ReactBase");
    }
  };
  componentDidMount() {
    if (!sessionStorage.getItem("user")) {
      message.error("您并没有注册记录，请返回注册");
      setTimeout(() => {
        this.props.getSonData("Register");
      }, 1500);

      return false;
    }
  }
  render() {
    const { user, pwd } = this.state;
    // 从state里将默认值取出
    return (
      <div className="loginbox-bs-004">
        <Form className="login-form">
          <div
            style={{
              height: "30px",
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            登录页
          </div>

          <Form.Item>
            <Input
              onChange={this.loginChange}
              autoComplete="off"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
              value={user}
              name="user"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
            />
          </Form.Item>
          <Form.Item>
            <Input
              onChange={this.loginChange}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
              name="pwd"
              value={pwd}
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
            />
          </Form.Item>

          <Form.Item>
            <div className="login-btnbox-bs-004">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.login}
                // 调用登录函数
              >
                登录
              </Button>
              <Button
                onClick={() => {
                  this.props.getSonData("Register");
                }}
                // 调用父组件传递的函数更改默认显示的值实现切换效果
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ background: "red" }}
              >
                去注册
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
