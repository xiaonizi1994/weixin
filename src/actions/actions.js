/**
 * Created by yini on 2016/8/21.
 */
import * as ACTIONS from '../constants';
export function addCrumb(crumb) {
  return {
    type: ACTIONS.ADDCURMB,
    crumb
  }
}


export function popCrumb() {
  return {
    type: ACTIONS.POPCURMB
  }
}

export function spliceCrumb(index) {
  return {
    type: ACTIONS.SPLICECURMB,
    index
  }
}

export function clearCrumb() {
  return {
    type: ACTIONS.CLEARCERUMB
  }
}

export function rebuildCrumb(crumb) {
  return {
    type: ACTIONS.REBUILDCRUMB,
    crumb
  }
}
