import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState: {
    cnt: 0
  },
  reducers: {
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      const regex = /^[0-9]+$/; // 정규 표현식(regular expression): 문자열을 체크하는 방법
      if(regex.test(action.payload)) {
        // state.cnt = action.payload;
        state.cnt = parseInt(action.payload); // 좀 더 확실하게.
      } else {
        console.log('넘버 아님', action.payload);
      }

      // if(action.type === 'number') {
      //   state.cnt = action.payload;
      // } else {
      //   console.log('넘버 아님');
      // }

      // state.cnt = action.payload;
    },
    // { // 위의 action의 형태
    //   payload: 0,
    //   type: 'number'
    // } 외부에서 'a'이란 값이 들어오면 payload는 'a', 타입은 'string'이 됨
  }
});

export const { changeCnt, addCnt, minusCnt } = detail.actions;

export default detail.reducer;