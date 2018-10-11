
import request from '../utils/request';

function params (obj){
   let result =[];
    for(let index in obj){
       result.push(index+'='+obj[index])
    }
    return result.join('&')
}


export async function loginService(userinfo){
  console.log("输入的账号密码：",userinfo);
  const feedBack = await request(
    '/api/login',
    {
      method:'post',
      headers:{
        　　　　 'Content-Type': 'application/x-www-form-urlencoded',
      　　　　 },
      body:params(userinfo)
    }
  )
    console.log('params(userinfo) ------',params(userinfo))
    console.log('feedBack',feedBack);
    return feedBack;
}
