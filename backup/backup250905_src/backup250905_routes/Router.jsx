import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../components/ProductList.jsx";
import TabUi from "../components/TabUi.jsx"; 
import App from "../App.jsx";

// 라우터를 정의하는 Router객체 인스턴스를 생성하는 함수
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
        {
    path: '/', // 라우팅 경로를 설정하는 요소(프로퍼티)
    element: <ProductList /> // 렌더링할 컴포넌트를 지정하는 속성
  },
  {
    path: '/test',
    element: <TabUi />
  }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} />
} // 사용하는 키는 router로 고정

export default Router;