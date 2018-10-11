import React from 'react';
import {connect} from 'dva';
import Add from '../components/Add_C';
import List from '../components/List_C';
import styles from './List.css';

const Lists = ({inputs1,lists1,dispatch})=>{
  //添加
  function handleAdd() {
    dispatch({
      type:'lists/add',
      payload:inputs1.inputValue //输出到models/add.js里的inputs.inputValue
    })
    dispatch({
      type:'inputs/change',
      payload:''
    })
  }
  //修改
  function handleChange(e) {
    console.log('-------- input值变化 -------',e.target)
    console.log('-------- input值变化 -------',e.target.value)
    dispatch({
      type:'inputs/change',
      payload:e.target.value
    });
  }
  //删除
  function handleDelete(id) {
    console.log('----- record.id  -----',id);
    dispatch({
      type: 'lists/delete',
      payload: id
    });
  }
  //
  return(
    <div className={styles.boxContainer}>
      <Add
        onAdd={handleAdd}
        onChange={handleChange}
        // input={inputs1.inputValue} // handleChange 已经修改了input标签里的值，此处又做了一次传值
      />
      <br/>
      <p>* * * * * * * * * * * * * * * * * * * * * * * * *</p>
      <h2>待办项列表</h2>
      <br/>
      <List onDelete={handleDelete} lists={lists1} />
    </div>
  );
};


const mapStateToProps = ({inputs,lists})=>{
  console.log('lists-----',lists);
  return{
    inputs1:inputs,
    lists1:lists
  }
}


//export default Lists
//dispatch 是在组件 connect Models以后，通过 props 传入的。
//在 dva 中，connect Model 的组件通过 props 可以访问到 dispatch，可以调用 Model 中的 Reducer 或者 Effects
 export default connect(
   mapStateToProps //model inputs赋值给inputs1，同理lists...
  )(Lists);
