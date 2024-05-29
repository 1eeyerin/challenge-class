import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

// 만든다
function App() {
  return (
    <>
      <Display />
      <Button />
    </>
  );
}

export default App;

// 파일 분리하는 이유
// 반복되는 컴포넌트를 재사용하기 위해서
// 컴포넌트 코드가 많아지면 가독성이 떨어져서 응집성을 높이려고
// 불필요한 리렌더링을 막으려고
