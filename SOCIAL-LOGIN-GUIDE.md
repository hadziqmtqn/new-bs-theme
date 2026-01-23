# Panduan Tombol Social Login

## Cara Menggunakan

Tombol social login menggunakan kombinasi dua class CSS:
- `btn-social` - Class dasar untuk semua tombol social
- `btn-social-{platform}` - Class spesifik untuk platform tertentu

## Platform yang Tersedia

### Google
```html
<button type="button" class="btn btn-social btn-social-google w-100">
    <i class="bi bi-google"></i>
    <span>Daftar dengan Akun Google</span>
</button>
```

### Facebook
```html
<button type="button" class="btn btn-social btn-social-facebook w-100">
    <i class="bi bi-facebook"></i>
    <span>Daftar dengan Facebook</span>
</button>
```

### GitHub
```html
<button type="button" class="btn btn-social btn-social-github w-100">
    <i class="bi bi-github"></i>
    <span>Daftar dengan GitHub</span>
</button>
```

### Twitter / X
```html
<button type="button" class="btn btn-social btn-social-twitter w-100">
    <i class="bi bi-twitter-x"></i>
    <span>Daftar dengan Twitter</span>
</button>
```

### Microsoft
```html
<button type="button" class="btn btn-social btn-social-microsoft w-100">
    <i class="bi bi-microsoft"></i>
    <span>Daftar dengan Microsoft</span>
</button>
```

## Cara Mengganti Platform

Untuk mengganti dari Google ke platform lain, cukup ubah:
1. Class `btn-social-google` menjadi `btn-social-{platform}`
2. Icon Bootstrap `bi-google` menjadi icon platform yang diinginkan
3. Teks button sesuai platform

### Contoh: Mengganti Google dengan Facebook

**Sebelum:**
```html
<button type="button" class="btn btn-social btn-social-google w-100">
    <i class="bi bi-google"></i>
    <span>Daftar dengan Akun Google</span>
</button>
```

**Sesudah:**
```html
<button type="button" class="btn btn-social btn-social-facebook w-100">
    <i class="bi bi-facebook"></i>
    <span>Daftar dengan Facebook</span>
</button>
```

## Menambahkan Multiple Platform

Anda dapat menambahkan beberapa tombol social login sekaligus:

```html
<div class="auth-divider">atau</div>

<!-- Google -->
<button type="button" class="btn btn-social btn-social-google w-100 mb-2">
    <i class="bi bi-google"></i>
    <span>Daftar dengan Akun Google</span>
</button>

<!-- Facebook -->
<button type="button" class="btn btn-social btn-social-facebook w-100 mb-2">
    <i class="bi bi-facebook"></i>
    <span>Daftar dengan Facebook</span>
</button>

<!-- GitHub -->
<button type="button" class="btn btn-social btn-social-github w-100">
    <i class="bi bi-github"></i>
    <span>Daftar dengan GitHub</span>
</button>
```

## Customisasi Warna

Semua warna dan style sudah didefinisikan di `css/auth.css`. Jika ingin mengubah warna, edit file tersebut pada bagian yang sesuai:

```css
/* Contoh: Mengubah warna Google button */
.btn-social-google {
    background-color: #fff;
    color: #333;
    border-color: #dadce0;
}

.btn-social-google:hover {
    background-color: #f8f9fa;
    border-color: #4285f4;
    color: #4285f4;
    box-shadow: 0 2px 8px rgba(66, 133, 244, 0.2);
}
```

## Icon Bootstrap yang Tersedia

Pastikan menggunakan icon dari Bootstrap Icons yang sudah terinstall:
- `bi-google` - Google
- `bi-facebook` - Facebook
- `bi-github` - GitHub
- `bi-twitter-x` - Twitter/X
- `bi-microsoft` - Microsoft

Lihat dokumentasi lengkap di: https://icons.getbootstrap.com/
