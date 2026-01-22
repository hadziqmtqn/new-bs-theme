// ===================================================================
// MEDIA PAGE - TABLE FILTER & PAGINATION
// ===================================================================

// 1. Data Dokumen
const documents = [
    { id: 1, name: "Formulir Pendaftaran 2025.pdf", desc: "Wajib diisi calon siswa baru", category: "Formulir", size: "2.5 MB", date: "15 Mei 2024", icon: "bi-file-earmark-pdf-fill", color: "text-danger" },
    { id: 2, name: "Panduan PPDB Lengkap.pdf", desc: "Petunjuk teknis pendaftaran", category: "Panduan", size: "5.1 MB", date: "14 Mei 2024", icon: "bi-book-fill", color: "text-success" },
    { id: 3, name: "Brosur Sekolah High Res.jpg", desc: "Gambar fasilitas dan prestasi", category: "Brosur", size: "8.2 MB", date: "10 Mei 2024", icon: "bi-image-fill", color: "text-primary" },
    { id: 4, name: "Format Surat Pernyataan.docx", desc: "Template surat orang tua", category: "Format", size: "15 KB", date: "08 Mei 2024", icon: "bi-file-word-fill", color: "text-primary" },
    { id: 5, name: "Video Profil Sekolah.mp4", desc: "Promo video sekolah", category: "Video", size: "120 MB", date: "07 Mei 2024", icon: "bi-file-play-fill", color: "text-warning" },
    { id: 6, name: "Kalender Akademik 2024-2025.pdf", desc: "Jadwal libur dan ujian", category: "Info", size: "1.8 MB", date: "01 Mei 2024", icon: "bi-calendar-event", color: "text-primary" },
    { id: 7, name: "Rincian Biaya SPP.pdf", desc: "Daftar biaya pendidikan", category: "Info", size: "900 KB", date: "25 Apr 2024", icon: "bi-currency-dollar", color: "text-secondary" },
    { id: 8, name: "Kurikulum Merdeka.pdf", desc: "Struktur kurikulum belajar", category: "Kurikulum", size: "3.2 MB", date: "20 Apr 2024", icon: "bi-book", color: "text-primary" },
    { id: 9, name: "Peta Zonasi Sekolah.pdf", desc: "Peta zonasi PPDB", category: "Info", size: "5.4 MB", date: "18 Apr 2024", icon: "bi-geo-alt", color: "text-primary" },
    { id: 10, name: "Berkas Pendukung.zip", desc: "Arsip berkas pendukung pembelajaran", category: "Arsip", size: "12.5 MB", date: "15 Apr 2024", icon: "bi-file-zip", color: "text-dark" }
];

// 2. Variabel State
let currentPage = 1;
const rowsPerPage = 5;
let currentData = [...documents];

// 3. Fungsi Render Table
function renderTable(data) {
    const tbody = document.getElementById('tableBody');

    if (data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-4">Data tidak ditemukan.</td>
            </tr>
        `;
        return;
    }

    // Bersihkan dulu
    tbody.innerHTML = '';

    // Loop data
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>
                <div class="d-flex align-items-center">
                            <div class="file-icon ${item.color}">
                                <i class="bi ${item.icon}"></i>
                            </div>
                            <div>
                                <span class="file-name">${item.name}</span>
                                <span class="file-meta">${item.desc}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="text-muted small">${item.desc}</span></td>
                    <td><span class="badge bg-light text-dark border">Info</span></td>
                    <td><span class="text-muted small">${item.size}</span></td>
                    <td>
                        <a href="#" class="btn btn-sm btn-primary rounded-pill px-3" title="Download"><i class="bi bi-download"></i> Unduh</a>
                    </td>
        `;
        tbody.appendChild(row);
    });
}

// 4. Fungsi Pagination
function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Tombol Previous
    const prevDisabled = currentPage === 1 ? 'disabled' : '';
    pagination.innerHTML += `
        <button class="page-btn ${prevDisabled}" onclick="changePage(${currentPage - 1})" ${prevDisabled === 'disabled' ? 'disabled' : ''}>
            <i class="bi bi-chevron-left"></i>
        </button>
    `;

    // Nomor Halaman
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        pagination.innerHTML += `
            <button class="page-btn ${activeClass}" onclick="changePage(${i})">${i}</button>
        `;
    }

    // Tombol Next
    const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    pagination.innerHTML += `
        <button class="page-btn ${nextDisabled}" onclick="changePage(${currentPage + 1})" ${nextDisabled === 'disabled' ? 'disabled' : ''}>
            <i class="bi bi-chevron-right"></i>
        </button>
    `;
}

// 5. Fungsi Ganti Halaman & Filter
function changePage(page) {
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderTable(currentData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
    renderPagination(currentData.length);
}

// 6. Fungsi Filter
function applyFilters() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    const filtered = documents.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(searchText) || item.desc.toLowerCase().includes(searchText);
        const matchCategory = categoryFilter === 'All' || item.category === categoryFilter;
        return matchSearch && matchCategory;
    });

    currentData = filtered;
    currentPage = 1;
    renderTable(currentData.slice(0, rowsPerPage));
    renderPagination(filtered.length);
}

// 7. Event Listeners
document.getElementById('searchInput').addEventListener('keyup', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);

// Form submit event
document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    applyFilters();
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'All';
    applyFilters();
});

// 8. Inisialisasi Awal
renderTable(currentData.slice(0, rowsPerPage));
renderPagination(documents.length);
