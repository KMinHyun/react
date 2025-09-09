import { createSlice } from "@reduxjs/toolkit";
import { getList, getTest } from "../thunks/listThunk";

// 'list' 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice명
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 0,
    list: null, // null로 하는 이유: list를 jsx에서 출력할 때 list에 아무것도 없을 때 렌더링을 하면 에러가 남.
    // 그래서 null로 두고 데이터가 없을 때 실행이 안 되도록 만듦.
    loading: false
  },
  reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) {
      // 파라미터의 state는 initialstate의 영역을 뜻한다.
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      // state : 'initialState'의 정보를 담고 있는 파라미터
      // action : 외부에서 전달된 값을 담는 파라미터
      // ㄴ > action.payload : 전달된 값에 접근할 수 있는 프로퍼티
      state.cnt = action.payload;
      // 외부로부터 전달받은 값을 state로 갱신할 수 있음.
    },
    clearList(state) {
      state.list = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getList.pending, (state) => {
      //   // `getList` Thunk의 처리가 대기중일 때의 처리를 작성
      //   state.loading = true;
      // })
      .addCase(getList.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공일 때의 처리를 작성
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getTest.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공일 때의 처리를 작성
        state.list = action.payload;
        state.loading = false;
      })
      // .addCase(getList.rejected, (state) => {
      //   // `getList` Thunk의 처리가 실패일 때의 처리를 작성
      //   state.loading = false;
      // });
      .addMatcher(
        action => { action.type.endsWith('/pending')}, // action을 파라미터로 받아와서 pending이 포함돼있으면 true, 아니면 false로 처리
        state => {
          state.loading = true;
        }
      )
      // ㄴ원래라면 Thunk의 한 객체마다 addcase를 pending, fulfilled, rejected 각각 작성해줘야 하는데
      // 보통 fulfilled의 경우는 처리가 다 달라서 따로 해주지만 pending과 rejected의 경우는 거의 비슷하다.
      // 그래서 묶어서 공통된 부분을 처리하는 방식으로 addMatcher를 사용한다.
      .addMatcher(
        action => { action.type.endsWith('/rejected')},
        state => {
          state.loading = false;
        }
      )
  }
});

// 정의한 actions 내보내기
export const {addCnt, changeCnt, minusCnt, clearList} = list.actions;

// reducer 내보내기
export default list.reducer;