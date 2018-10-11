import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Button} from 'antd';
import { routerRedux } from 'dva/router';
import NormalLoginForm from '../components/Login_C';


class InBtn extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }
  inAction(){
    console.log('触发InBtn -------');
    this.props.dispatch(routerRedux.push({
      pathname:'List'
    }))
  }

  render(){
    return(
      <div className={styles.inButton}>
        <Button type="primary" onClick={this.inAction.bind(this)}>进入</Button>
        <NormalLoginForm />
      </div>

    );
  }
}

InBtn.propTypes = {
};

export default connect()(InBtn);
