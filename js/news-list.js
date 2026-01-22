/**
 * News List Page JavaScript
 * Handles news filtering, pagination, and rendering
 */

// Sample news data
const newsData = [
    {
        id: 1,
        title: "Pembukaan Gelombang 1 PPDB Tahun Ajaran 2024/2025",
        excerpt: "Panitia PPDB resmi membuka pendaftaran gelombang pertama mulai tanggal 20 Mei. Segera siapkan berkas.",
        image: "https://picsum.photos/seed/news1/400/250",
        date: "15 Mei 2024",
        category: "pengumuman",
        categoryLabel: "Pengumuman"
    },
    {
        id: 2,
        title: "Siswa Kami Raih Medali Emas Olimpiade Sains",
        excerpt: "Selamat kepada tim Olimpiade Matematika yang berhasil membawa pulang medali emas tingkat nasional.",
        image: "https://picsum.photos/seed/award/400/250",
        date: "12 Mei 2024",
        category: "prestasi",
        categoryLabel: "Prestasi"
    },
    {
        id: 3,
        title: "Peresmian Gedung Perpustakaan Baru Berbasis Digital",
        excerpt: "Fasilitas pembelajaran kini semakin lengkap dengan hadirnya perpustakaan digital modern.",
        image: "https://picsum.photos/seed/library/400/250",
        date: "10 Mei 2024",
        category: "fasilitas",
        categoryLabel: "Fasilitas"
    },
    {
        id: 4,
        title: "Kegiatan Bakti Sosial di Daerah Terpencil",
        excerpt: "Siswa-siswi mengikuti kegiatan bakti sosial memberikan bantuan kepada masyarakat di daerah terpencil.",
        image: "https://picsum.photos/seed/social/400/250",
        date: "8 Mei 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 5,
        title: "Pelatihan Guru Metode Pembelajaran Digital",
        excerpt: "Para guru mengikuti workshop pengembangan kompetensi dalam metode pembelajaran berbasis teknologi.",
        image: "https://picsum.photos/seed/training/400/250",
        date: "5 Mei 2024",
        category: "akademik",
        categoryLabel: "Akademik"
    },
    {
        id: 6,
        title: "Festival Seni dan Budaya Sekolah 2024",
        excerpt: "Acara tahunan yang menampilkan berbagai penampilan seni dan budaya dari siswa-siswi berbakat.",
        image: "https://picsum.photos/seed/festival/400/250",
        date: "3 Mei 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 7,
        title: "Juara 1 Lomba Debat Bahasa Inggris Tingkat Provinsi",
        excerpt: "Tim debat sekolah berhasil meraih juara pertama dalam kompetisi debat bahasa Inggris tingkat provinsi.",
        image: "https://picsum.photos/seed/debate/400/250",
        date: "1 Mei 2024",
        category: "prestasi",
        categoryLabel: "Prestasi"
    },
    {
        id: 8,
        title: "Renovasi Laboratorium Komputer dan Science",
        excerpt: "Peningkatan fasilitas laboratorium untuk mendukung pembelajaran praktikum yang lebih optimal.",
        image: "https://picsum.photos/seed/lab/400/250",
        date: "28 April 2024",
        category: "fasilitas",
        categoryLabel: "Fasilitas"
    },
    {
        id: 9,
        title: "Pengumuman Jadwal Ujian Akhir Semester Genap",
        excerpt: "Jadwal lengkap ujian akhir semester genap tahun ajaran 2023/2024 telah ditetapkan.",
        image: "https://picsum.photos/seed/exam/400/250",
        date: "25 April 2024",
        category: "pengumuman",
        categoryLabel: "Pengumuman"
    },
    {
        id: 10,
        title: "Workshop Kreativitas dan Entrepreneurship",
        excerpt: "Siswa mengikuti workshop pengembangan kreativitas dan jiwa kewirausahaan bersama praktisi bisnis.",
        image: "https://picsum.photos/seed/workshop/400/250",
        date: "22 April 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 11,
        title: "Prestasi Gemilang di Kompetisi Robotika Nasional",
        excerpt: "Tim robotika sekolah meraih juara 2 dalam kompetisi robotika tingkat nasional di Jakarta.",
        image: "https://picsum.photos/seed/robot/400/250",
        date: "20 April 2024",
        category: "prestasi",
        categoryLabel: "Prestasi"
    },
    {
        id: 12,
        title: "Implementasi Kurikulum Merdeka di Tahun Ajaran Baru",
        excerpt: "Sekolah akan menerapkan kurikulum merdeka secara penuh pada tahun ajaran mendatang.",
        image: "https://picsum.photos/seed/curriculum/400/250",
        date: "18 April 2024",
        category: "akademik",
        categoryLabel: "Akademik"
    },
    {
        id: 13,
        title: "Pembangunan Lapangan Olahraga Indoor Baru",
        excerpt: "Pembangunan gedung olahraga indoor untuk mendukung kegiatan ekstrakurikuler dan olahraga siswa.",
        image: "https://picsum.photos/seed/sports/400/250",
        date: "15 April 2024",
        category: "fasilitas",
        categoryLabel: "Fasilitas"
    },
    {
        id: 14,
        title: "Pengumuman Beasiswa Prestasi Tahun 2024",
        excerpt: "Pendaftaran beasiswa prestasi untuk siswa berprestasi akademik dan non-akademik telah dibuka.",
        image: "https://picsum.photos/seed/scholarship/400/250",
        date: "12 April 2024",
        category: "pengumuman",
        categoryLabel: "Pengumuman"
    },
    {
        id: 15,
        title: "Study Tour ke Museum dan Situs Bersejarah",
        excerpt: "Kegiatan wisata edukatif mengunjungi berbagai museum dan situs bersejarah di kota Jakarta.",
        image: "https://picsum.photos/seed/museum/400/250",
        date: "10 April 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 16,
        title: "Siswa Raih Emas di Olimpiade Fisika Internasional",
        excerpt: "Bangga! Siswa kami berhasil meraih medali emas pada ajang olimpiade fisika tingkat internasional.",
        image: "https://picsum.photos/seed/physics/400/250",
        date: "8 April 2024",
        category: "prestasi",
        categoryLabel: "Prestasi"
    },
    {
        id: 17,
        title: "Seminar Nasional Pendidikan Karakter",
        excerpt: "Sekolah menyelenggarakan seminar nasional tentang pentingnya pendidikan karakter di era digital.",
        image: "https://picsum.photos/seed/seminar/400/250",
        date: "5 April 2024",
        category: "akademik",
        categoryLabel: "Akademik"
    },
    {
        id: 18,
        title: "Launching Website Resmi Sekolah yang Baru",
        excerpt: "Website resmi sekolah dengan tampilan modern dan fitur lengkap telah resmi diluncurkan.",
        image: "https://picsum.photos/seed/website/400/250",
        date: "3 April 2024",
        category: "fasilitas",
        categoryLabel: "Fasilitas"
    },
    {
        id: 19,
        title: "Peringatan Hari Kartini dengan Berbagai Lomba",
        excerpt: "Memperingati Hari Kartini dengan mengadakan berbagai lomba bertema kepahlawanan dan emansipasi.",
        image: "https://picsum.photos/seed/kartini/400/250",
        date: "21 April 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 20,
        title: "Informasi Libur Semester dan Kalender Akademik",
        excerpt: "Pengumuman resmi jadwal libur semester genap dan kalender akademik tahun ajaran mendatang.",
        image: "https://picsum.photos/seed/calendar/400/250",
        date: "30 Maret 2024",
        category: "pengumuman",
        categoryLabel: "Pengumuman"
    },
    {
        id: 21,
        title: "Juara Umum Kompetisi Sains Madrasah Tingkat Kota",
        excerpt: "Prestasi membanggakan sebagai juara umum dalam kompetisi sains antar sekolah di tingkat kota.",
        image: "https://picsum.photos/seed/science/400/250",
        date: "28 Maret 2024",
        category: "prestasi",
        categoryLabel: "Prestasi"
    },
    {
        id: 22,
        title: "Pelatihan Public Speaking untuk Siswa",
        excerpt: "Program pengembangan skill public speaking dan presentasi untuk meningkatkan kepercayaan diri siswa.",
        image: "https://picsum.photos/seed/speaking/400/250",
        date: "25 Maret 2024",
        category: "akademik",
        categoryLabel: "Akademik"
    },
    {
        id: 23,
        title: "Kampanye Sekolah Hijau dan Peduli Lingkungan",
        excerpt: "Sekolah meluncurkan program go green dengan berbagai kegiatan peduli lingkungan.",
        image: "https://picsum.photos/seed/green/400/250",
        date: "22 Maret 2024",
        category: "kegiatan",
        categoryLabel: "Kegiatan Sekolah"
    },
    {
        id: 24,
        title: "Instalasi Panel Surya untuk Energi Terbarukan",
        excerpt: "Sekolah memasang panel surya sebagai langkah menuju energi bersih dan ramah lingkungan.",
        image: "https://picsum.photos/seed/solar/400/250",
        date: "20 Maret 2024",
        category: "fasilitas",
        categoryLabel: "Fasilitas"
    }
];

