/**
 * Created by yini on 2016/8/20.
 */
import React,{Component} from 'react';
/*导入组件*/
import NavigationBar from './navigationBar'
import Crumb from './breadCrumb';
import SideMenu from './sideBar'
import Footer   from './footer'
import 'antd/dist/antd.css';
/*导入样式*/
import './index.css';
class Home extends Component{
  render() {
    const {
      addCrumb,
      clearCrumb,
      popCrumb,
      spliceCrumb,
      rebuildCrumb,
      /*showSecureModal,
      hideSecureModal,
      getSecureQuestionsSucc,
      verifySecureQuestionSucc,*/
    }=this.props.action;
    return(
      <div>
        <NavigationBar/>
        <div className="home-content">
          <Crumb crumb={this.props.crumb} addCrumb={addCrumb} clearCrumb={clearCrumb} popCrumb={popCrumb}
               spliceCrumb={spliceCrumb} rebuildCrumb={rebuildCrumb}/>
          <div className="home-content-container clearfix">
            <div className="sider">
             <SideMenu
               addCrumb={addCrumb}
                crumb={this.props.crumb} rebuildCrumb={rebuildCrumb}/>
            </div>
            <div className="content">
              {this.props.children}
            </div>
          </div>
      </div>
      <Footer/>
      </div>
    )
  }
}
export default Home
