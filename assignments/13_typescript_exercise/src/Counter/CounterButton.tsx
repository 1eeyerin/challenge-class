// import React가 내장되어있어서 굳이 임폴트 안해줘도 됨
const CounterButton = ({
  children,
  onClick: handleClick,
}: React.PropsWithChildren<{ onClick: () => void }>) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default CounterButton;
