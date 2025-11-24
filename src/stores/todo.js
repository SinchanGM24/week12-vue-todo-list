import { ref } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([]);
  const nextId = ref(1);

  function addTodo(title, detail, deadline) {
    const newTodo = {
      id: nextId.value++,
      title,
      detail,
      deadline,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    todos.value.push(newTodo);
  }

  function deleteTodo(id) {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  }

  function completeTodo(id) {
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
