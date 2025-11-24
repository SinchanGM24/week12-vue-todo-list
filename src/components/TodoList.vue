<template>
  <div class="flex flex-col flex-1">
    <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
      <h2 class="text-2xl font-semibold text-gray-800">Daftar Tugas</h2>
      <button
        @click="$emit('add-todo')"
        class="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
      >
        + Tambah Tugas
      </button>
    </div>

    <div
      v-if="activeTodos.length === 0"
      class="flex flex-1 items-center justify-center text-center py-20"
    >
      <p class="text-gray-400 text-lg">
        Tidak ada tugas. Klik "Tambah Tugas" untuk membuat tugas baru.
      </p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div
        v-for="todo in activeTodos"
        :key="todo.id"
        class="flex flex-col p-6 bg-gray-50 rounded-xl border-l-4 border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[180px]"
      >
        <div class="flex-1 mb-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ todo.title }}</h3>
          <p v-if="todo.detail" class="text-gray-600 text-sm leading-relaxed mb-4">
            {{ todo.detail }}
          </p>
          <div class="flex flex-wrap gap-5 text-xs text-gray-500 pt-3 border-t border-gray-200">
            <span>Dibuat: {{ formatDate(todo.createdAt) }}</span>
            <span>Deadline: {{ formatDate(todo.deadline) }}</span>
          </div>
        </div>
        <div class="flex gap-2">
          <button
            @click="handleComplete(todo.id)"
            class="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            ✓ Done
          </button>
          <button
            @click="handleDelete(todo.id)"
            class="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            ✕ Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

defineEmits<{
  (e: "add-todo"): void;
}>();

const activeTodos = computed(() => todoStore.getActiveTodos());

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function handleComplete(id: number) {
  todoStore.completeTodo(id);
}

function handleDelete(id: number) {
  if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
    todoStore.deleteTodo(id);
  }
}
</script>
