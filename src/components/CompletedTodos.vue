<template>
  <div class="flex flex-col flex-1">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Tugas Selesai</h2>

    <div
      v-if="completedTodos.length === 0"
      class="flex flex-1 items-center justify-center text-center py-20"
    >
      <p class="text-gray-400 text-lg">Belum ada tugas yang diselesaikan.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div
        v-for="todo in completedTodos"
        :key="todo.id"
        :class="[
          'flex flex-col p-6 rounded-xl border-l-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[200px]',
          getStatusClass(todo) === 'on-time'
            ? 'bg-green-50 border-green-500'
            : 'bg-red-50 border-red-500',
        ]"
      >
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-800 mb-3 line-through opacity-80">
            {{ todo.title }}
          </h3>
          <p v-if="todo.detail" class="text-gray-600 text-sm leading-relaxed mb-4">
            {{ todo.detail }}
          </p>
          <div
            class="flex flex-wrap gap-5 text-xs text-gray-500 pt-3 mb-4 border-t border-gray-200"
          >
            <span>Dibuat: {{ formatDate(todo.createdAt) }}</span>
            <span>Deadline: {{ formatDate(todo.deadline) }}</span>
            <span>Selesai: {{ formatDate(todo.completedAt) }}</span>
          </div>
          <div
            :class="[
              'inline-block px-4 py-2 rounded-lg text-sm font-semibold text-center',
              getStatusClass(todo) === 'on-time'
                ? 'bg-green-200 text-green-700'
                : 'bg-red-200 text-red-700',
            ]"
          >
            {{ getStatusText(todo) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

const completedTodos = computed(() => todoStore.getCompletedTodos());

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function getStatusClass(todo) {
  if (!todo.completedAt) return "";

  const deadline = new Date(todo.deadline);
  const completedDate = new Date(todo.completedAt);

  // Set time to midnight for fair comparison
  deadline.setHours(0, 0, 0, 0);
  completedDate.setHours(0, 0, 0, 0);

  return completedDate <= deadline ? "on-time" : "late";
}

function getStatusText(todo) {
  if (!todo.completedAt) return "";

  const deadline = new Date(todo.deadline);
  const completedDate = new Date(todo.completedAt);

  deadline.setHours(0, 0, 0, 0);
  completedDate.setHours(0, 0, 0, 0);

  return completedDate <= deadline ? "✓ Selesai Tepat Waktu" : "⚠ Selesai Terlambat";
}
</script>
