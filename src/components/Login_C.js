

import React from 'react';
import {connect} from 'dva';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import styles from './Login_C.css';


const FormItem = Form.Item;

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // 账号密码错误弹窗
  showModal(){
    console.log('显示弹窗。。。。。。');
    this.props.dispatch({
      type:'loginModel/showModal'
    });
  }

   handleOk(e){
    console.log('选择确认-----',e);
    this.props.dispatch({
      type:'loginModel/handleOk'
    });
  }

   handleCancel(e){
    console.log('选择取消-----',e);
    this.props.dispatch({
      type:'loginModel/handleCancel'
    });
  }

  //登录操作
  handleSubmit = (e) => {
    console.log('----------========== login =====----')
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('--- value判断 ----',values,'???',err);
      if (!err) {
        console.log('Received values of form: ', values);
          this.props.dispatch({
            type:'loginModel/login',
            payload:{name:values.userName, pwd:values.password}
          });
        } else {
          console.log('请填写完整......');
          this.showModal();
        }

    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log('===== 状态 =====',this.props);
    return (
      <div className={styles.normal1}>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的账号' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className={styles.login_form_remember}>记住我</Checkbox>
          )}
          <a className={styles.login_form_forgot} href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            登录
          </Button>
          <a href="">注册!</a>
        </FormItem>
      </Form>
      {/* 错误弹窗 */}
      <div>
            <Modal
              title="提示"
              visible={this.props.loginForm1.visible}
              onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}
            >
              <p>账号或者密码错误，请重新输入...</p>
            </Modal>
          </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
};

const NormalLoginForm = Form.create()(LoginForm);

//connect
//connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch

const mapStateToProps =({loginModel}) =>{

  console.log('----- loginModel ------',loginModel)
  return{loginForm1:loginModel}
}
export default connect(mapStateToProps)(NormalLoginForm);








