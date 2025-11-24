<template>
  <nav class="flex gap-3 mb-6 border-b-2 border-gray-200 pb-3">
    <button
      @click="$emit('change-view', 'active')"
      :class="[
        'px-6 py-3 text-base font-medium rounded-t-lg transition-all duration-300',
        currentView === 'active'
          ? 'bg-emerald-500 text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      ]"
    >
      List Tugas
    </button>
    <button
      @click="$emit('change-view', 'completed')"
      :class="[
        'px-6 py-3 text-base font-medium rounded-t-lg transition-all duration-300',
        currentView === 'completed'
          ? 'bg-emerald-500 text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      ]"
    >
      Tugas Selesai
    </button>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  currentView: "active" | "completed";
}>();

defineEmits<{
  (e: "change-view", view: "active" | "completed"): void;
}>();
</script>
