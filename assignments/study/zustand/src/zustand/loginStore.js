import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useLoginStore = create(
  persist(
    immer((set, get) => ({
      isLoggedIn: false,

      functions: {
        login: () => {
          const prevState = get();
          set({ isLoggedIn: !prevState.isLoggedIn });
        },
        logout: () => set({ isLoggedIn: false }),
      },
    })),
    {
      name: "login",
      storage: createJSONStorage(() => localStorage),
      // 이거 안 쓰면 기본적으로 로컬스토리지래요
    }
  )
);

// set도 함수다, setState인가?
// zustand가 immer를 1뎁스까지만 알아서 해준다;
// 2뎁스부턴 니가 알아서 해라 라고 해야해서 immer를 여기서 붙여야한다;;

// 기본적으로 async 함수를 지원한다
// 비동기 처리를 위해
// produce((두가지 인자를 받는다))
// 원본, 그리고 레시피 수정할 함수
// produce(state, () => )
// 근데 두번째 함수에서 draft를 쓸 수 있다
// produce(state, ({draft}) =>  {
// })
// zustand는 펄시스트도 기본적으로 있네
// immer 감싸는 법
//const useLoginStore = create(
//immer((set) => ({

// async를 써야할때 get으로 가져올 수도 있겠다
// 또는 귀찮은 작업을 하거나 코드가 많으면 저렇게 미리 get으로 prev값을 가져와서 작업한 뒤에 어주는 게 편하겠네용!

// 리렌더링을 막으려고 functions 를 감쌌다 (승우튜터님의 아이디어)

export default useLoginStore;
