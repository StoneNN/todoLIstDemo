import React from 'react';
import {connect} from 'dva';
import propTypes from 'prop-types';
import {Input, Icon, Button} from 'antd';
import styles from './Add_C.css';

const Add = ({onAdd,onChange,inputs1})=>{
  console.log('klklkl------',inputs1);
  return(
    <div className={styles.addInput} >
      <Input
        placeholder='请输入比赛名称'
        prefix={<Icon type='user' />}
        value={inputs1.inputValue}
        onChange={onChange}
        className={styles.antdInput}
      >
      </Input>
      <Button type='primary' onClick={onAdd}>
        添加赛事
      </Button>
    </div>
  );
}

Add.propTypes={
  onAdd:propTypes.func.isRequired,
  // inputs1:propTypes.string.isRequired
};

const mapStateToProps = ({inputs})=>{
  return{
    inputs1:inputs,
  }
}

//export default Lists
export default connect(
  mapStateToProps //model inputs赋值给inputs1，同理lists...
 )(Add);

// export default Add;
