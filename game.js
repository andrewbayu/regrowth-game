// Sepuluh minggu kerja (50 hari kerja) untuk menyelamatkan Ruang Tumbuh.
// Setiap keputusan membuka konsekuensi liar, intelijen, manuver internasional, dan 4 ending unik (+ 1 Secret Bad Ending).

const weeks = [
  // MINGGU 1: Sidang Direksi & Temuan Gelap
  {
    title: 'Sidang direksi & kebocoran dana',
    speaker: 'Damar · CEO',
    sprite: 'founder',
    background: 'boardroom',
    intro: 'Pintu ruang sidang lantai 12 tertutup rapat. Di layar proyektor terpampang fakta mengerikan: kas hanya cukup untuk 50 hari kerja, tagihan misterius $15.000/bulan mengalir ke cabang antah-berantah di São Paulo, Brazil, dan kompetitor mulai membajak pengajar terbaik.',
    dialogue: 'Semua mata direksi sekarang menatapmu. BoD menuntut terobosan gila dalam 10 minggu ke depan. Manuver pertamamu apa?',
    question: 'Di depan dewan direksi, langkah pertama apa yang kamu ambil untuk membongkar krisis ini?',
    variants: [{
      body: 'Di meja bundar, jajaran direktur menuntut kejelasan ke mana larinya dana perusahaan dan bagaimana menghentikan pendarahan kas.',
      dialogue: 'Kita nggak bisa pakai cara normatif lagi. Pilih satu manuver berani buat minggu pertama.',
      options: [
        [
          'Audit aliran dana misterius ke cabang Brazil dan telusuri siapa yang mengesahkannya.',
          { cash: -3, insight: 14, chaos: 10, team: 4 },
          'Kamu menemukan dokumen transfer rahasia ke São Paulo berkedok biaya lisensi software.'
        ],
        [
          'Tugaskan Kevin (anak magang) menyusup ke Discord rahasia kompetitor CakapKilat.',
          { cash: -2, insight: 12, chaos: 16, team: 6 },
          'Kevin berhasil menyusup memakai avatar anime dan mulai memantau chat tim marketing lawan.'
        ],
        [
          'Pangkas semua budget iklan berbayar dan hentikan fasilitas kopi susu di pantry.',
          { cash: 10, team: -14, trust: -4, chaos: -6 },
          'Kas sedikit tertahan, tapi tim sales mulai mogok kerja karena kekurangan asupan kafein.'
        ]
      ]
    }]
  },

  // MINGGU 2: Operasi Stalking di Kafe Senopati
  {
    title: 'Operasi stalking di kafe Senopati',
    speaker: 'Aldi · CMO CakapKilat',
    sprite: 'aldi',
    background: 'senopati-cafe',
    intro: 'Intelijen Kevin mengabarkan Aldi Pratama—CMO sombong dari unicorn kompetitor yang selalu pakai rompi Patagonia—sedang nongkrong di kafe artisanal Senopati sambil flexing pitch deck rahasia kepada investor asing. Kamu dan Damar meluncur ke lokasi.',
    variants: [
      {
        body: 'Audit dana Brazil membuka petunjuk bahwa CakapKilat mencoba membajak teknologi yang sama. Kamu mengintai Aldi dari balik tanaman hias monstera.',
        dialogue: 'Bro, Ruang Tumbuh itu fundamentally obsolete. Bulan depan kita luncurkan fitur AI Matrix yang bikin mereka mati kutu.',
        options: [
          [
            'Menyamar jadi barista, antar oat latte ke mejanya sambil diam-diam melirik laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Duduk di meja sebelah dan pura-pura telepon keras-keras soal AI Quantum palsu.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pura-pura pingsan di kasir agar kamu bisa menyambar lembaran catatan Aldi.',
            { insight: 12, chaos: 24, trust: -8, cash: -5 },
            'Catatan didapat lewat drama teatrikal Damar, meski satpam kafe memandang curiga.'
          ]
        ]
      },
      {
        body: 'Kevin menyadap jadwal meeting Aldi di Senopati. Kamu tiba tepat saat Aldi membuka slide presentasi keuangannya.',
        dialogue: 'Startup lokal lain cuma bakar duit tanpa retensi. CakapKilat yang pegang kendali pasar edtech Indonesia.',
        options: [
          [
            'Menyamar jadi barista, antar oat latte ke mejanya sambil diam-diam melirik laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Duduk di meja sebelah dan pura-pura telepon keras-keras soal AI Quantum palsu.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pura-pura pingsan di kasir agar kamu bisa menyambar lembaran catatan Aldi.',
            { insight: 12, chaos: 24, trust: -8, cash: -5 },
            'Catatan didapat lewat drama teatrikal Damar, meski satpam kafe memandang curiga.'
          ]
        ]
      },
      {
        body: 'Tim yang lemas karena kopi pantry dipangkas diajak Damar mengintai kompetitor di Senopati untuk membalas dendam.',
        dialogue: 'Ngapain kalian lirik-lirik meja gue? Pelanggan kalian minggu depan bakal pindah ke aplikasi kita semua.',
        options: [
          [
            'Menyamar jadi barista, antar oat latte ke mejanya sambil diam-diam melirik laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Duduk di meja sebelah dan pura-pura telepon keras-keras soal AI Quantum palsu.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pura-pura pingsan di kasir agar kamu bisa menyambar lembaran catatan Aldi.',
            { insight: 12, chaos: 24, trust: -8, cash: -5 },
            'Catatan didapat lewat drama teatrikal Damar, meski satpam kafe memandang curiga.'
          ]
        ]
      }
    ]
  },

  // MINGGU 3: Ruwat Server & Audit Dukun Korporat
  {
    title: 'Ruwat server & audit dukun korporat',
    speaker: 'Madam Aurel · Spiritual HRD',
    sprite: 'aurel',
    background: 'meeting',
    intro: 'Komisaris utama menolak menyetujui anggaran darurat sebelum Madam Aurel membersihkan ruang server kantor. Konon ada energi gaib yang membuat bounce rate tembus 89%. Ruangan server kini dipenuhi asap dupa dan bunga tujuh rupa.',
    variants: [
      {
        body: 'Berbekal intel Senopati, kamu berniat membenahi landing page, namun ruang server malah ditutup kain hitam oleh Madam Aurel.',
        dialogue: 'Aura kas kalian tersumbat cakra gelap di server nomor empat! Kalau mau sales meledak, kabel fiber optic harus dimandikan air kembang!',
        options: [
          [
            'Ikuti ritual penuh: mandikan rak server dengan air kembang dan pasang dupa fengshui.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Tukar dupa dengan vape rasa berries dan sebut grafik analitik sebagai ramalan data modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak mentah-mentah ritual klenik dan usir Madam Aurel keluar dari ruang server.',
            { team: 14, trust: -16, chaos: -10, cash: 0 },
            'Tim developer bersorak gembira, tapi komisaris mengancam membekukan operasional.'
          ]
        ]
      },
      {
        body: 'Geger pengintaian Senopati membuat komisaris panik dan mengundang Madam Aurel untuk meruwat seluruh lantai kantor.',
        dialogue: 'Ada hawa mata-mata dan sengkolo di kantor ini! Kita harus bersihkan aura ruang server sebelum melangkah.',
        options: [
          [
            'Ikuti ritual penuh: mandikan rak server dengan air kembang dan pasang dupa fengshui.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Tukar dupa dengan vape rasa berries dan sebut grafik analitik sebagai ramalan data modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak mentah-mentah ritual klenik dan usir Madam Aurel keluar dari ruang server.',
            { team: 14, trust: -16, chaos: -10, cash: 0 },
            'Tim developer bersorak gembira, tapi komisaris mengancam membekukan operasional.'
          ]
        ]
      },
      {
        body: 'Pantry yang dingin kini bercampur aroma dupa. Mira meminta keputusan cepat agar anggaran server tidak diblokir.',
        dialogue: 'Jangan main logika di depan komisaris. Ruang server ini butuh restu kosmik sebelum kas dicairkan.',
        options: [
          [
            'Ikuti ritual penuh: mandikan rak server dengan air kembang dan pasang dupa fengshui.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Tukar dupa dengan vape rasa berries dan sebut grafik analitik sebagai ramalan data modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak mentah-mentah ritual klenik dan usir Madam Aurel keluar dari ruang server.',
            { team: 14, trust: -16, chaos: -10, cash: 0 },
            'Tim developer bersorak gembira, tapi komisaris mengancam membekukan operasional.'
          ]
        ]
      }
    ]
  },

  // MINGGU 4: Tiket Ekonomi & Persiapan ke Brazil
  {
    title: 'Tiket darurat & persiapan ke Brazil',
    speaker: 'Mira · Finance Director',
    sprite: 'finance-angry',
    background: 'campaign-office',
    intro: 'Mira mendapati bank di São Paulo menolak pembekuan rekening secara remote. Jika tidak diverifikasi langsung di lokasi, denda $30.000 akan ditarik paksa. Mira baru saja membelikan tiket pesawat kelas ekonomi 36 jam dengan tiga kali transit untukmu berangkat malam ini.',
    variants: [
      {
        body: 'Dana darurat cair, dan Mira langsung menyodorkan e-ticket promo maskapai tanpa bagasi di mejamu.',
        dialogue: 'Tiketmu sudah kubeli, berangkat malam ini! Transit Malaysia, Qatar, lanjut Ethiopia. Siapkan strategimu sebelum naik pesawat!',
        options: [
          [
            'Terima tiket ekonomi itu dan kemas seluruh berkas audit serta draf deck bilingual untuk digarap di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Minta tim riset jadwalkan pertemuan kilat dengan manajer VC Afrika-Latam di lounge bandara transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam gesek kartu kredit operasional kantor untuk upgrade tiket ke Business Class sebelum ke bandara.',
            { cash: -18, team: -8, trust: -6, chaos: 5 },
            'Tiketmu resmi berubah jadi kursi rebahan mewah, namun notifikasi SMS banking langsung membunyikan HP Mira.'
          ]
        ]
      },
      {
        body: 'Berbekal restu dupa modern, kamu bersiap menelusuri sumber kebocoran dana di belahan bumi lain.',
        dialogue: 'Cuma ada tiket promo ekonomi 36 jam. Jangan banyak komplain, siapkan amunisimu sebelum terbang ke Brazil!',
        options: [
          [
            'Terima tiket ekonomi itu dan kemas seluruh berkas audit serta draf deck bilingual untuk digarap di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Minta tim riset jadwalkan pertemuan kilat dengan manajer VC Afrika-Latam di lounge bandara transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam gesek kartu kredit operasional kantor untuk upgrade tiket ke Business Class sebelum ke bandara.',
            { cash: -18, team: -8, trust: -6, chaos: 5 },
            'Tiketmu resmi berubah jadi kursi rebahan mewah, namun notifikasi SMS banking langsung membunyikan HP Mira.'
          ]
        ]
      },
      {
        body: 'Hubungan dengan komisaris tegang, sehingga kamu harus membuktikan hasil nyata langsung dari cabang Brazil.',
        dialogue: 'Kalau kamu pulang dari Brazil dengan tangan kosong, BoD bakal langsung memecat kita berdua. Apa persiapanmu sebelum ke bandara?',
        options: [
          [
            'Terima tiket ekonomi itu dan kemas seluruh berkas audit serta draf deck bilingual untuk digarap di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Minta tim riset jadwalkan pertemuan kilat dengan manajer VC Afrika-Latam di lounge bandara transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam gesek kartu kredit operasional kantor untuk upgrade tiket ke Business Class sebelum ke bandara.',
            { cash: -18, team: -8, trust: -6, chaos: 5 },
            'Tiketmu resmi berubah jadi kursi rebahan mewah, namun notifikasi SMS banking langsung membunyikan HP Mira.'
          ]
        ]
      }
    ]
  },

  // MINGGU 5: Krisis Favela São Paulo
  {
    title: 'Krisis favela São Paulo',
    speaker: 'Thiago · Head of Brazil',
    sprite: 'thiago',
    background: 'brazil-favela',
    intro: 'Alamat kantor cabang Brazil ternyata sebuah warung açaí di pinggiran favela São Paulo. Thiago menyambutmu dengan celana pantai dan es kelapa. Di belakang ruko, ada 15 programmer lokal yang merangkap penari capoeira dan peternak ayam digital.',
    variants: [
      {
        body: 'Setelah 36 jam menggarap draf deck bilingual di kursi pesawat ekonomi, kamu melangkah masuk ke markas absurd Thiago di bawah terik matahari Brazil.',
        dialogue: 'Ola amigo CMO! Santai dulu, minum açaí. Kita memang nggak jualan kursus kaku, tapi platform capoeira & ayam blockchain kita punya margin 400%!',
        options: [
          [
            'Bentuk aliansi total: jadikan tim favela Thiago sebagai sayap rahasia dev murah dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Paksa sita semua kas tunai di brankas Thiago dan tutup operasional cabang secara permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Eksploitasi merchandise açaí dan IP ayam aduan digital Thiago untuk dijual ke pasar Jakarta.',
            { cash: 10, chaos: 16, trust: 4, insight: 8 },
            'Merchandise açaí viral di kafe-kafe hipster Jakarta dan memberi suntikan pendapatan segar.'
          ]
        ]
      },
      {
        body: 'Manajer VC yang kamu temui di lounge bandara transit Ethiopia bahkan sudah menelepon Thiago untuk memuji terobosannya.',
        dialogue: 'Bisnis di favela itu soal respek dan kreativitas. Bantu gue kembangkan ini, atau uangnya balik ke Jakarta.',
        options: [
          [
            'Bentuk aliansi total: jadikan tim favela Thiago sebagai sayap rahasia dev murah dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Paksa sita semua kas tunai di brankas Thiago dan tutup operasional cabang secara permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Eksploitasi merchandise açaí dan IP ayam aduan digital Thiago untuk dijual ke pasar Jakarta.',
            { cash: 10, chaos: 16, trust: 4, insight: 8 },
            'Merchandise açaí viral di kafe-kafe hipster Jakarta dan memberi suntikan pendapatan segar.'
          ]
        ]
      },
      {
        body: 'Mendarat segar bugar berkat kursi Business Class, kamu menyambangi ruko Thiago sementara ponselmu penuh 27 pesan kemarahan Mira.',
        dialogue: 'Amigo, daripada pusing mikirin corporate overhead, gabungin kekuatan dev kita!',
        options: [
          [
            'Bentuk aliansi total: jadikan tim favela Thiago sebagai sayap rahasia dev murah dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Paksa sita semua kas tunai di brankas Thiago dan tutup operasional cabang secara permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Eksploitasi merchandise açaí dan IP ayam aduan digital Thiago untuk dijual ke pasar Jakarta.',
            { cash: 10, chaos: 16, trust: 4, insight: 8 },
            'Merchandise açaí viral di kafe-kafe hipster Jakarta dan memberi suntikan pendapatan segar.'
          ]
        ]
      }
    ]
  },

  // MINGGU 6: Pengepungan Emak-Emak Affiliate
  {
    title: 'Pengepungan emak-emak affiliate',
    speaker: 'Sarah · CS Lead',
    sprite: 'success-angry',
    background: 'office',
    intro: 'Tiba kembali di Jakarta, lobi kantor Ruang Tumbuh sudah diduduki 75 emak-emak affiliate bersenjata panci presto dan mikrofon karaoke. Mereka murka karena pencairan komisi tertunda 2 jam akibat perbedaan waktu Brazil.',
    variants: [
      {
        body: 'Kabar aliansi Brazil belum sempat diumumkan saat suara dangdut koplo menggelegar dari speaker lobi kantor.',
        dialogue: 'CMO tolong! Mereka mendirikan tenda, membakar sate di parkiran, dan mengancam memboikot grup WA arisan keluarga se-Nusantara!',
        options: [
          [
            'Naik ke atas meja, ambil mic, dan rekrut mereka jadi pasukan buzzer siber penyerang kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng premium dan paket sembako gratis dari sisa kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur lewat pintu darurat bersama Damar dan biarkan Bagas dari tim Product bernegosiasi.',
            { team: -16, trust: -12, chaos: 14, cash: 2 },
            'Bagas disandera emak-emak selama 8 jam untuk mengajari mereka bikin transisi video TikTok.'
          ]
        ]
      },
      {
        body: 'Uang tunai dari Brazil berhasil meredakan emosi sementara, namun ketua rombongan emak-emak meminta kepastian komisi.',
        dialogue: 'Kalau hari ini komisi nggak cair dobel, kita bakal live TikTok di depan kantor sambil nangis-nangis!',
        options: [
          [
            'Naik ke atas meja, ambil mic, dan rekrut mereka jadi pasukan buzzer siber penyerang kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng premium dan paket sembako gratis dari sisa kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur lewat pintu darurat bersama Damar dan biarkan Bagas dari tim Product bernegosiasi.',
            { team: -16, trust: -12, chaos: 14, cash: 2 },
            'Bagas disandera emak-emak selama 8 jam untuk mengajari mereka bikin transisi video TikTok.'
          ]
        ]
      },
      {
        body: 'Kehebohan di lobi mulai diliput akun gosip lokal. Kamu harus memilih manuver tercepat untuk meredam kekacauan.',
        dialogue: 'Jangan biarkan mereka merekam wajah Damar! Pikirkan solusi sebelum polisi pamong praja datang!',
        options: [
          [
            'Naik ke atas meja, ambil mic, dan rekrut mereka jadi pasukan buzzer siber penyerang kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng premium dan paket sembako gratis dari sisa kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur lewat pintu darurat bersama Damar dan biarkan Bagas dari tim Product bernegosiasi.',
            { team: -16, trust: -12, chaos: 14, cash: 2 },
            'Bagas disandera emak-emak selama 8 jam untuk mengajari mereka bikin transisi video TikTok.'
          ]
        ]
      }
    ]
  },

  // MINGGU 7: Sabotase Panggung Tech Expo Asia
  {
    title: 'Sabotase panggung Tech Expo Asia',
    speaker: 'Kevin · Anak Magang',
    sprite: 'kevin',
    background: 'tech-expo-stage',
    intro: 'CakapKilat menggelar peluncuran akbar di Indonesia Tech Expo ICE BSD. Aldi dijadwalkan berpidato di hadapan 2.000 investor global. Kamu tidak punya tiket VIP, tapi Kevin membawa dua rompi proyek oranye dan tangga lipat aluminium.',
    variants: [
      {
        body: 'Armada emak-emak affiliate sudah siap siaga di medsos menunggu komando dari ruang expo.',
        dialogue: 'Bang, kalau kita pakai rompi oranye sambil nenteng tangga lipat, satpam ICE BSD nggak bakal berani nanya tiket. Backstage aman!',
        options: [
          [
            'Susup ke control room dan putar rekaman sadapan Aldi Senopati di layar proyektor raksasa.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mikrofon panggung utama saat lampu padam dan orasikan keunggulan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di samping toilet VIP expo dengan banner kain manual.',
            { trust: 10, cash: -4, team: 6, insight: 8 },
            'Pendekatan gerilya elegan; kamu berhasil mencegat tiga investor institusi yang sedang antre ke toilet.'
          ]
        ]
      },
      {
        body: 'Kevin sudah memetakan jalur kabel audio panggung utama dari bawah panggung expo.',
        dialogue: 'Pilih taktikmu, Bang. Mau kita hancurkan mereka di panggung atau kita rampas panggungnya?',
        options: [
          [
            'Susup ke control room dan putar rekaman sadapan Aldi Senopati di layar proyektor raksasa.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mikrofon panggung utama saat lampu padam dan orasikan keunggulan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di samping toilet VIP expo dengan banner kain manual.',
            { trust: 10, cash: -4, team: 6, insight: 8 },
            'Pendekatan gerilya elegan; kamu berhasil mencegat tiga investor institusi yang sedang antre ke toilet.'
          ]
        ]
      },
      {
        body: 'Bagas yang baru bebas dari sandera emak-emak ikut membantu memegang tangga proyek.',
        dialogue: 'Jangan sampai ketangkap polisi expo ya. Kita butuh momentum ini buat membalikkan keadaan.',
        options: [
          [
            'Susup ke control room dan putar rekaman sadapan Aldi Senopati di layar proyektor raksasa.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mikrofon panggung utama saat lampu padam dan orasikan keunggulan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di samping toilet VIP expo dengan banner kain manual.',
            { trust: 10, cash: -4, team: 6, insight: 8 },
            'Pendekatan gerilya elegan; kamu berhasil mencegat tiga investor institusi yang sedang antre ke toilet.'
          ]
        ]
      }
    ]
  },

  // MINGGU 8: Perang PR & Gorengan Jagat Maya
  {
    title: 'Perang PR & gorengan jagat maya',
    speaker: 'Rani · Sales Lead',
    sprite: 'sales-angry',
    background: 'night',
    intro: 'Kekacauan di expo memicu serangan balasan. Akun gosip anonim @StartupSengsara di Twitter membocorkan rekaman internal Ruang Tumbuh dan memicu trending topic #BoikotRuangTumbuh. War room malam hari berlangsung tegang.',
    variants: [
      {
        body: 'Skandal Senopati dan expo meledak di lini masa. Rani memperlihatkan layar dashboard dengan notifikasi cancel beruntun.',
        dialogue: 'Trending nomor satu di X/Twitter! Klien korporat menelepon tiap 30 detik! Kita harus counter-attack sebelum bursa saham buka besok pagi!',
        options: [
          [
            'Kerahkan armada 75 emak-emak affiliate untuk membajak algoritma dengan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar berbaju hitam polos di depan tembok semen tanpa filter.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Goreng balik situasi: umumkan seluruh keributan adalah Social Experiment peluncuran fitur baru.',
            { chaos: 28, trust: -10, insight: 8, cash: 10 },
            'Netizen geram tapi penasaran; server web sempat down dihantam lonjakan traffic 600%.'
          ]
        ]
      },
      {
        body: 'Komentar warganet makin liar mengaitkan Ruang Tumbuh dengan kultus ruwat server dan ayam Brazil.',
        dialogue: 'Pilih narasi kita sekarang! Kita mau main aman, main air mata, atau bakar panggung sekalian?',
        options: [
          [
            'Kerahkan armada 75 emak-emak affiliate untuk membajak algoritma dengan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar berbaju hitam polos di depan tembok semen tanpa filter.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Goreng balik situasi: umumkan seluruh keributan adalah Social Experiment peluncuran fitur baru.',
            { chaos: 28, trust: -10, insight: 8, cash: 10 },
            'Netizen geram tapi penasaran; server web sempat down dihantam lonjakan traffic 600%.'
          ]
        ]
      },
      {
        body: 'Mira menghitung potensi kerugian jika kampanye cancel culture ini terus bertahan hingga akhir pekan.',
        dialogue: 'Satu langkah keliru malam ini, perusahaan selesai sebelum minggu kesembilan.',
        options: [
          [
            'Kerahkan armada 75 emak-emak affiliate untuk membajak algoritma dengan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar berbaju hitam polos di depan tembok semen tanpa filter.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Goreng balik situasi: umumkan seluruh keributan adalah Social Experiment peluncuran fitur baru.',
            { chaos: 28, trust: -10, insight: 8, cash: 10 },
            'Netizen geram tapi penasaran; server web sempat down dihantam lonjakan traffic 600%.'
          ]
        ]
      }
    ]
  },

  // MINGGU 9: Meja Poker Investor Bima
  {
    title: 'Meja poker investor Bima',
    speaker: 'Bima · Investor',
    sprite: 'investor',
    background: 'penthouse-lounge',
    intro: 'Hari kerja ke-45. Bima mengundangmu dan Damar ke private lounge tertutup lantai 40 gedung pencakar langit Jakarta. Di atas meja kaca, ia meletakkan selembar cek kosong dan selembar tiket one-way ke Rio de Janeiro.',
    variants: [
      {
        body: 'Setelah lolos dari amukan perang media, Bima menatapmu tajam sambil mengisap cerutu mahal.',
        dialogue: 'Kalian gila. Tapi dalam bisnis, kegilaan yang terukur itu mahal. Pilih: ambil cek ini tapi serahkan 51% kendali ke gue, atau buktikan kartu as kalian.',
        options: [
          [
            'Tolak cek Bima! Tunjukkan sinergi data rahasia Senopati, dev favela Brazil, dan tentara emak-emak.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek kosong Bima dan tandatangani surat penyerahan 51% saham mayoritas perusahaan.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima adu tebak metrik churn rate: yang kalah harus menanggung biaya operasional kantor.',
            { chaos: 22, insight: 12, team: 8, cash: 6 },
            'Bima tertawa lepas menyukai nyalimu dan menyetujui dana talangan tanpa campur tangan dewan.'
          ]
        ]
      },
      {
        body: 'Bima menyandarkan punggungnya di sofa kulit sambil menatap pemandangan lampu kota Jakarta.',
        dialogue: 'Banyak founder jago bikin deck, tapi sedikit yang berani main di lumpur kayak lo. Apa tawaran pamungkasmu?',
        options: [
          [
            'Tolak cek Bima! Tunjukkan sinergi data rahasia Senopati, dev favela Brazil, dan tentara emak-emak.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek kosong Bima dan tandatangani surat penyerahan 51% saham mayoritas perusahaan.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima adu tebak metrik churn rate: yang kalah harus menanggung biaya operasional kantor.',
            { chaos: 22, insight: 12, team: 8, cash: 6 },
            'Bima tertawa lepas menyukai nyalimu dan menyetujui dana talangan tanpa campur tangan dewan.'
          ]
        ]
      },
      {
        body: 'Damar duduk gemetar di sampingmu melihat angka nol di atas cek yang disiapkan Bima.',
        dialogue: 'Waktu kalian tinggal 5 hari kerja. Keputusan di meja ini menentukan masa depan kalian.',
        options: [
          [
            'Tolak cek Bima! Tunjukkan sinergi data rahasia Senopati, dev favela Brazil, dan tentara emak-emak.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek kosong Bima dan tandatangani surat penyerahan 51% saham mayoritas perusahaan.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima adu tebak metrik churn rate: yang kalah harus menanggung biaya operasional kantor.',
            { chaos: 22, insight: 12, team: 8, cash: 6 },
            'Bima tertawa lepas menyukai nyalimu dan menyetujui dana talangan tanpa campur tangan dewan.'
          ]
        ]
      }
    ]
  },

  // MINGGU 10: Rapat BoD Hari Penghakiman
  {
    title: 'Rapat BoD hari penghakiman',
    speaker: 'Damar · CEO',
    sprite: 'founder',
    background: 'boardroom',
    intro: 'Hari kerja ke-50. Kamu kembali ke ruang rapat direksi lantai 12 tempat semua bermula. Seluruh jajaran hadir: Mira, Bagas, Sarah, Rani, Naya, Kevin, Madam Aurel, Bima, hingga layar video call dari cabang São Paulo. Waktu evaluasi telah habis.',
    variants: [
      {
        body: 'Palu sidang direksi diletakkan di tengah meja. Semua mata tertuju pada layar presentasi akhirmu.',
        dialogue: 'Lima puluh hari yang luar biasa kacau, tapi kita berhasil sampai di sini. Sampaikan rekomendasi pamungkasmu ke Dewan Direksi.',
        options: [
          [
            'Paparkan portofolio ekosistem terpadu: efisiensi dev Brazil, armada komunitas, dan dominasi pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Tekankan kepastian kas jangka pendek dan ajukan opsi merger dengan holding korporasi besar.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Nyalakan speaker rapat, setel musik Samba Brazil Thiago kencang-kencang, dan ajak direksi menari.',
            { chaos: 30, team: 15, trust: -6, cash: 0 },
            'Sidang direksi seketika berubah menjadi karnaval kegembiraan paling aneh dalam sejarah korporat.'
          ]
        ]
      },
      {
        body: 'Komisaris membuka map berisi berkas vonis akhir nasib PT Ruang Tumbuh Indonesia.',
        dialogue: 'Kalian sudah membawa perusahaan ini melintasi benua dan badai media. Sekarang buktikan nilainya.',
        options: [
          [
            'Paparkan portofolio ekosistem terpadu: efisiensi dev Brazil, armada komunitas, dan dominasi pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Tekankan kepastian kas jangka pendek dan ajukan opsi merger dengan holding korporasi besar.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Nyalakan speaker rapat, setel musik Samba Brazil Thiago kencang-kencang, dan ajak direksi menari.',
            { chaos: 30, team: 15, trust: -6, cash: 0 },
            'Sidang direksi seketika berubah menjadi karnaval kegembiraan paling aneh dalam sejarah korporat.'
          ]
        ]
      },
      {
        body: 'Layar proyektor ruang sidang menampilkan rekapitulasi metrik lima puluh hari terakhir di hadapan para pemegang saham.',
        dialogue: 'Apapun hasil musyawarah hari ini, kita sudah mengubah cara bermain game bisnis ini selamanya.',
        options: [
          [
            'Paparkan portofolio ekosistem terpadu: efisiensi dev Brazil, armada komunitas, dan dominasi pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Tekankan kepastian kas jangka pendek dan ajukan opsi merger dengan holding korporasi besar.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Nyalakan speaker rapat, setel musik Samba Brazil Thiago kencang-kencang, dan ajak direksi menari.',
            { chaos: 30, team: 15, trust: -6, cash: 0 },
            'Sidang direksi seketika berubah menjadi karnaval kegembiraan paling aneh dalam sejarah korporat.'
          ]
        ]
      }
    ]
  }
];

