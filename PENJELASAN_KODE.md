# Penjelasan Kode Vue.js To-Do List

## 📚 Penjelasan Lengkap App.vue

### 1. Script Section - JavaScript Logic

```javascript
<script setup>
import { ref } from 'vue'

// State untuk menyimpan daftar tugas dan input tugas baru
const tasks = ref([])
const newTask = ref('')

// Fungsi untuk menambah tugas
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}

// Fungsi untuk menghapus tugas berdasarkan index
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
```

#### Penjelasan Baris per Baris:

**Baris 1-2: Import dan Setup**
```javascript
<script setup>
import { ref } from 'vue'
```
- `<script setup>` adalah syntax modern Vue 3 (Composition API)
- Lebih ringkas daripada Options API
- `import { ref }` mengimport fungsi `ref` dari Vue
- `ref` digunakan untuk membuat data reaktif

**Baris 4-5: State Management**
```javascript
const tasks = ref([])
const newTask = ref('')
```
- `tasks = ref([])` membuat array kosong yang reaktif
  - Akan menyimpan semua tugas yang ditambahkan
  - Ketika berubah, UI otomatis update
  
- `newTask = ref('')` membuat string kosong yang reaktif
  - Menyimpan input dari user
  - Terhubung ke input field via v-model

**Baris 7-13: Fungsi addTask()**
```javascript
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}
```

**Penjelasan Detail:**
1. `const addTask = () => { }` - Deklarasi fungsi arrow function
2. `if (newTask.value.trim() !== '')` - Validasi input
   - `newTask.value` mengakses nilai dari ref
   - `.trim()` menghapus spasi di awal/akhir
   - `!== ''` memastikan tidak kosong
3. `tasks.value.push(...)` - Menambah tugas ke array
   - `.push()` menambahkan elemen ke akhir array
   - Vue otomatis detect perubahan dan re-render
4. `newTask.value = ''` - Reset input field
   - Mengosongkan input setelah submit
   - User bisa langsung input tugas berikutnya

**Baris 15-18: Fungsi deleteTask()**
```javascript
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
```

**Penjelasan:**
1. `deleteTask = (index) => { }` - Menerima parameter index
2. `tasks.value.splice(index, 1)` - Menghapus 1 elemen di posisi index
   - `splice()` mengubah array original
   - Parameter 1: posisi mulai hapus
   - Parameter 2: jumlah elemen yang dihapus

---

### 2. Template Section - HTML Structure

```vue
<template>
  <div class="todo-container">
    <div class="todo-card">
      <h1 class="title">📝 Daftar Tugas Saya</h1>
      
      <!-- Identitas -->
      <div class="identity">
        <p><strong>Nama:</strong> Abdul Wafa</p>
        <p><strong>NIM:</strong> F1D022104</p>
      </div>

      <!-- Form Input -->
      <form @submit.prevent="addTask" class="task-form">
        <input 
          v-model="newTask" 
          type="text" 
          placeholder="Masukkan tugas baru..."
          class="task-input"
        />
        <button type="submit" class="btn-add">Tambah Tugas</button>
      </form>

      <!-- Pesan Kosong -->
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
```

#### Penjelasan Vue Directives:

**1. v-model (Two-way Binding)**
```vue
<input v-model="newTask" />
```
- Menghubungkan input dengan state `newTask`
- Perubahan di input → update state
- Perubahan di state → update input
- Shorthand untuk:
  ```vue
  <input 
    :value="newTask" 
    @input="newTask = $event.target.value"
  />
  ```

**2. @submit.prevent (Event Handling)**
```vue
<form @submit.prevent="addTask">
```
- `@submit` shorthand dari `v-on:submit`
- `.prevent` memanggil `event.preventDefault()`
- Mencegah reload halaman saat submit form
- Memanggil fungsi `addTask()` saat form di-submit
- Equivalent dengan:
  ```javascript
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask()
  })
  ```

**3. v-if / v-else (Conditional Rendering)**
```vue
<div v-if="tasks.length === 0">
  Tidak ada tugas
</div>
<ul v-else>
  <!-- Daftar tugas -->
</ul>
```
- `v-if` render elemen jika kondisi true
- `v-else` render elemen jika kondisi false
- Elemen tidak ada di DOM jika kondisi false
- Berbeda dengan `v-show` yang hanya hide (display: none)

**4. v-for (List Rendering)**
```vue
<li 
  v-for="(task, index) in tasks" 
  :key="index"
>
  {{ task }}
</li>
```

**Penjelasan:**
- `v-for="(task, index) in tasks"` loop array tasks
  - `task` = elemen saat ini
  - `index` = posisi dalam array (0, 1, 2, ...)
  - `in tasks` = array yang di-loop
  
- `:key="index"` = unique identifier
  - Penting untuk Vue tracking
  - Membantu Vue update efisien
  - Shorthand dari `v-bind:key="index"`

- `{{ task }}` = Interpolation
  - Menampilkan nilai variabel
  - Otomatis convert ke string

**5. @click (Event Handling)**
```vue
<button @click="deleteTask(index)">
  Hapus
</button>
```
- `@click` shorthand dari `v-on:click`
- Memanggil fungsi `deleteTask` dengan parameter `index`
- Seperti `onclick` di vanilla JavaScript

