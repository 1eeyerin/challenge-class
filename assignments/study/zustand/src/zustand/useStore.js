import { create } from "zustand";

//객체를 반환해야한다
const useStore = create((set, get) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
  getCompletedTodos: () => get().todos.filter((todo) => todo.completed),
  getActiveTodos: () => get().todos.filter((todo) => !todo.completed),
}));

export default useStore;
