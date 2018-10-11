import {routerRedux} from 'dva/router';
import {loginService} from '../services/service';


export default {
  namespace: 'loginModel',
  state: {
    visible: false
  },
  effects:{
    *login({payload},{call,put}){
      console.log('effects:payload:  -----',payload);
      let loginState = yield call(loginService,payload);
      console.log('loginState.data.success：',loginState.data.success)
      if (loginState.data.success === true) {
        yield put(
          routerRedux.push({
             pathname:'List'
          })
        )
      } else {
        console.log('===== ShowModal =====');
        yield put({type:'showModal'});
      }
    }
  },
  reducers: {
    showModal(state) {
      console.log('------- loginModel/showModal -------');

      console.log('-=-=-=-', { ...state });
      return { ...state, visible: true }
    },
    handleOk({ e, state }) {
      console.log('------- loginModel/handleOk -------');
      return { ...state, visible: false }
    },
    handleCancel(state) {
      console.log('------- loginModel/handleCancel -------');
      return { ...state, visible: false }
    }
  }
}
