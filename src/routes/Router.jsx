import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import List from "../components/List.jsx";
import Detail from "../components/Detail.jsx";
import NotFound from "../components/errors/NotFound.jsx";

const router = createBrowserRouter([
  // 라우터 정의 = 어떤 path로 할건지 정의해주면 됨
  {
    // element 속성 : 해당 경로로 이동할 때 렌더링할 컴포넌트 지정
      // 해당 경로는 path로 설정한 걸 말함
    element: <App />,
    // 최상위는 path 설정을 안 해줌
    // 어떤 경로든 App을 통해야 하기 때문
    children: [ // children 속성 : <Outlet>에 출력할 자식 컴포넌트를 지정함
      { 
        path: '/',
        // 컴포넌트 외부에서 프로그래밍 방식으로 페이지 이동하고 싶을 때 redirect
        loader: async () => {
          return redirect('/list');
        }
      },
      {
        path: '/list',
        element: <List />
      },
      {
        path: '/detail',
        element: <Detail/>
      },
      {
        path: '*', // *은 전부란 뜻. 여기선 만든 컴포넌트 외 없는 경로 전부.
        element: <NotFound />
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} />
  // RouterProvider의 Props로 router를 키로 사용.
  // {}안에는 위의 선언한 router를 받은 것.
}

export default Router;