import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState:{
    lists:[
      {name:'鸿宏杯桥牌锦标赛',id:1},
      {name:'石家庄桥牌邀请赛',id:2},
      {name:'河北省运动会桥牌团体赛',id:3},
      {name:'石家庄桥协团体赛',id:4},
      {name:'石家庄桥牌个人赛赛',id:5}
    ]
  }
});
console.log('i---------- ',app._store);
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/add-M').default);
app.model(require('./models/list-M').default);
app.model(require('./models/login-M').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
