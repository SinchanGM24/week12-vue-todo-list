# Changelog

Semua perubahan penting pada project ini akan didokumentasikan di file ini.

## [2.0.0] - 2025-11-24

### ✨ Added - Fitur Baru

#### Komponen Baru

- **TodoNavbar.vue**: Navbar dengan 2 tab (List Tugas & Tugas Selesai)
- **AddTodoForm.vue**: Form dedicated untuk menambah tugas dengan validasi
- **TodoList.vue**: Komponen untuk menampilkan list tugas aktif
- **CompletedTodos.vue**: Komponen untuk menampilkan tugas yang sudah selesai

#### State Management

- **todo.ts (Pinia Store)**: State management terpusat dengan interface Todo
- Type-safe data management dengan TypeScript
- Fungsi CRUD: `addTodo()`, `deleteTodo()`, `completeTodo()`
- Computed getters: `getActiveTodos()`, `getCompletedTodos()`

#### Fitur Tugas

- Field **Tugas** (required): Nama/judul tugas
- Field **Detail** (optional): Deskripsi lengkap tugas
- Field **Tanggal Deadline** (required): Batas waktu penyelesaian
- Auto-generate **Tanggal Dibuat** saat tugas dibuat
- Auto-generate **Tanggal Selesai** saat tugas di-mark sebagai done
- Button **Done** untuk menandai tugas selesai
- Button **Hapus** dengan konfirmasi untuk menghapus tugas

#### Sistem Evaluasi

- **Warna Hijau Transparan**: Tugas selesai sebelum/pada deadline
- **Warna Merah Transparan**: Tugas selesai melewati deadline
- **Badge Status**: "✓ Selesai Tepat Waktu" atau "⚠ Selesai Terlambat"
- Evaluasi otomatis berdasarkan perbandingan tanggal

#### UI/UX Improvements

- Toggle antara view "List Tugas" dan "Tugas Selesai"
- Form tambah tugas menggantikan list saat aktif
- Empty state untuk list kosong
- Formatting tanggal dalam bahasa Indonesia
- Animasi transisi yang smooth
- Hover effects pada semua interactive elements
- Responsive design yang lebih baik

### 🔧 Changed - Perubahan

#### Arsitektur

- **Single Component → Multi-Component**: Pemisahan concern yang lebih baik
- **Simple ref() → Pinia Store**: State management yang lebih scalable
- **String Array → Object Interface**: Data structure yang lebih kompleks
- **Inline Form → Dedicated Form Component**: Better user experience

#### Data Structure

```typescript
// Dari:
const tasks = ref<string[]>([]);

// Menjadi:
interface Todo {
	id: number;
	title: string;
	detail: string;
	deadline: string;
	createdAt: string;
	completed: boolean;
	completedAt?: string;
}
```

#### Styling

- Max-width card diperbesar dari 600px → 700px
- Gradient background tetap dipertahankan
- Color scheme disesuaikan untuk status evaluation
- Typography improvements untuk readability

### 📦 Dependencies

#### Added

- `pinia`: ^2.x.x - State management library

#### Updated

- TypeScript configurations untuk support Pinia

### 🗑️ Removed

#### Deprecated Features

- Simple string-based task list
- Inline form di App.vue
- Basic task counter
- Direct array manipulation in template

### 📝 Documentation

#### Added

- Comprehensive README with feature descriptions
- Usage guide dengan step-by-step instructions
- Component structure documentation
- Code examples dan penjelasan
- Screenshot guidelines
- CHANGELOG.md (this file)

#### Updated

- README.md dengan fitur-fitur baru
- Project structure documentation
- Setup instructions

---

## [1.0.0] - 2025-11-24

### Initial Release

#### Features

- Basic todo list functionality
- Add task dengan input field
- Delete task dengan button hapus
- Simple ref() state management
- Responsive design dengan gradient background
- Empty state handling
- Task counter
- Hover animations

#### Components

- Single App.vue component

#### Technologies

- Vue 3
- TypeScript
- Vite
- CSS3

---

## Versioning

Project ini mengikuti [Semantic Versioning](https://semver.org/):

- **MAJOR** version untuk incompatible API changes
- **MINOR** version untuk fitur baru yang backward-compatible
- **PATCH** version untuk bug fixes yang backward-compatible

---

## Roadmap (Future Enhancements)

### Version 2.1.0 (Planned)

- [ ] Persistent storage dengan localStorage
- [ ] Edit tugas yang sudah dibuat
- [ ] Filter tugas berdasarkan status
- [ ] Search functionality
- [ ] Sort by deadline, created date, atau title

### Version 2.2.0 (Planned)

- [ ] Categories/Tags untuk tugas
- [ ] Priority levels (High, Medium, Low)
- [ ] Dark mode toggle
- [ ] Export/Import data (JSON)
- [ ] Print functionality

### Version 3.0.0 (Planned)

- [ ] Backend integration dengan API
- [ ] User authentication
- [ ] Multi-user support
- [ ] Real-time synchronization
- [ ] Mobile app (PWA)

---

**Maintained by**: Abdul Wafa (F1D022104)  
**Last Updated**: November 24, 2025
