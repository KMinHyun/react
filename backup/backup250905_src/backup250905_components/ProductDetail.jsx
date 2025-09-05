import { useEffect, useState } from 'react';
import './ProductDetail.css';

function ProductDetail(props) {
  // 파라미터에 props를 받음
  const {product, setModalFlag} = props;
  // 구조 분할로 destructuring 문법 사용
  // 일일이 props.product.title 로 하면 번거롭기 때문에 변수로 지정
  const [count, setCount] = useState(0);

  // Lifecycle Hooks
  // mount 단계에서 실행하고 싶을 때 최초 1회만 실행.
  useEffect(() => {
    console.log('마운트');
  }, []); // import 꼭 해줘야 함

  // unmount 전에 실행하고 싶을 때 : Clean up Function 작성
  useEffect(() => {
    console.log('Mount!!');

    // Clean up Function 할 땐 return 함수
    return () => {
      console.log('UnMount');
    }
  }, []);

  // state가 변할 때마다 실행, mount 후 최초 1회 실행
  useEffect(() => {
    console.log('test');
  }, [count]);

  return (
    <>
      <div className="detail-modal" onClick={() => {setModalFlag(false)}}>
      {/* <div className="detail-modal"> */}
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <p className="detail-title">{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-price">{product.price}</p>
          <p>{count}</p>
          {/* <button type="button" onClick={() => { setCount((prev) => prev + 1) }}>+</button> */}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;