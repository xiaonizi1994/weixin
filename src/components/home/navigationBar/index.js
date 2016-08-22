/**
 * Created by yini on 2016/8/20.
 */
import React,{Component} from 'react';
import './index.css'
class NavigationBar extends Component{
  render(){
    return(
      <div className="auth-header">
        <div className="auth-header-wrapper">
          <div className="logo">
           <div>haha</div>
          </div>
          <div className="right">
           {/* <DropDownMenu rebuildCrumb={rebuildCrumb} clearCrumb={clearCrumb} mobile={this.props.mobile}/>*/}
          </div>
        </div>
      </div>
    )
  }
}
export default NavigationBar
