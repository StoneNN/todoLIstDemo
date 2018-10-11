import React from 'react';
import propTypes from 'prop-types';
import {Table,Popconfirm,Button} from 'antd';
import styles from './List_C.css';

const List = ({onDelete,lists})=>{
  console.log('lists--------',lists);

  const columns=[
    {
      title:'序号',
      dataIndex:'id'
    },
    {
      title:'比赛名称',
      dataIndex:'name'
    },
    {
      title:'操作',
      render:(record)=>{
        console.log('-----record------',record);
        return(
          <Popconfirm
            title='确认删除?'
            okText="确认"
            cancelText="取消"
            onConfirm={()=>onDelete(record.id)}
          >
          <Button>删除</Button>
          </Popconfirm>
        );
      }
    }
  ];
  return(
    <Table
      dataSource={lists} //默认的lists数据
      columns={columns}
      rowKey={record => record.id}
      pagination={{pageSize:6}}
      className={styles.list1}
    ></Table>
  );
};

List.propTypes={
  onDelete:propTypes.func.isRequired,
  lists:propTypes.array.isRequired
};

export default List;
