// import React가 내장되어있어서 굳이 임폴트 안해줘도 됨
// 객체는 extends / type이라면. .. . . . & << end. . . .맞습니다요 인터섹션 타입..
interface CounterButtonProps {
  onClick: () => void;
}

const CounterButton = ({
  children,
  onClick: handleClick,
}: React.PropsWithChildren<CounterButtonProps>) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default CounterButton;
