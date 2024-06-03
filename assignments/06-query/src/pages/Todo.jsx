import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const Todo = () => {
  const ref = useRef(null);

  // mutateAsync는 비동기 처리를 위한 함수이다
  const { mutate: addTodo, isPending } = useMutation({
    mutationFn: (todo) => axios.post(ENDPOINT, { todo }),
  });

  const handleClickButton = () => {
    // mutate 함수에서 바로 onSuccess 함수를 사용할 수 있다
    addTodo(ref.current.value, { onSuccess: (result) => console.log(result) });
  };

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClickButton} disabled={isPending}>
        추가
      </button>
    </>
  );
};

export default Todo;
