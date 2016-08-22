/**
 * Created by yini on 2016/8/20.
 */
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import goto from  '../../../library/goto';
const SubMenu = Menu.SubMenu;

class SideMenu extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.state = {
      current: '/home/actManage'
    };
   // this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterPath = this.filterPath.bind(this);
  }

  filterPath(path) {
    switch (path) {
      case '/home/actManage':
        return '活动管理';
      case '/home/stuManage':
        return '学生管理';
      case '/home/accManage':
        return '权限管理';
      case '/home/notPublic':
        return '发布通知';
      case '/home/opeLog':
        return '操作日志';
      case '/home/actManage/mymanage':
        return '我管理的活动';
      case '/home/stuManage/stuinfo':
        return '学生信息管理';
      case '/home/stuManage/reset':
        return '重置学生密码';
      case '/home/stuManage/unbind':
        return '解绑申请单';
      default:
        return '';
    }
  }
  handleClick(e) {
    const {rebuildCrumb, secureCode, addCrumb}=this.props;
    if(e.key.match(/\/home\/actManage\/{1}\w{1,}/)){
      rebuildCrumb({
          name: '活动管理',
          path: '/home/actManage/myManage'
        });
        addCrumb({
          name: this.filterPath(e.key),
          path: e.key
        })
      }
    else if(e.key.match(/\/home\/stuManage\/{1}\w{1,}/)){
      rebuildCrumb({
        name: '学生管理',
        path: '/home/stuManage'
      });
      addCrumb({
        name: this.filterPath(e.key),
        path: e.key
      })
    } else {
        rebuildCrumb({
          name: this.filterPath(e.key),
          path: e.key
        });
      }
      goto(e.key);

  }

  render() {
    return (
      <Menu onClick={this.handleClick}
            style={{width: 200}}
            current={this.state.current}
            defaultOpenKeys={['/home/actManage']}
            mode="inline">
        <SubMenu key="/home/actManage" title={<span><Icon type="lock"/>
          <span>活动管理</span></span>}>
          <Menu.Item key="/home/actManage/mymanage">我管理的活动</Menu.Item>
        </SubMenu>
        <SubMenu key="/home/stuManage" title={<span><Icon type="lock"/>
          <span>学生管理</span></span>}>
          <Menu.Item key="/home/stuManage/stuinfo">学生信息管理</Menu.Item>
          <Menu.Item key="/home/stuManage/reset">重置学生密码</Menu.Item>

          <Menu.Item key="/home/stuManage/unbind">解绑申请单</Menu.Item>
        </SubMenu>
        <Menu.Item key="/home/accManage"><Icon type="share-alt"/>权限管理</Menu.Item>
        <Menu.Item key="/home/notPublic"><Icon type="user"/>发布通知</Menu.Item>
        <Menu.Item key="/home/opeLog"><Icon type="line-chart"/>操作日志</Menu.Item>
      </Menu>
    );
  }
}
export default SideMenu;
