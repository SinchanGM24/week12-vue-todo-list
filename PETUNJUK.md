# Petunjuk Lengkap - Vue.js To-Do List

## 📚 Cara Menjalankan Aplikasi

### 1. Pastikan Node.js Terinstall
Cek versi Node.js:
```bash
node --version
```
Minimal Node.js versi 20.9.0 atau lebih tinggi.

### 2. Clone atau Download Project
```bash
git clone <repository-url>
cd todoVue_F1D022104
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### 5. Build untuk Production
```bash
npm run build
```

---

## 📸 Cara Mengambil Screenshot

### Windows:
1. Tekan `Windows + Shift + S` untuk membuka Snipping Tool
2. Pilih area yang ingin di-screenshot
3. Screenshot otomatis tersimpan di clipboard
4. Paste di aplikasi image editor (Paint, dll) dan save

### Alternatif (Windows):
- `PrtScr` untuk screenshot full screen
- `Alt + PrtScr` untuk screenshot window aktif

### Screenshot yang Dibutuhkan:

#### 1. tampilan-kosong.png
- Buka aplikasi saat pertama kali
- Pastikan terlihat pesan "Tidak ada tugas"
- Screenshot seluruh aplikasi

#### 2. form-input.png
- Ketik sesuatu di input field (belum submit)
- Screenshot form input dengan teks

#### 3. daftar-tugas.png
- Tambahkan beberapa tugas (minimal 3)
- Screenshot dengan daftar tugas terlihat
- Pastikan tombol hapus terlihat

#### 4. hover-effect.png (opsional)
- Arahkan mouse ke salah satu item tugas atau tombol
- Screenshot saat hover effect aktif

---

## 🎯 Fitur yang Diimplementasikan

### ✅ 1. Setup Proyek Vue
- Proyek dibuat dengan `npm create vue@latest`
- Nama folder: `todoVue_F1D022104`

### ✅ 2. State Management
```javascript
const tasks = ref([])        // Array untuk menyimpan daftar tugas
const newTask = ref('')      // String untuk input tugas baru
```

### ✅ 3. Form Input
```vue
<input v-model="newTask" type="text" placeholder="Masukkan tugas baru..." />
```
- Menggunakan `v-model` untuk two-way binding

### ✅ 4. Tambah Tugas
```javascript
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}
```
- Form menggunakan `@submit.prevent="addTask"`

### ✅ 5. Tampilkan List Tugas
```vue
<li v-for="(task, index) in tasks" :key="index">
  {{ task }}
</li>
```
- Menggunakan `v-for` dengan `:key="index"`

### ✅ 6. Hapus Tugas
```javascript
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
```
- Tombol hapus dengan `@click="deleteTask(index)"`

### ✅ 7. Kondisi Kosong
```vue
<div v-if="tasks.length === 0">
  <p>Tidak ada tugas</p>
</div>
<ul v-else>
  <!-- Daftar tugas -->
</ul>
```

---

## 🎨 Fitur Bonus

1. **Identitas Mahasiswa** di dalam aplikasi
2. **Responsive Design** - Mobile friendly
3. **Animasi Smooth** - Hover effects & transitions
4. **Modern UI** - Gradient background & card design
5. **Validasi Input** - Tidak bisa menambah tugas kosong
6. **Statistik** - Menampilkan jumlah total tugas
7. **Numbering** - Penomoran otomatis untuk setiap tugas

---

## 📁 Struktur File Penting

```
todoVue_F1D022104/
│
├── src/
│   ├── App.vue              # Component utama (To-Do List)
│   └── main.ts              # Entry point aplikasi
│
├── public/                  # Static assets
├── screenshots/             # Folder untuk screenshot
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Konfigurasi Vite
├── README.md               # Dokumentasi utama
└── PETUNJUK.md             # File ini
```

---

## 🔍 Penjelasan Kode Penting

### Reactive State dengan ref()
```javascript
import { ref } from 'vue'

const tasks = ref([])
const newTask = ref('')
```
- `ref()` membuat data menjadi reaktif
- Vue otomatis update UI saat data berubah

### Two-way Binding dengan v-model
```vue
<input v-model="newTask" />
```
- Menghubungkan input dengan state
- Perubahan di input langsung update state

### Event Handling
```vue
<form @submit.prevent="addTask">
  <!-- .prevent mencegah reload halaman -->
</form>

<button @click="deleteTask(index)">
  <!-- Memanggil fungsi dengan parameter -->
</button>
```

### Conditional Rendering
```vue
<div v-if="tasks.length === 0">Kosong</div>
<ul v-else><!-- List --></ul>
```
- Menampilkan elemen berdasarkan kondisi

### List Rendering
```vue
<li v-for="(task, index) in tasks" :key="index">
  {{ task }}
</li>
```
- Loop array untuk render list
- `:key` penting untuk Vue tracking

---

## 🐛 Troubleshooting

### Error: Port sudah digunakan
```bash
# Kill process di port 5173
npx kill-port 5173
```

### Error: Node version
```bash
# Update Node.js ke versi terbaru
# Download dari nodejs.org
```

### Error: Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📤 Upload ke GitHub

### 1. Buat Repository Baru
- Buka github.com
- Klik "New repository"
- Nama: `week12-vue-todo-list`
- Public/Private (sesuai kebutuhan)
- Jangan centang "Initialize with README"

### 2. Push ke GitHub
```bash
git remote add origin https://github.com/username/week12-vue-todo-list.git
git branch -M main
git push -u origin main
```

### 3. Upload Screenshot
- Tambahkan screenshot ke folder `screenshots/`
- Commit dan push:
```bash
git add screenshots/
git commit -m "Add screenshots"
git push
```

---

## ✅ Checklist Pengumpulan

- [ ] Aplikasi berjalan tanpa error
- [ ] Semua fitur bekerja (tambah, hapus, tampil pesan kosong)
- [ ] Screenshot lengkap (4 screenshot)
- [ ] README.md sudah diisi dengan lengkap
- [ ] Repository sudah di-push ke GitHub
- [ ] Link repository sudah dicopy untuk dikumpulkan

---

## 📝 Catatan Tambahan

- Pastikan semua screenshot jelas dan terlihat jelas
- README.md harus menjelaskan cara kerja kode
- Repository harus public atau share access ke dosen
- Nama repository harus sesuai: `week12-vue-todo-list`

---

**Good luck! 🚀**
