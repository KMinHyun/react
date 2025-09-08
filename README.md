<!-- Router -->
1. React Router 설치
npm install react-router-dom

2. Router 컴포넌트 생성 /src/routes/Router.jsx - 경로는 개발자 취향

3. main.jsx에 App 컴포넌트 대신 Router 컴포넌트로 변경(main을 안 건드렸단 전제)

4. Router로 관리하고 싶은 컴포넌트를 만든다.

5. Router 컴포넌트의 Router 객체 정의를 HTML 구조에 맞게 설정.

<!-- Redux  -->
<!-- 상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->
1. Redux 설치
npm install @reduxjs/toolkit react-redux

2. Redux Store 생성
경로 예시 src/store/store.js

3. Slices 생성
경로 예시 src/store/slices/** | src/store/modules/**

4. 생성한 slices를 Store에 추가

5. main.jsx에 React Redux <provider>컴포넌트를 추가 (StrictMode를 제외한 
최상위 컴포넌트로 추가해줘야 함)

6. 사용