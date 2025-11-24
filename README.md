# Assignment: Vue.js – Simple To-Do List

## Identitas
- **Nama**: Abdul Wafa
- **NIM**: F1D022104
- **Mata Kuliah**: Pemrograman Web Lanjut B
- **Minggu**: 12

---

## 📋 Deskripsi Tugas
Pada tugas ini saya membuat aplikasi **To-Do List** sederhana menggunakan **Vue.js**.  

### Fitur Aplikasi:
✅ **Menambah tugas** - Input tugas baru melalui form  
✅ **Menghapus tugas** - Hapus tugas yang sudah selesai  
✅ **Menampilkan pesan kosong** - Notifikasi ketika belum ada tugas  
✅ **Reaktivitas dengan `ref()`** - State management menggunakan Composition API  
✅ **Tampilan modern & responsif** - UI yang menarik dengan gradient dan animasi  

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Clone Repository
```bash
git clone <repository-url>
cd todoVue_F1D022104
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Build untuk Production
```bash
npm run build
```

---

## 🎯 Hasil

### 1. Screenshot Hasil Program

#### a. Tampilan Awal (Kosong)
![Tampilan Awal](./screenshots/tampilan-kosong.png)
*Tampilan ketika belum ada tugas. Menampilkan pesan "Tidak ada tugas"*

#### b. Form Input Tugas
![Form Input](./screenshots/form-input.png)
*Form input dengan placeholder dan tombol "Tambah Tugas"*

#### c. Daftar Tugas
![Daftar Tugas](./screenshots/daftar-tugas.png)
*Daftar tugas yang telah ditambahkan dengan tombol hapus*

#### d. Interaksi Hover
![Hover Effect](./screenshots/hover-effect.png)
*Efek hover pada item tugas dan tombol*

---

### 2. Penjelasan Singkat

#### 📝 **Bagaimana `addTask()` Bekerja**
```javascript
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = '' // Reset input setelah ditambahkan
  }
}
```
- Fungsi `addTask()` dipanggil ketika form di-submit dengan `@submit.prevent`
- Validasi dilakukan untuk memastikan input tidak kosong (setelah di-trim)
- Jika valid, tugas ditambahkan ke array `tasks` menggunakan `push()`
- Input field di-reset menjadi string kosong untuk input tugas berikutnya
- `.prevent` mencegah reload halaman saat form di-submit

#### 📊 **Bagaimana Data Ditampilkan Menggunakan `v-for`**
```vue
<li v-for="(task, index) in tasks" :key="index" class="task-item">
  <span class="task-number">{{ index + 1 }}.</span>
  <span class="task-text">{{ task }}</span>
  <button @click="deleteTask(index)" class="btn-delete">
    🗑️ Hapus
  </button>
</li>
```
- `v-for` melakukan iterasi pada array `tasks`
- Setiap item mendapat parameter `task` (isi tugas) dan `index` (urutan)
- `:key="index"` memberikan identifier unik untuk setiap elemen (Vue tracking)
- `{{ index + 1 }}` menampilkan nomor urut dimulai dari 1
- `{{ task }}` menampilkan teks tugas menggunakan interpolation

#### 🗑️ **Cara Kerja Tombol Hapus**
```javascript
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}
```
- Fungsi `deleteTask()` menerima parameter `index` dari item yang akan dihapus
- Event handler `@click="deleteTask(index)"` memanggil fungsi dengan index spesifik
- Method `splice(index, 1)` menghapus 1 elemen pada posisi `index` dari array
- Vue secara otomatis me-render ulang UI karena data reaktif

#### 🔄 **Kondisi Kosong dengan `v-if`**
```vue
<div v-if="tasks.length === 0" class="empty-state">
  <p>📭 Tidak ada tugas</p>
</div>
<ul v-else class="task-list">
  <!-- Daftar tugas -->
</ul>
```
- `v-if` menampilkan elemen hanya jika kondisi bernilai `true`
- Jika `tasks.length === 0`, tampilkan pesan "Tidak ada tugas"
- `v-else` menampilkan daftar tugas jika array tidak kosong
- Ini membuat UI responsif terhadap perubahan data

---

## 🛠️ Teknologi yang Digunakan

- **Vue.js 3** - Progressive JavaScript Framework
- **Composition API** - State management dengan `ref()`
- **TypeScript** - Type safety dan better development experience
- **Vite** - Fast build tool dan development server
- **CSS3** - Styling dengan gradient, animasi, dan responsive design

---

## 📦 Struktur Project

```
todoVue_F1D022104/
├── public/              # Static assets
├── src/
│   ├── App.vue         # Main component (To-Do List)
│   ├── main.ts         # Entry point
│   └── assets/         # Images, styles
├── screenshots/        # Screenshot hasil program
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── README.md          # Dokumentasi (file ini)
```

---

## 🎨 Fitur Tambahan (Improvisasi)

Selain memenuhi requirement dasar, aplikasi ini juga memiliki:

1. **Identitas Mahasiswa** - Ditampilkan di dalam card aplikasi
2. **Gradient Background** - Background purple gradient yang modern
3. **Animasi Smooth** - Transisi dan hover effects pada setiap elemen
4. **Slide-in Animation** - Animasi ketika tugas baru ditambahkan
5. **Statistik Tugas** - Menampilkan total jumlah tugas
6. **Responsive Design** - Tampilan optimal di desktop dan mobile
7. **Emoji Icons** - Visual yang lebih menarik dan user-friendly
8. **Shadow Effects** - Depth dan dimensi pada card dan button
9. **Number Indicator** - Penomoran otomatis pada setiap tugas
10. **Validation** - Mencegah penambahan tugas kosong

---

## 📸 Petunjuk Screenshot

Untuk melengkapi dokumentasi, silakan tambahkan screenshot berikut ke folder `screenshots/`:

1. **tampilan-kosong.png** - Tampilan awal aplikasi tanpa tugas
2. **form-input.png** - Screenshot saat mengisi form input
3. **daftar-tugas.png** - Screenshot dengan beberapa tugas
4. **hover-effect.png** - Screenshot efek hover pada tombol/item

---

## 📝 Kesimpulan

Aplikasi To-Do List ini berhasil mengimplementasikan konsep dasar Vue.js:
- ✅ Reaktivitas dengan `ref()`
- ✅ Two-way binding dengan `v-model`
- ✅ Event handling dengan `@submit` dan `@click`
- ✅ Conditional rendering dengan `v-if` dan `v-else`
- ✅ List rendering dengan `v-for` dan `:key`
- ✅ Method/Function untuk logic aplikasi

Aplikasi berjalan tanpa error dan memiliki tampilan yang rapi serta user-friendly.

---

## 👨‍💻 Author

**Abdul Wafa**  
NIM: F1D022104  
Universitas Lampung

---

## 📄 License

This project is created for educational purposes.

---

**© 2025 - Week 12 Vue.js Assignment**
