<template>
  <div
    class="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-100 shadow-lg"
  >
    <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Tambah Tugas Baru</h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="title" class="block mb-2 text-sm font-semibold text-gray-700">
          Tugas: <span class="text-red-500 font-bold">*</span>
        </label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Masukkan nama tugas"
          required
          class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:border-gray-400"
        />
      </div>

      <div>
        <label for="detail" class="block mb-2 text-sm font-semibold text-gray-700">
          Detail: <span class="text-gray-400 font-normal text-xs">(opsional)</span>
        </label>
        <textarea
          id="detail"
          v-model="form.detail"
          placeholder="Masukkan detail tugas"
          rows="5"
          class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:border-gray-400 resize-vertical"
        ></textarea>
      </div>

      <div>
        <label for="deadline" class="block mb-2 text-sm font-semibold text-gray-700">
          Tanggal Deadline: <span class="text-red-500 font-bold">*</span>
        </label>
        <input
          id="deadline"
          v-model="form.deadline"
          type="date"
          required
          class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:border-gray-400"
        />
      </div>

      <div class="flex gap-4 pt-4">
        <button
          type="submit"
          class="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
        >
          Simpan
        </button>
        <button
          type="button"
          @click="$emit('cancel')"
          class="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide"
        >
          Batal
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

const emit = defineEmits<{
  (e: "success"): void;
  (e: "cancel"): void;
}>();

const form = reactive({
  title: "",
  detail: "",
  deadline: "",
});

function handleSubmit() {
  if (form.title && form.deadline) {
    todoStore.addTodo(form.title, form.detail, form.deadline);

    // Reset form
    form.title = "";
    form.detail = "";
    form.deadline = "";

    emit("success");
  }
}
</script>
