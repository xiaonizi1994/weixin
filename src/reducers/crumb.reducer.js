/**
 * Created by yini on 2016/8/21.
 */
import {ADDCURMB, POPCURMB, SPLICECURMB, REBUILDCRUMB, CLEARCERUMB} from '../constants';

const initialState = [
  {
    name: '首页',
    path: '/actManage/mymanage'
  },
  {
    name: '活动管理',
    path: '/actManage/mymanage'
  },
  {
    name: '我管理的活动',
    path:'/actManage/mymanage'
  }
];

export default function crumb(state = initialState, action) {
  switch (action.type) {
    case ADDCURMB:
      return [...state, action.crumb];
    case POPCURMB:
      return [...state.slice(0, state.length - 1)];
    case SPLICECURMB:
      return [...state.slice(0, action.index)];
    case REBUILDCRUMB:
      return [initialState[0], action.crumb];
    case CLEARCERUMB:
      return [...initialState[0]];
    default:
      return state;
  }
}