// Cutscene transisi antar bab
const transitions = {
  1: {
    background: 'street-traffic',
    title: 'TRANSISI PERJALANAN · OTW SENOPATI',
    heading: 'Misi Mendadak ke Senopati',
    body: 'Kevin menemukan lokasi Aldi: sebuah kafe di Senopati. Damar sudah berangkat lebih dulu untuk mengamankan meja. Kamu harus segera menyusul sebelum presentasi rival CMO itu selesai.',
    button: 'Tentukan cara berangkat →'
  },
  2: {
    background: 'office',
    title: 'TRANSISI KANTOR · AROMA DUPA MISTERIUS',
    heading: 'Kembali ke Kantor yang Dipenuhi Asap Kemenyan',
    body: 'Pulang dari misi spionase di Senopati, kamu mendapati lorong kantor pusat tiba-tiba berbau kembang tujuh rupa. Komisaris utama rupanya mengirim konsultan spiritual khusus ke ruang server untuk "membersihkan aura algoritma".',
    button: 'Masuk ke Ruang Server →'
  },
  3: {
    background: 'campaign-office',
    title: 'TRANSISI DARURAT · PANGGILAN RUANG FINANCE',
    heading: 'Alarm Merah dari Meja Kerja Mira',
    body: 'Belum hilang bau dupa di bajumu, Mira memanggilmu masuk ke ruang Finance dengan wajah pucat pasi. Layar monitor perbankannya berkedip merah menampilkan transaksi mencurigakan dari cabang Amerika Selatan.',
    button: 'Cek Laporan Kas Mira →'
  },
  4: {
    background: 'airplane-flight',
    title: 'TRANSISI PENERBANGAN · 36 JAM KE SÃO PAULO',
    heading: 'Lepas Landas Menembus Tiga Benua Menuju Brazil',
    body: 'Setelah tiket dan dokumen keberangkatan beres, pesawat yang kamu tumpangi akhirnya lepas landas dari Bandara Soekarno-Hatta menembus awan. Tiga transit melelahkan di Malaysia, Qatar, dan Ethiopia berhasil kamu lewati sebelum mendarat di teriknya matahari São Paulo, Brazil.',
    button: 'Mendarat di Favela São Paulo →'
  },
  5: {
    background: 'airplane-flight',
    title: 'TRANSISI KEPULANGAN · TERBANG KEMBALI KE JAKARTA',
    heading: 'Pulang Membawa Manuver dari Amerika Latin',
    body: 'Setelah menuntaskan urusan di markas favela Thiago, kamu kembali menempuh penerbangan panjang melintasi samudra menuju Jakarta. Namun begitu pesawat mendarat dan ponselmu menyala, pesan darurat bertubi-tubi masuk dari tim CS kantor pusat.',
    button: 'Tiba Kembali di Lobi Kantor Jakarta →'
  },
  6: {
    background: 'street-traffic',
    title: 'TRANSISI MISI · MENEROBOS INDONESIA TECH EXPO',
    heading: 'Menyusup ke Arena Pameran Terbesar Se-Asia',
    body: 'Kevin menyetir mobil bak terbuka membawa tangga lipat aluminium dan dua rompi proyek oranye. Pintu utama Indonesia Tech Expo ICE BSD dijaga ketat, tapi jalan belakang terbuka lebar.',
    button: 'Mulai Sabotase Panggung →'
  },
  7: {
    background: 'night',
    title: 'TRANSISI MALAM · SERANGAN BALIK TENGAH MALAM',
    heading: 'Notifikasi Darurat di War Room Pukul 23:45 WIB',
    body: 'Sepulang dari keributan di panggung Indonesia Tech Expo, langit Jakarta telah gelap gulita. Bukannya beristirahat, ponsel seluruh tim berdering serentak: akun gosip @StartupSengsara baru saja mengunggah utas serangan balik yang langsung trending nomor satu.',
    button: 'Masuk ke War Room Malam →'
  },
  8: {
    background: 'penthouse-lounge',
    title: 'TRANSISI LOKASI · PENTHOUSE LANTAI 40',
    heading: 'Panggilan Khusus ke Private Lounge Bima',
    body: 'Lift kaca berkecepatan tinggi membawamu melesat ke lantai 40 gedung pencakar langit Jakarta. Bima menunggumu di ruangan privat berlampu temaram dengan pemandangan lampu metropolis malam hari.',
    button: 'Duduk di Meja Bima →'
  },
  9: {
    background: 'boardroom',
    title: 'TRANSISI PENENTUAN · HARI KERJA KE-50',
    heading: 'Pintu Ruang Sidang Dewan Direksi Kembali Terbuka',
    body: 'Sepuluh minggu penuh kegilaan akhirnya mencapai garis akhir. Seluruh direksi, komisaris, dan investor berkumpul kembali di ruang rapat lantai 12 untuk mengetuk palu vonis nasib PT Ruang Tumbuh Indonesia.',
    button: 'Hadapi Sidang Penghakiman →'
  }
};

