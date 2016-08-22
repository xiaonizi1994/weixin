/**
 * Created by yini on 2016/8/18.
 */
import React,{Component} from 'react'
import {Route,Router,hashHistory} from 'react-router';
import App from '../components/Main'
/*导入Home组件*/
import Home from '../container/home/home.container';
import ActiveManage from '../container/content/activeManage.container'
import StuManage from '../container/content/stuManage.container';

import MyManage from '../container/content/activeManage.detail/myManage.container';

import ResetPsw from '../container/content/stuManage.detail/resetPsw.container';
import StuInfo from  '../container/content/stuManage.detail/stuInfo.container';
import UnbindReq from '../container/content/stuManage.detail/unbindReq.container';

import AccessManage from '../container/content/accessManage.container';
import NoticePublic from '../container/content/noticePublic.container';
import OperateLog from '../container/content/operateLog.container';

class RouterApp extends Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>*/}
          <Route path='/home' component={Home}>
            <Route path='actManage' component={ActiveManage}>
             <Route path='mymanage' component={MyManage}/>
            </Route>
             {/*
          <Route path='stuManage' component={StuManage}>
            <Route path='reset' component={ResetPsw}/>
            <Route path='stuinfo' component={StuInfo}/>
            <Route path='unbind' component={UnbindReq}/>
          </Route>

          <Route path='accManage' component={AccessManage}/>
          <Route path='notPublic' component={NoticePublic}/>
          <Route path='opeLog' component={OperateLog}/>*/}

          </Route>
        </Route>
      </Router>
    )
  }
}
export default RouterApp;
