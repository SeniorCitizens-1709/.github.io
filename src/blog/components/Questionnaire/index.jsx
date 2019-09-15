import React, { Component } from 'react';
import './index.scss'
import data from './data.json'
import Child from './components/child'
// 引入对话框、按钮、卡片、全局提示
import { Modal, Button, Card, message } from 'antd';
class Index extends Component {
    constructor() {
        super();
        this.state = {
            radioLike: "like",//单选框
            checkbox: [false, false, false],//复选框
            textarea: '',//文本域
            visible: false,//对话框
            checkboxTrue: []//喜欢的水果具体名称
        }
        this.copyState = this.state
    }
    handleChange = ({ target }) => {
        if (target.name === "checkbox") {
            const newCheckbox = [...this.state.checkbox]
            newCheckbox[target.value] = target.checked;
            this.setState({
                [target.name]: newCheckbox
            })
        } else {
            this.setState({
                [target.name]: target.value
            })
        }
    }
    // 验证
    veri = () => {
        const { radioLike, checkbox, textarea } = this.state;
        if (radioLike === "nolike" ? false : !checkbox.find(item => item)) return message.warning("请选择你喜欢的水果");
        if (!textarea.trim() || textarea.length < 3) return message.warning("理由不能少于三个字");
        this.showModal();

    }
    // 表单提交事件
    handleSubmit = (event) => {
        event.preventDefault()//取消默认事件
        this.veri();
    }
    // 重置表单事件
    reSetForm = () => {
        this.setState(this.copyState)
    }

    render() {
        const { radioLike, checkbox, textarea, checkboxTrue } = this.state
        const isLike = radioLike === "like" ? true : false;
        // 禁用状态
        const disabled = isLike ? false : true;
        // 文本域部分的问题
        const textitle = isLike ? "吃水果对身体的好处" : "你不喜欢吃水果的原因"
        let isChecked;

        return (
            <>
                <form  >
                    {data.map(item => {
                        // switch 判断要传入的checked值
                        switch (item.type) {
                            case "radio":
                                isChecked = radioLike
                                break;
                            case "checkbox":
                                isChecked = checkbox
                                break;
                            default:
                                break;
                        }
                        return <div key={item.id} className="section-002">
                            <h3>{item.id}、{item.problem}【{item.type === "radio" ? '单选' : "多选"}】</h3>
                            {/* 调用子组件 */}
                            <Child data={item} checked={isChecked} handlechange={this.handleChange} disabled={disabled} />
                        </div>
                    })}
                    {/* 文本域部分 */}
                    <div className="section-002">
                        <h3>{data.length + 1}、{textitle}</h3>
                        <label>
                            <textarea type="textarea" name="textarea" value={textarea} onChange={this.handleChange} cols="40" rows="5"></textarea>
                        </label>

                    </div>
                    {/* 按钮部分 */}
                    <label className="btns">
                        <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                        <Button onClick={this.reSetForm}>重置</Button>
                    </label>
                </form>
                {/* 对话框 */}
                <Modal
                    title="问卷调查结果"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <Card title="你是否喜欢水果" >
                        <p>{isLike ? "喜欢" : "不喜欢"}</p>
                    </Card>
                    {
                        isLike ? <Card title="你喜欢的水果：" >
                            {
                                checkboxTrue.map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })
                            }
                        </Card> : ""
                    }
                    <Card title={textitle} >
                        <p>{textarea}</p>
                    </Card>
                </Modal>
            </>
        );
    }
    // 对话框显示
    showModal = () => {
        this.setState({
            checkboxTrue: []
        })
        for (let i = 0; i < this.state.checkbox.length; i++) {
            if (this.state.checkbox[i]) {
                setTimeout(() => {
                    this.setState({
                        checkboxTrue: [...this.state.checkboxTrue, data[1].labels[i].label]
                    })
                }, 0);
            }
        }
        this.setState({
            visible: true,
        });
    };
    // 点击对话框确定按钮
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };
    // 点击对话框取消按钮
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
}

export default Index;