**6. {{ }} Interpolation**
```vue
<span>{{ index + 1 }}.</span>
<span>{{ task }}</span>
<strong>{{ tasks.length }}</strong>
```
- Menampilkan nilai JavaScript dalam template
- Bisa berisi expression sederhana
- Otomatis update saat data berubah

---

### 3. Style Section - CSS Styling

```vue
<style scoped>
/* CSS Styles */
</style>
```

**Penjelasan `scoped`:**
- CSS hanya berlaku untuk component ini
- Tidak affect component lain
- Vue menambahkan unique attribute ke setiap elemen
- Mencegah style conflict

**Key CSS Concepts:**

```css
.todo-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
```
- `linear-gradient` - Background gradient
- `flexbox` - Layout centering

```css
.task-item {
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

.task-item:hover {
  transform: translateX(5px);
}
```
- `transition` - Smooth animation
- `:hover` - Style saat mouse over
- `transform` - Geser elemen

```css
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
```
- Animation keyframes
- Slide in dari kiri saat tugas ditambah

---

## 🔄 Alur Kerja Aplikasi

### Saat Aplikasi Pertama Kali Dibuka:

1. **Initialization**
   ```javascript
   const tasks = ref([])        // tasks = []
   const newTask = ref('')      // newTask = ''
   ```

2. **Rendering**
   - Vue check `tasks.length === 0` → true
   - Tampilkan `v-if` block: "Tidak ada tugas"
   - Input field kosong (newTask = '')

---

### Saat User Menambah Tugas:

1. **User mengetik di input**
   ```
   User ketik: "Belajar Vue.js"
   ↓
   v-model update newTask
   ↓
   newTask.value = "Belajar Vue.js"
   ```

2. **User submit form (tekan Enter atau klik tombol)**
   ```
   Form submit
   ↓
   @submit.prevent triggered
   ↓
   addTask() dipanggil
   ```

3. **Fungsi addTask() eksekusi**
   ```javascript
   addTask() {
     // Validasi
     if ("Belajar Vue.js".trim() !== '') {  // true
       // Tambah ke array
       tasks.value.push("Belajar Vue.js")
       // tasks sekarang: ["Belajar Vue.js"]
       
       // Reset input
       newTask.value = ''
     }
   }
   ```

4. **Vue Reactivity System**
   ```
   tasks berubah
   ↓
   Vue detect perubahan
   ↓
   Re-render component
   ↓
   Update DOM
   ```

5. **Re-rendering**
   - Check `tasks.length === 0` → false
   - Tampilkan `v-else` block (list)
   - Loop dengan `v-for`:
     ```vue
     <li key="0">
       <span>1.</span>
       <span>Belajar Vue.js</span>
       <button>Hapus</button>
     </li>
     ```

---

### Saat User Menghapus Tugas:

1. **User klik tombol Hapus (index 0)**
   ```
   Click button
   ↓
   @click="deleteTask(0)" triggered
   ↓
   deleteTask(0) dipanggil
   ```

2. **Fungsi deleteTask() eksekusi**
   ```javascript
   deleteTask(0) {
     tasks.value.splice(0, 1)
     // Hapus 1 elemen di index 0
     // tasks sekarang: []
   }
   ```

3. **Vue Re-render**
   ```
   tasks berubah
   ↓
   Check tasks.length === 0 → true
   ↓
   Tampilkan pesan "Tidak ada tugas"
   ```

---

## 💡 Konsep Penting Vue.js

### 1. Reactivity System
```javascript
const data = ref(initialValue)
```
- Vue track perubahan data
- Otomatis update UI saat data berubah
- Tidak perlu manual DOM manipulation

### 2. Declarative Rendering
```vue
<div v-if="condition">Show this</div>
```
- Describe "what", bukan "how"
- Vue handle DOM updates

### 3. Component-based
- Semua dalam satu file (.vue)
- Template + Logic + Style
- Reusable dan maintainable

### 4. Two-way Binding
```vue
<input v-model="data" />
```
- Sinkronisasi input dan state
- Simplify form handling

---

## 🎓 Konsep JavaScript yang Digunakan

### 1. Arrow Function
```javascript
const addTask = () => { }
```
- Modern JavaScript syntax
- Shorter function syntax

### 2. Array Methods
```javascript
array.push(item)      // Tambah ke akhir
array.splice(i, 1)    // Hapus di index i
array.length          // Jumlah elemen
```

### 3. String Methods
```javascript
str.trim()            // Hapus spasi awal/akhir
```

### 4. Conditional (if)
```javascript
if (condition) {
  // Do something
}
```

### 5. Template Literals
```vue
{{ index + 1 }}       // Expression dalam template
```

---

## ✅ Checklist Konsep yang Dipelajari

- [x] Setup Proyek Vue.js
- [x] Composition API (`<script setup>`)
- [x] Reactivity dengan `ref()`
- [x] Two-way binding (`v-model`)
- [x] Event handling (`@submit`, `@click`)
- [x] Conditional rendering (`v-if`, `v-else`)
- [x] List rendering (`v-for`, `:key`)
- [x] Interpolation (`{{ }}`)
- [x] Scoped CSS
- [x] Component structure

---

**Semoga penjelasan ini membantu memahami kode! 🚀**
