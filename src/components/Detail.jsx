import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { changeCnt, addCnt, minusCnt } from '../store/slices/detail.js';
import { useState } from 'react';

function Detail() {
  const cnt = useSelector(state => state.detail.cnt);

  const dispatch = useDispatch();
  // react에서 useDispatch를 통해 Redux한테 요청하면 Redux에서 반환을 해줌.

  const [inputNum, setInputNum] = useState(0); // input의 값을 저장

  // const convertAndSetNumber = (val) => {
  //   if(!isNaN(val)) {
  //     setInputNum(parseInt(val)); // parseInt 내가 받은 값을 넘버형으로 바꿔줌
  //   } else {
  //     console.error('숫자 아님');
  //   }
  // }

  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.value)) {
      setInputNum(parseInt(e.target.value));
    } else {
      console.error('숫자 아님');
    }
  }

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      {/* <input type="number" onChange={(e) => { setInputNum(e.target.value) }}/> */}
      <input type="number" onChange={convertAndSetNumber}/>
      {/* input의 value는 스트링밖에 저장이 안 됨 */}
      <button type="button" onClick={() => { dispatch(changeCnt(inputNum)) }}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;