# RE:GROWTH — Chaos Edition (Prototipe Cerita Interaktif)

Pemain adalah CMO baru Ruang Tumbuh, platform edtech bisnis yang menghadapi krisis kas parah. CEO Damar dan Dewan Direksi memberi waktu **sepuluh minggu kerja (50 hari kerja)** untuk melakukan terobosan luar biasa sebelum vonis akhir dijatuhkan.

### Prolog Hari Pertama & Cabang Bencana
Sebelum menginjakkan kaki di ruang rapat, pemain tiba di pelataran depan menara perkantoran (`assets/building-exterior.png`). Pemain dihadapkan pada 3 pilihan:
1. **Langsung masuk lobi** menemui Damar dan Dewan Direksi untuk memulai 50 hari kerja.
2. **Beli kopi keliling (starling)** di trotoar depan gedung bersama Bang Udin (+Insight, +Chaos) sebelum naik ke kantor.
3. **Santai sebat ngerokok di parkiran mobil** (`assets/parking-lot.png`): Membawa pada dialog komedi dengan satpam gedung, puntung rokok menyambar jeriken tiner dan kardus arsip pajak lama, memicu kebakaran dahsyat (`assets/burning-building.png`) dan menghasilkan **★ SECRET BAD ENDING: Firestarter CMO (Abu Arang Korporat)**!

### Alur 10 Minggu Cerita & Image Transitions
Setiap bab dan perjalanan penting kini dilengkapi dengan **Cutscene Transisi Visual** menggunakan latar gambar unik:
- **Transisi 1 (OTW Senopati)**: `assets/street-traffic.png` — Membelah kemacetan Jakarta naik taksi.
- **Minggu 2 (Kafe Senopati)**: `assets/senopati-cafe.png` — Nguping Aldi si rival CMO rompi Patagonia (latar kafe khusus, bukan kafe biasa).
- **Transisi 2 (36 Jam ke Brazil)**: `assets/airplane-flight.png` — Pesawat melintasi awan menembus 3 benua.
- **Transisi 3 (Tiba di Favela)**: `assets/brazil-favela.png` — Pemandangan bukit favela São Paulo yang semarak.
- **Minggu 5 (Markas Thiago)**: `assets/brazil-favela.png` — Ruko açaí markas dev capoeira & ayam blockchain.
- **Transisi 4 (OTW Tech Expo)**: `assets/street-traffic.png` — Mobil bak Kevin membawa tangga proyek.
- **Minggu 7 (Sabotase Expo)**: `assets/tech-expo-stage.png` — Panggung megah expo ICE BSD berlayar LED raksasa.
- **Transisi 5 (Lift Penthouse)**: `assets/penthouse-lounge.png` — Lift kaca melesat ke lantai 40.
- **Minggu 9 (Meja Poker Bima)**: `assets/penthouse-lounge.png` — Private lounge mewah berlatar city lights Jakarta.

### 4 Akhir Cerita Utama (+ 1 Secret Bad Ending)
1. **★ PERFECT ENDING ★: Galactic Unicorn Ascendance** — Intelijen Senopati mematikan kompetitor, dev Brazil memangkas biaya 90%, dan armada emak-emak affiliate menguasai pasar nasional. Bima menggelontorkan pendanaan Seri B $10M tanpa audit dan kamu dinobatkan sebagai *Supreme Overlord of Growth*.
2. **NORMAL ENDING (1/3): The Brazilian Pivot** — Kantor Jakarta digerebek dinas akibat demo emak-emak, namun cabang Brazil meledak jadi kartel edtech tari samba & açaí terbesar se-Amerika Latin. Seluruh tim pindah ke pantai Copacabana.
3. **NORMAL ENDING (2/3): Viral Disaster** — Aksi sabotase expo dan video klarifikasi berujung bumerang. Brand di-cancel netizen se-Indonesia, kantor disegel, dan Damar banting setir menjadi host podcast drama 24 jam.
4. **NORMAL ENDING (3/3): Corporate Zombie** — Bermain terlalu aman atau memotong budget membabi buta berujung akuisisi oleh konglomerat mi instan. Ruang Tumbuh dirombak jadi divisi admin kupon hadiah belanja.
5. **★ SECRET BAD ENDING ★: Firestarter CMO** — Membakar habis gedung kantor di hari pertama hanya gara-gara rokok di dekat tiner.

### Karakter & Visual Sprites Khusus
Setiap karakter kini memiliki sprite visual berkarakter unik dan tidak lagi menggunakan aset yang berulang:
- **Aldi (`assets/aldi.png`)**: CMO sombong unicorn kompetitor CakapKilat dengan rompi Patagonia khas tech-bro.
- **Madam Aurel (`assets/aurel.png`)**: Spiritual HRD bergaun etnik modern pembawa dupa ruwat server.
- **Thiago (`assets/thiago.png`)**: Kepala cabang favela Brazil berkemeja tropis dan penikmat açaí.
- **Kevin (`assets/kevin.png`)**: Anak magang hacker ber-lanyard ID "INTERN" dan jaket cyber.
- **Pak Slamet (`assets/satpam.png`)**: Satpam parkiran berseragam dinas safari navy lengkap dengan lencana perisai emas.
- **Bang Udin (`assets/starling.png`)**: Barista kopi keliling trotoar bercelemek hijau dan handuk good morning di bahu.
- **Damar (`assets/founder.png`, `assets/founder-worried.png`, `assets/founder-shock.png`)**: CEO Ruang Tumbuh dengan pose anime shock histeris (kedua tangan memegang kepala, mata putih melotot, mulut ternganga teriak) saat gedung kantor terbakar.
- **Karakter Pendukung Lainnya**: Mira (Finance), Rani (Sales), Sarah (CS), Bima (Investor Penthouse).

### Musik & Teknis
- Buka `index.html` langsung di browser: `file:///C:/Users/andre/growthos-vault/prototypes/growth-survival/index.html`.
- Musik latar: `assets/ambitions-pulse.mp3` (*Ambition's Pulse*) di layar awal dan beralih secara *smooth crossfade* ke `assets/strategic-pause.mp3` (*Strategic Pause*) saat cerita dimulai.
- Efek suara interaksi dan transisi dikelola via Web Audio API di `sound.js`.

