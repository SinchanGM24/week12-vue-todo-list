<script setup>
import { ref } from "vue";
import TodoNavbar from "./components/TodoNavbar.vue";
import TodoList from "./components/TodoList.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import CompletedTodos from "./components/CompletedTodos.vue";

// State untuk view dan form
const currentView = ref("active");
const showAddForm = ref(false);

// Handler functions
const handleChangeView = (view) => {
  currentView.value = view;
  showAddForm.value = false;
};

const handleAddTodo = () => {
  showAddForm.value = true;
};

const handleFormSuccess = () => {
  showAddForm.value = false;
};

const handleFormCancel = () => {
  showAddForm.value = false;
};
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-purple-800 flex items-center justify-center p-4 sm:p-6 lg:p-8"
  >
    <div class="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 min-h-[85vh]">
      <h1
        class="text-3xl sm:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3 pb-2"
      >
        <span>📝</span>
        <span
          class="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:h-[45px]"
          >Aplikasi Manajemen Tugas</span
        >
      </h1>

      <TodoNavbar :current-view="currentView" @change-view="handleChangeView" />

      <!-- Form Tambah Tugas -->
      <AddTodoForm
        v-if="showAddForm && currentView === 'active'"
        @success="handleFormSuccess"
        @cancel="handleFormCancel"
      />

      <!-- List Tugas Aktif -->
      <TodoList v-else-if="currentView === 'active'" @add-todo="handleAddTodo" />

      <!-- List Tugas Selesai -->
      <CompletedTodos v-else-if="currentView === 'completed'" />
    </div>
  </div>
</template>