const initial = { cash: 65, insight: 40, team: 50, trust: 50, chaos: 30 };

function initialState() {
  return {
    page: 'start',
    week: 0,
    route: 0,
    stats: { ...initial },
    history: [],
    previous: '',
    lastDelta: {},
    pending: 'game',
    reactions: [],
    flags: {
      brazilAllied: false,
      senopatiIntel: false,
      affiliateArmy: false,
      dukunBlessing: false,
      senopatiExposed: false,
      bimaImpressed: false
    }
  };
}

let state = initialState();
const main = document.querySelector('#main'), aside = document.querySelector('#aside');

function reset() {
  state = initialState();
  render();
}

function buildReactions(week, choice, spent, index) {
  const d = choice[1];
  const list = [];

  if (d.cash <= -10 && week !== 3) {
    list.push({
      speaker: 'Mira · Finance Director',
      sprite: 'finance-angry',
      division: 'FINANCE',
      background: 'campaign-office',
      dialogue: 'Eh gila ya lu?! Kas kita jebol ' + Math.abs(d.cash) + ' poin cuma buat manuver aneh ini! Kalau kita bangkrut minggu depan, lu yang ngadep komisaris!',
      detail: 'Mira mengibaskan lembaran bon tagihan dengan wajah pucat pasi di ruang Finance.'
    });
  }

  if (week === 0) {
    list.push({
      speaker: 'Naya · Growth Lead',
      sprite: 'character-happy',
      division: 'GROWTH',
      background: 'office',
      dialogue: index === 0
        ? 'Akhirnya ada yang berani bongkar funnel berdarah itu! Tim growth langsung pasang tracker baru sore ini.'
        : index === 1
          ? 'Buset, baru hari pertama udah ngajak perang psikologis sama CakapKilat! Siap, tim gue langsung gerak!'
          : 'Misi rahasia ke Senopati?! Gue sama Kevin udah siapin alat sadap dan jadwal ngopi Aldi besok pagi!',
      detail: 'Naya langsung mengumpulkan tim di ruang kerja seusai rapat direksi.'
    });
  } else if (week === 1) {
    list.push({
      speaker: 'Aldi · CMO CakapKilat',
      sprite: 'aldi',
      division: 'KOMPETITOR',
      background: 'senopati-cafe',
      dialogue: index === 0
        ? 'Mas barista tadi kok naruh oat milk sambil melototin layar MacBook gue ya?! Ah, perasaan gue doang kali!'
        : index === 1
          ? 'Apa-apaan tadi meja sebelah teleponan soal Quantum AI?! Jangan-jangan fitur kita udah keduluan Ruang Tumbuh!'
          : 'Hah?! Kok slide rahasia gue kebuka di tengah kerumunan orang?! Siapa yang barusan foto layar gue?!',
      detail: 'Aldi buru-buru menutup MacBook Pro-nya di kafe Senopati dengan wajah curiga.'
    });
  } else if (week === 2) {
    list.push({
      speaker: 'Madam Aurel · Spiritual HRD',
      sprite: 'aurel',
      division: 'KOMISARIS',
      background: 'meeting',
      dialogue: index === 0
        ? 'Aura kembang tujuh rupa sudah menyatu dengan algoritma kalian. Komisaris sangat senang mendengar kabar ini.'
        : index === 1
          ? 'Perpaduan zodiak dan machine learning yang harmonis! Cakra konversi kalian sekarang terbuka lebar.'
          : 'Berani-beraninya kamu mengusir saya dan menyiram dupa suci! Lihat saja, komisaris pasti mendengar kelancangan ini!',
      detail: index === 2
        ? 'Madam Aurel keluar dari ruang server sambil mengibaskan selendang dan mengancam melapor ke komisaris.'
        : 'Madam Aurel meniup sisa abu dupa dan mengirim laporan positif ke komisaris.'
    });
  } else if (week === 3) {
    list.push({
      speaker: 'Mira · Finance Director',
      sprite: index === 2 ? 'finance-angry' : 'finance',
      division: 'FINANCE',
      background: 'campaign-office',
      dialogue: index === 2
        ? 'HEH! Gue suruh beli tiket ekonomi transit tiga kali, kenapa tagihan kartu korporat malah bunyi upgrade Business Class?! Awas ya kalau pulang dari Brazil nggak bawa hasil!'
        : index === 1
          ? 'Oke, jadwal transit di Doha udah gue sesuaikan sama agenda VC lo. Ingat, jangan jajan aneh-aneh di bandara!'
          : 'Paspor dan berkas audit sudah lengkap? Hati-hati di favela, jangan sampai koper dan laptop kantor dicolong orang.',
      detail: index === 2
        ? 'Mira memelototi notifikasi SMS tagihan Business Class sambil menyerahkan map paspor dengan tangan gemetar.'
        : 'Mira mengirimkan e-ticket penerbangan kelas ekonomi dan dokumen audit via WhatsApp sebelum kamu berangkat ke bandara.'
    });
  } else if (week === 4) {
    list.push({
      speaker: 'Thiago · Head of Brazil',
      sprite: 'thiago',
      division: 'CABANG BRAZIL',
      background: 'brazil-favela',
      dialogue: index === 1
        ? 'Caramba... jadi cabang São Paulo beneran ditutup paksa nih? Padahal kode AI capoeira kita tinggal selangkah lagi meledak, amigo!'
        : index === 0
          ? 'Muito bom! Energinya gila banget! Favela dev siap tempur 24 jam penuh buat back-up server Ruang Tumbuh!'
          : 'Hahaha! Paket bundel açaí superfood dan NFT sertifikat ini bakal bikin investor Jakarta geleng-geleng kepala, amigo!',
      detail: index === 1
        ? 'Thiago menyerahkan sisa kunci kantor favela dengan wajah kecewa saat kamu bersiap kembali ke bandara.'
        : 'Thiago berpose capoeira di teras favela sambil mengantar keberangkatanmu kembali ke bandara.'
    });
  } else if (week === 5) {
    list.push({
      speaker: 'Sarah · CS Lead',
      sprite: index === 0 ? 'success' : 'success-angry',
      division: 'CUSTOMER SUCCESS',
      background: 'office',
      dialogue: index === 0
        ? 'Gila... emak-emak yang tadinya bawa panci sekarang malah baris rapi bikin video serbuan ke sosmed lawan. Lu beneran pawang emak-emak!'
        : index === 1
          ? 'Panci-panci di lobi akhirnya bubar setelah dibagiin kupon sembako, tapi kas kita lumayan terkuras hari ini.'
          : 'Woi! Lu enak banget kabur lewat pintu darurat, itu Pak Bagas masih disandera Bu Tejo disuruh joget TikTok di lobi!',
      detail: index === 2
        ? 'Sarah mengintip dari balik tangga darurat melihat Bagas dipaksa merekam konten transisi oleh barisan emak-emak.'
        : 'Sarah menghela napas lega melihat kerumunan di lobi kantor mulai kondusif.'
    });
  } else if (week === 6) {
    list.push({
      speaker: 'Kevin · Anak Magang',
      sprite: 'kevin',
      division: 'INTERN HACKER',
      background: 'tech-expo-stage',
      dialogue: index === 0
        ? 'Bang, kabel HDMI panggung udah gue cabut lagi sebelum satpam nyadar! Bocoran presentasi Aldi barusan udah ditonton 2 juta orang di TikTok!'
        : index === 1
          ? 'Gokil Bang! Muka Aldi langsung pucat pasi pas lo rebut mic panggung dan bagi-bagi voucher gratis di depan ribuan peserta!'
          : 'Trik booth gerilya dekat toilet VIP manjur berat, Bang! Tiga direktur HRD BUMN langsung tanda tangan MOU sambil nunggu antrean!',
      detail: 'Kevin merapikan rompi proyek oranye di belakang panggung Indonesia Tech Expo sambil tersenyum puas.'
    });
  } else if (week === 7) {
    list.push({
      speaker: 'Rani · Sales Lead',
      sprite: index === 1 ? 'sales-angry' : 'sales',
      division: 'SALES',
      background: 'night',
      dialogue: index === 0
        ? 'Armada emak-emak Bu Tejo sama bot favela beneran ngeri! Akun @StartupSengsara langsung hilang dari peredaran malam ini juga!'
        : index === 1
          ? 'Video klarifikasi Mas Damar malah dijadiin meme se-Indonesia! Untung sebagian netizen kasihan, tapi klien korporat banyak yang nanya-nanya!'
          : 'Anjir, ngaku kalau semua ini social experiment malah bikin konversi sales kita meledak 600% malam ini! Netizen FOMO parah!',
      detail: 'Rani memantau grafik lonjakan trafik malam hari dari layar monitor War Room.'
    });
  } else if (week === 8) {
    list.push({
      speaker: 'Bima · Investor',
      sprite: 'investor',
      division: 'VENTURE CAPITAL',
      background: 'penthouse-lounge',
      dialogue: index === 0
        ? 'Nolak cek instan gue dan milih unjuk gigi pakai ekosistem sendiri? Nyali lo gede juga. Gue tunggu buktinya di sidang BoD.'
        : index === 1
          ? 'Keputusan realistis. Mulai sekarang 51% kendali strategis ada di tangan gue. Jangan bikin gue rugi di rapat direksi.'
          : 'Hahaha! Berani taruhan churn rate sama gue? Oke, gue transfer dana segarnya sekarang. Sampai ketemu di ruang sidang!',
      detail: 'Bima menyesap espresso di sofa kulit penthouse sambil menutup map investasinya.'
    });
  } else if (week === 9) {
    list.push({
      speaker: 'Damar · CEO',
      sprite: 'founder',
      division: 'CEO',
      background: 'boardroom',
      dialogue: index === 0
        ? 'Presentasi penutup yang luar biasa! Seluruh komisaris sampai terdiam melihat semua kepingan strategi gila kita menyatu sempurna!'
        : index === 1
          ? 'Langkah yang aman buat menyelamatkan kas perusahaan. Setidaknya kita semua masih punya gaji bulan depan.'
          : 'Hahaha! Gue nggak nyangka rapat dewan direksi bakal ditutup pakai goyang Samba bareng komisaris! Ini baru startup legendaris!',
      detail: 'Damar menjabat erat tanganmu di meja bundar direksi sesaat sebelum hasil akhir diumumkan.'
    });
  }

  return list.map(item => ({ ...item, choice: choice[0] }));
}

