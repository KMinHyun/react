import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { addCnt, minusCnt } from '../store/slices/list.js';

function List() {
  // State에 접근하는 방법
  const cnt = useSelector(state => state.list.cnt);
  // store에 state를 불러오기 때문에 그 안의 slice에 접근해줘야 함.

  // action 호출 방법 dispatch 이용
  const dispatch = useDispatch();

  return (
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default List;