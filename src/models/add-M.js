export default{

  namespace:'inputs',

  state:{
    inputValue:''
  },

  //Reducer 则是描述如何改变数据
  //Reducer（也称为 reducing function）函数接受两个参数：之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果。该函数把一个集合归并成一个单值。
  reducers:{
    change(state,{payload:value}){
      console.log('---- change ----',value);
      return {inputValue:value};
    }
  },
};