function determineEnding() {
  const { cash, insight, team, trust, chaos } = state.stats;
  const { brazilAllied, senopatiIntel, bimaImpressed, affiliateArmy } = state.flags;

  // 1. PERFECT ENDING: High mastery across key metrics with bold execution
  const isMastermind = cash >= 45 && insight >= 75 && trust >= 60 && chaos >= 55 && (senopatiIntel && brazilAllied);
  if (isMastermind) {
    return {
      type: 'perfect',
      badge: '★ PERFECT ENDING ★',
      grade: 'S-TIER · SUPREME OVERLORD OF GROWTH',
      title: 'Galactic Unicorn Ascendance: The Absurd Mastermind',
      body: 'Kemenangan Mutlak! Manuver intelijen di Senopati sukses mematikan CakapKilat, sinergi dev favela São Paulo memangkas biaya server hingga 90%, dan armada 75 emak-emak affiliate menjelma menjadi mesin viral organik paling mematikan di Asia Tenggara. Bima menyuntikkan pendanaan Seri B senilai $10M tanpa audit, dewan komisaris sujud syukur, dan kamu dinobatkan sebagai Supreme Overlord of Growth!',
      color: '#d0ec80'
    };
  }

  // 2. NORMAL ENDING: Viral Disaster (Chaos went too far, trust collapsed)
  if (chaos >= 70 && trust < 50) {
    return {
      type: 'viral',
      badge: 'NORMAL ENDING (2/3)',
      grade: 'C-TIER · CANCELLED ICON & PODCAST HOST',
      title: 'Viral Disaster: Kena Spill di @StartupSengsara',
      body: 'Kekacauan PR dan sabotase panggung expo meledak di luar kendali. Tagar #BoikotRuangTumbuh trending selama seminggu penuh hingga brand di-cancel total. Gedung kantor disegel netizen, Damar banting setir menjadi host podcast klarifikasi 24 jam nonstop, dan kamu masuk daftar hitam HRD startup se-Asia Tenggara.',
      color: '#ff687d'
    };
  }

  // 3. NORMAL ENDING: The Brazilian Pivot (Brazil alliance made, Jakarta operations surrendered or pivoted)
  if (brazilAllied) {
    return {
      type: 'brazil',
      badge: 'NORMAL ENDING (1/3)',
      grade: 'B-TIER · SAMBA PIRATE & AÇAÍ BARON',
      title: 'The Brazilian Pivot: Kabur ke Pantai Copacabana',
      body: 'Kantor Jakarta akhirnya digerebek dinas akibat demo emak-emak dan ketiadaan izin operasional ruwat server. Namun kejutan terjadi: cabang São Paulo pimpinan Thiago meledak menjadi platform edtech capoeira & açaí terbesar se-Amerika Latin! Seluruh tim Jakarta diterbangkan ke Rio de Janeiro, menikmati sunset di Copacabana sambil mengelola bisnis digital tropis yang sangat menguntungkan.',
      color: '#76e6e2'
    };
  }

  // 4. NORMAL ENDING: Corporate Zombie (Conservative / low chaos / acquired)
  return {
    type: 'zombie',
    badge: 'NORMAL ENDING (3/3)',
    grade: 'D-TIER · CORPORATE DRONE & EXCEL WARRIOR',
    title: 'Corporate Zombie: Divisi Kupon Mi Instan',
    body: 'Ruang Tumbuh berhasil selamat dari kebangkrutan, tetapi dengan harga mahal: diakuisisi konglomerat mi instan raksasa dengan valuasi diskon 80%. Platform dirombak menjadi sistem penukaran poin hadiah bungkus mi. Damar diturunkan pangkat menjadi MC family gathering pabrik, dan kamu menghabiskan sisa kariermu mengisi lembar Excel evaluasi kupon diskon.',
    color: '#ffae86'
  };
}

