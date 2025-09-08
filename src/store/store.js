// slice를 store에 등록해주는 과정

import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/list.js';
import detailReducer from './slices/detail.js';
// 관습적으로 슬라이스명에 Reducer를 붙임

// Redux Store 생성 및 설정
export default configureStore({
  reducer: {
    // slice란 최소 단위 파일을 불러오는 곳
    list: listReducer,
    detail: detailReducer
  }
});