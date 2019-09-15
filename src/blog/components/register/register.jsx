import React, { Component } from "react";
import "./register.scss";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { message } from "antd";
// 采用antd的message进行提示信息
import { Modal } from "antd";
// 采用antd的提示框
class Login extends Component {
  constructor() {
    super();
    // 设置默认值
    this.state = {
      user: "", //用户名
      pwd: "", //密码
      repwd: "", //确认密码
      email: "", //邮箱
      check: false, //协议
      visible: false
    };
  }
  showModal = event => {
    // antd里的显示弹框的函数
    event.preventDefault();
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    // 点击弹窗的ok将弹窗隐藏的函数
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    // 点击弹窗的关闭将弹窗隐藏的函数
    this.setState({
      visible: false
    });
  };
  registerChange = ({ target }) => {
    // es6 的写法，采用三元表达式，将你当前的name项对应的值改为你当前输入的value的值，
    // 并且判断如果是checkbox的话就进行专门的true和false的赋值，否则就向当前的input框赋value值
    this.setState({
      [target.name]: target.name === "check" ? target.checked : target.value
    });
  };
  // 验证方法
  regif = () => {
    const { user, pwd, repwd, email, check } = this.state;
    // 将所有值从state里取出
    if (
      user.trim() === "" ||
      pwd.trim() === "" ||
      repwd.trim() === "" ||
      email.trim() === ""
      // 判断除了CheckBox以外所有的值都不能是空
    ) {
      message.error("不能有空项");
    } else if (!user.trim() || user.length < 6) {
      // 判断用户名不能为空或者长度不能小于6
      message.error("用户名不能为空且长度不小于6位");
      return false;
    } else if (!pwd.trim() || !/^(\w){6,20}$/.test(pwd)) {
      // 判断密码不能为空并且采用正则做深一层的验证
      message.error("密码不能为空并且必须是6-20个字母、数字、下划线");

      return false;
    } else if (pwd !== repwd) {
      // 判断密码和确认密码必须一致
      message.error("两次密码不一致");
      return false;
    } else if (!email.trim()) {
      // 判断邮箱不能为空
      message.error("邮箱不能为空");
      return false;
    } else if (
      !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)
      // 采用正则匹配邮箱格式
    ) {
      message.error("邮箱格式不正确，请检查");

      return false;
    } else if (!check) {
      // 判断是否选中，选中为true 取反则进不来此判断，没选中为false取反为true则进来此判断
      message.error("请同意协议");
    } else {
      return true;
      // 都满足返回true
    }
  };
  // 注册函数
  onRegister = () => {
    if (this.regif()) {
      let obj = {};
      obj.user = this.state.user;
      obj.pwd = this.state.pwd;
      sessionStorage.setItem("user", JSON.stringify(obj));
      message.success("注册成功");
      this.props.getSonData("Login");
      // 验证函数返回true则注册成功
    }
  };
  render() {
    const { user, pwd, repwd, email, check } = this.state;
    // 将所有值从state里取出
    return (
      <div className="register-box-bs-004">
        <Form className="login-form">
          <div style={{ height: "30px", textAlign: "center" }}>注册页</div>
          <Form.Item>
            <Input
              autoComplete="off"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
              value={user}
              name="user"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
              onChange={this.registerChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
              value={pwd}
              name="pwd"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
              onChange={this.registerChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="确认密码"
              value={repwd}
              name="repwd"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
              onChange={this.registerChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="email"
              placeholder="邮箱"
              value={email}
              autoComplete="off"
              name="email"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // value的值为从state里拿到的动态进行改变的值
              onChange={this.registerChange}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox
              checked={check}
              value="checkbox"
              name="check"
              // 绑定必要的name和onchange函数，通过name获取当前项
              // checked的值为从state里拿到的动态进行改变的true和false
              onChange={this.registerChange}
            >
              我已阅读并同意该 <a href="###" onClick={this.showModal}>协议</a>
              {/* 点击事件，弹出antd的Model弹窗 */}
            </Checkbox>
            <div className="register-btnbox-bs-004">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.onRegister}
              // 触发注册函数
              >
                立即注册
              </Button>
              <Button
                onClick={() => {
                  this.props.getSonData("Login");
                }}
                // 调用父组件传递的函数更改默认显示的值实现切换效果
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ background: "red" }}
              >
                去登录
              </Button>
            </div>
          </Form.Item>
        </Form>
        <Modal
          // antd的Model弹窗
          title="协议内容"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>欢迎您{this.state.user.length >= 6 ? this.state.user : ""}...</p>
          <p>我们其实也没啥协议...</p>
          <p>您就看着玩玩关了就行...</p>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Login);
