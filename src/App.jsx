import { useState } from 'react';
import './App.css'; // 외부 css를 불러올 때 같은 폴더 위치에 같은 이름으로.

function App() {
  // -------자바스크립트 영역------------//
  const title = '제목';

  const titleStyle = {
    color: 'blue',
    fontSize: '3rem'
  }

  const [count, setCount] = useState(0); // state 만드는 법.

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  } // jsx에서 함수 때문에 길어질 경우 js영역으로 빼서 처리 가능.
  
  // const decrementCount = () => {
  //   setCount((prev) => prev - 1);
  // }
  const decrementCount = () => {
    setCount((prev) => {
      if(prev > 0) {
        return prev -1;
      } else {
        return 0;
      }
    });
  }

  const [account, setAccount] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    age: 20,
    gender: 'Man'
  });

  const addAge = () => {
    const copy = {...userInfo}; // <= 참조형 데이터 타입이라 주소값을 다르게 해줘야 함.
    copy.age += 1;
    setUserInfo(copy);
  }
  // 기존 State !== 새 State 이럴 때만 리렌더링이 일어남

  return (
  // ------------jsx 영역----------------//
    <>
      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
      <button type='button' onClick={addAge}>나이 증가</button>

      <br />
      <br />
      <input type="text" value={account} onChange={(e) => {setAccount(e.target.value)}}/>
      {/* value={account}는 초기값이 있을 때 필요 */}
      <p>{account}</p>
      <p>{count}</p>
      {/* <button type='button' onClick={() => {setCount((prev) => prev + 1)}}>+</button> */}
      <button type='button' onClick={incrementCount}>+</button>
      <button type='button' onClick={decrementCount}>-</button>

      <h1 className="title" style={{color: 'red', fontSize: '3rem'}}>{title}</h1>
      <h1 style={titleStyle}>{title}</h1>
    </>
  );
}

export default App;
