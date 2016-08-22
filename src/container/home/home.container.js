/**
 * Created by yini on 2016/8/19.
 */
import React,{Component} from 'react';
import Home from '../../components/home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  clearCrumb,
  addCrumb,
  popCrumb,
  spliceCrumb,
  rebuildCrumb,
 /* clearLocks,
  clearSecureCode,
  showSecureModal,
  hideSecureModal,
  getSecureQuestionsSucc,
  verifySecureQuestionSucc,
  getUserInfoSucc,
  clearUserInfo*/
} from '../../actions/actions';
function mapStateToProps(state) {
  return {
    crumb: state.crumb,
   /* showSecureModal: state.showSecureModal,
    secureQuestions: state.secureQuestions,
    secureCode: state.secureCode,
    user: state.user*/
  }
}
function mapDispatchToProps(dispatch) {
  var action = {
    clearCrumb,
    addCrumb,
    popCrumb,
    spliceCrumb,
    rebuildCrumb,
 /*   clearLocks,
    clearSecureCode,
    showSecureModal,
    hideSecureModal,
    getSecureQuestionsSucc,
    verifySecureQuestionSucc,
    getUserInfoSucc,
    clearUserInfo*/
  };

  var actionMap = {
    action: bindActionCreators(action, dispatch)
  };

  return actionMap;
}



export  default connect(mapStateToProps, mapDispatchToProps)(Home);
module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
