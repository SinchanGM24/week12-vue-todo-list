import { ref } from "vue";
import { defineStore } from "pinia";

export interface Todo {
  id: number;
  title: string;
  detail: string;
  deadline: string;
  createdAt: string;
  completed: boolean;
  completedAt?: string;
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);
  const nextId = ref(1);

  function addTodo(title: string, detail: string, deadline: string) {
    const newTodo: Todo = {
      id: nextId.value++,
      title,
      detail,
      deadline,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    todos.value.push(newTodo);
  }

  function deleteTodo(id: number) {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  }

  function completeTodo(id: number) {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
      todo.completedAt = new Date().toISOString();
    }
  }

  function getActiveTodos() {
    return todos.value.filter((todo) => !todo.completed);
  }

  function getCompletedTodos() {
    return todos.value.filter((todo) => todo.completed);
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
    getActiveTodos,
    getCompletedTodos,
  };
});
