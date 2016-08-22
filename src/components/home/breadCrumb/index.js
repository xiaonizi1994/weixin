/**
 * Created by yini on 2016/8/20.
 */

import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router';

import './index.css'
class Crumb extends Component {
  render() {
    const crumb = this.props.crumb.map((crumb, index)=> {
      return (
        <Breadcrumb.Item key={index}>
          <Link
            onClick={()=>{this.props.spliceCrumb(index+1)}}
            to={crumb.path}>
            {crumb.name}
          </Link>
        </Breadcrumb.Item>
      );
    });
    return (
      <Breadcrumb>
        {crumb}
      </Breadcrumb>
    )
  }
}

export  default  Crumb;
