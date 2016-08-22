/**
 * Created by yini on 2016/8/21.
 */
import {hashHistory} from 'react-router';
export  default function goto(path) {
  if (path) {
    hashHistory.push(path);
  } else {
    throw new Error('path cannot be null!');
  }
}
