/**
 * Created by yini on 2016/8/21.
 */
import {combineReducers} from 'redux';
 /*import currentStep from './step.reducer';
import secureQuestions from './secureQuestions.reducer';
import secureCode  from  './secureCode.reducer';
import timeout from './timeout.reducer';
import locks from  './locks.reducers';*/
import crumb from './crumb.reducer';
/*
import showSecureModal from './showSecureModal.reducer';
import shareKeys from './shareKey.reducer';
import customSecure from './customSecure.reducer';
import user from './user.reducer';
import preview from './preview.reducer';
import page from './page.reducer';
import myShareKeys from './myShareKeys';
import sharedKeys from './sharedKeys.reducer';
import lockusers from './lockusers.reducer';
import lockinfo from './lockinfo.reducer';
import lockRecords from './lockRecords.reducer';
import lockUserNum from './lockUserNum.reducer';
import isEditEmail from './isEditEmail.reducer';*/
const Reducer = combineReducers({
  crumb
  /*,
  currentStep,
  secureQuestions,
  secureCode,
  timeout,
  locks,

  showSecureModal,
  shareKeys,
  customSecure,
  user,
  preview,
  page,
  myShareKeys,
  sharedKeys,
  lockusers,
  lockinfo,
  lockRecords,
  lockUserNum,
  isEditEmail*/
});


export  default Reducer;