// Pagination settings
let currentPage = 1;
const itemsPerPage = 12;
let filteredNews = [...newsData];

// Function to filter news
function filterNews() {
    const category = document.getElementById('categoryFilter').value.toLowerCase();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredNews = newsData.filter(news => {
        const matchCategory = !category || news.category === category;
        const matchSearch = !searchTerm || news.title.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
    });

    currentPage = 1; // Reset to first page
    updateDisplay();
}

// Function to reset filters
function resetFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('searchInput').value = '';
    filteredNews = [...newsData];
    currentPage = 1;
    updateDisplay();
}

// Function to render news cards
function renderNews() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newsToShow = filteredNews.slice(startIndex, endIndex);

    const newsGrid = document.getElementById('newsGrid');
    const emptyState = document.getElementById('emptyState');

    if (newsToShow.length === 0) {
        newsGrid.innerHTML = '';
        emptyState.classList.remove('d-none');
        return;
    }

    emptyState.classList.add('d-none');

    newsGrid.innerHTML = newsToShow.map(news => `
        <div class="col-lg-4 col-md-6">
            <div class="news-card h-100 d-flex flex-column">
                <span class="category-badge">${news.categoryLabel}</span>
                <img src="${news.image}" class="news-img" alt="${news.title}">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="news-date mb-2">${news.date}</div>
                    <h5 class="card-title fw-bold mb-3">${news.title}</h5>
                    <p class="card-text text-muted flex-grow-1">${news.excerpt}</p>
                    <a href="detail-post.html" class="btn btn-sm btn-outline-primary mt-3 align-self-start rounded-pill">
                        Baca Selengkapnya
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to render pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    paginationHTML += `
        <a class="page-link-custom ${currentPage === 1 ? 'disabled' : ''}" 
           onclick="changePage(${currentPage - 1})">
            <i class="bi bi-chevron-left"></i>
        </a>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <a class="page-link-custom ${i === currentPage ? 'active' : ''}" 
                   onclick="changePage(${i})">
                    ${i}
                </a>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span class="page-link-custom disabled">...</span>`;
        }
    }

    // Next button
    paginationHTML += `
        <a class="page-link-custom ${currentPage === totalPages ? 'disabled' : ''}" 
           onclick="changePage(${currentPage + 1})">
            <i class="bi bi-chevron-right"></i>
        </a>
    `;

    pagination.innerHTML = paginationHTML;
}

// Function to update result count
function updateResultCount() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredNews.length);

    document.getElementById('resultCount').textContent = filteredNews.length === 0 ? 0 : `${startIndex + 1}-${endIndex}`;
    document.getElementById('totalCount').textContent = filteredNews.length;
}

// Function to change page
function changePage(page) {
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    updateDisplay();

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to update all display elements
function updateDisplay() {
    renderNews();
    renderPagination();
    updateResultCount();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Initialize display
    updateDisplay();

    // Filter form submit
    document.getElementById('filterForm').addEventListener('submit', function (e) {
        e.preventDefault();
        filterNews();
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetFilters);

    // Category filter change
    document.getElementById('categoryFilter').addEventListener('change', filterNews);

    // Search input with debounce
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterNews, 500);
    });
});