function choose(index) {
  const week = weeks[state.week];
  const variant = week.variants[state.week === 0 ? 0 : state.route];
  const choice = variant.options[index];
  if (!choice) return;

  const before = state.stats.cash;
  for (const [key, value] of Object.entries(choice[1])) {
    if (state.stats[key] !== undefined) {
      state.stats[key] = Math.max(0, Math.min(100, state.stats[key] + value));
    }
  }

  // Update dynamic flags
  if (state.week === 1 && (index === 0 || index === 1)) state.flags.senopatiIntel = true;
  if (state.week === 2 && (index === 0 || index === 1)) state.flags.dukunBlessing = true;
  if (state.week === 4 && (index === 0 || index === 2)) state.flags.brazilAllied = true;
  if (state.week === 5 && index === 0) state.flags.affiliateArmy = true;
  if (state.week === 6 && index === 0) state.flags.senopatiExposed = true;
  if (state.week === 8 && (index === 0 || index === 2)) state.flags.bimaImpressed = true;

  state.lastDelta = choice[1];
  state.previous = choice[2];
  state.history.push({
    week: state.week + 1,
    title: week.title,
    choice: choice[0],
    outcome: choice[2]
  });

  state.reactions = buildReactions(state.week, choice, before - state.stats.cash, index);
  state.route = index;
  state.week++;

  const next = state.week >= weeks.length ? 'result' : 'game';
  state.pending = next;

  if (state.reactions.length) {
    state.page = 'reaction';
  } else if (transitions[state.week] && next === 'game') {
    state.page = 'transition';
  } else {
    state.page = next;
  }

  render();
  window.scrollTo(0, 0);
}

function advanceReaction() {
  state.reactions.shift();
  if (state.reactions.length) {
    state.page = 'reaction';
  } else if (transitions[state.week] && state.pending === 'game') {
    state.page = 'transition';
  } else {
    state.page = state.pending;
  }
  render();
  window.scrollTo(0, 0);
}

function proceedTransition() {
  state.page = state.week === 1 ? 'travel_transport' : state.pending;
  render();
  window.scrollTo(0, 0);
}

function render() {
  if (state.page === 'start') showStart();
  else if (state.page === 'arrival') showArrival();
  else if (state.page === 'starling') showStarling();
  else if (state.page === 'smoke') showSmoke();
  else if (state.page === 'fire') showFire();
  else if (state.page === 'bad_ending_fire') showBadEndingFire();
  else if (state.page === 'welcome') showWelcome();
  else if (state.page.startsWith('travel_')) showTravel();
  else if (state.page === 'transition') showTransition();
  else if (state.page === 'game') showGame();
  else if (state.page === 'reaction') showReaction();
  else showResult();
  window.dispatchEvent(new Event('regrowth:scene'));
}
