import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 변수명 - 서버에서 가져오는 처리면 get에다 덧붙임.
export const getList = createAsyncThunk(
  'list/getList', // thunk 고유명 작성하는 법 = Slice명/actionType
  async () => {
    const url = 'https://picsum.photos/v2/list?page=1&limit=10';

    // AJAX 처리, 서버의 특정 API 호출
    const response = await axios.get(url);

    // API 응답을 반환하는 처리, thunk가 'fulfilled' 액션의 payload로 전달함
    return response.data;
  }
); // 비동기 처리할 내용. 내용은 동기 처리를 해줘야 하니 async로 처리.

export const getTest = createAsyncThunk(
  'list/getTest',
  async () => {
    const url = 'https://picsum.photos/v2/list?page=5&limit=1';

    const response = await axios.get(url);

    return response.data;
  }
);
