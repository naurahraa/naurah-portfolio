# Naurah Rahadatul Aisyi — Portfolio

Portfolio pribadi buat nunjukin kerjaan sebagai UI/UX Designer & Informatics Student di Universitas Gunadarma. Dibangun dari nol pake HTML/CSS/JS vanilla, tanpa framework — fokus ke desain sistem yang rapi dan performa yang ringan.

**🔗 Live site:** [naurahraa-portfolio.vercel.app](https://naurahraa-portfolio.vercel.app)

---

## Tentang

Portfolio ini nampilin proyek-proyek UI/UX design dari berbagai kompetisi mahasiswa (GEMASTIK, Hology, Arkavidia, TechnoFair, MI FEST, Find IT!) dan proyek pengembangan full-stack pribadi. Tiap case study ditulis berdasarkan alur riset asli: problem statement, riset, persona, competitor analysis, sampai reflection — bukan cuma showcase tampilan visual doang.

---

## Struktur Halaman

- **Home** — hero, snippet about, featured projects, toolbox, contact
- **About** — timeline kompetisi, skills, lightbox sertifikat
- **Projects** — listing semua proyek
- **Project detail** — 1 halaman per proyek dengan struktur case study lengkap:
  - Career
  - GlucoCheck
  - SiviTas
  - Lumora
- **Azzam Jaya** — halaman khusus proyek pengembangan (full-stack), beda struktur dari case study desain

---

## Tech Stack

- **HTML/CSS/JS vanilla** — nggak pake framework, biar ringan & langsung deploy tanpa build process
- **CSS custom properties (design tokens)** — warna, tipografi, spacing terpusat di `tokens.css`
- **Deployment:** Vercel, auto-deploy dari GitHub

### Struktur file utama

```
├── index.html
├── about.html
├── projects.html
├── career.html
├── glucocheck.html
├── sivitas.html
├── lumora.html
├── azzam-jaya.html
├── css/
│   ├── tokens.css          # design tokens (warna, font, spacing)
│   ├── reset.css
│   ├── components.css      # komponen reusable (button, navbar, dll)
│   ├── home.css
│   ├── about.css
│   ├── project-detail.css  # shared, dipake semua case study
│   └── dev-project.css     # khusus halaman Azzam Jaya
└── js/
    ├── main.js
    └── animations.js
```

---

## Catatan Konten

- Label section (Problem, Research, Solution, dst) ditulis dalam **Bahasa Inggris**
- Isi konten/body text ditulis dalam **Bahasa Indonesia**
- Setiap keputusan desain di section Solution dijelasin berdasarkan rasional riset ("kenapa fitur ini ada"), bukan sekadar deskripsi fitur

---

## Menjalankan di Lokal

Karena murni HTML/CSS/JS statis, nggak perlu install dependency apa pun:

```bash
git clone https://github.com/naurahraa/naurah-portfolio.git
cd naurah-portfolio
```

Buka `index.html` langsung di browser, atau pake Live Server extension (VS Code) buat auto-reload pas edit.

---

## Kontak

**Naurah Rahadatul Aisyi**
UI/UX Designer · Informatics Student, Universitas Gunadarma

[Portfolio](https://naurahraa-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/naurahaisyi/) · [Instagram](https://instagram.com/naurahraa)