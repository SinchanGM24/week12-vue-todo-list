<script setup>
import { ref } from 'vue'

// State untuk menyimpan daftar tugas dan input tugas baru
const tasks = ref([])
const newTask = ref('')

// Fungsi untuk menambah tugas
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = '' // Reset input setelah ditambahkan
  }
}

// Fungsi untuk menghapus tugas berdasarkan index
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <div class="todo-container">
    <div class="todo-card">
      <h1 class="title">📝 Daftar Tugas Saya</h1>
      
      <div class="identity">
        <p><strong>Nama:</strong> Abdul Wafa</p>
        <p><strong>NIM:</strong> F1D022104</p>
      </div>

      <!-- Form Input untuk Menambah Tugas -->
      <form @submit.prevent="addTask" class="task-form">
        <input 
          v-model="newTask" 
          type="text" 
          placeholder="Masukkan tugas baru..."
          class="task-input"
        />
        <button type="submit" class="btn-add">Tambah Tugas</button>
      </form>

      <!-- Pesan jika daftar kosong -->
      <div v-if="tasks.length === 0" class="empty-state">
        <p>📭 Tidak ada tugas</p>
        <p class="empty-subtitle">Silakan tambahkan tugas baru di atas</p>
      </div>

      <!-- Daftar Tugas -->
      <ul v-else class="task-list">
        <li 
          v-for="(task, index) in tasks" 
          :key="index"
          class="task-item"
        >
          <span class="task-number">{{ index + 1 }}.</span>
          <span class="task-text">{{ task }}</span>
          <button 
            @click="deleteTask(index)"
            class="btn-delete"
          >
            🗑️ Hapus
          </button>
        </li>
      </ul>

      <!-- Statistik -->
      <div v-if="tasks.length > 0" class="task-stats">
        <p>Total Tugas: <strong>{{ tasks.length }}</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.todo-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.todo-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  padding: 40px;
}

.title {
  text-align: center;
  color: #667eea;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.identity {
  background: #f8f9ff;
  border-left: 4px solid #667eea;
  padding: 15px 20px;
  margin-bottom: 30px;
  border-radius: 8px;
}

.identity p {
  margin: 5px 0;
  color: #555;
  font-size: 0.95rem;
}

.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.task-input {
  flex: 1;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.task-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.btn-add {
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-add:active {
  transform: translateY(0);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-state p:first-child {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.empty-subtitle {
  font-size: 0.9rem;
  color: #bbb;
}

.task-list {
  list-style: none;
  margin-bottom: 20px;
}

.task-item {
  background: #f8f9ff;
  border: 2px solid #e8ebf7;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.task-item:hover {
  border-color: #667eea;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
  transform: translateX(5px);
}

.task-number {
  color: #667eea;
  font-weight: 700;
  font-size: 1.1rem;
  min-width: 30px;
}

.task-text {
  flex: 1;
  color: #333;
  font-size: 1rem;
  line-height: 1.5;
}

.btn-delete {
  padding: 8px 15px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-delete:hover {
  background: #ff5252;
  transform: scale(1.05);
}

.btn-delete:active {
  transform: scale(0.95);
}

.task-stats {
  text-align: center;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 10px;
  color: #667eea;
  font-size: 1rem;
}

.task-stats strong {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 600px) {
  .todo-card {
    padding: 25px;
  }

  .title {
    font-size: 2rem;
  }

  .task-form {
    flex-direction: column;
  }

  .btn-add {
    width: 100%;
  }

  .task-item {
    flex-wrap: wrap;
  }

  .btn-delete {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
