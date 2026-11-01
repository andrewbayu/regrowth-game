// Sepuluh babak mingguan untuk menyelamatkan Ruang Tumbuh dalam 60 hari.
// Setiap keputusan membuka konsekuensi liar, intelijen, manuver internasional, dan 4 ending unik (+ 1 Secret Bad Ending).

const weeks = [
  // MINGGU 1: Sidang Direksi & Temuan Gelap
  {
    title: 'Sidang direksi & kebocoran dana',
    speaker: 'Damar · CEO',
    sprite: 'founder',
    background: 'boardroom',
    intro: 'Kas tinggal 60 hari. Ada tagihan misterius $15.000 per bulan ke cabang São Paulo, sementara kompetitor membajak pengajar terbaik.',
    dialogue: 'Semua mata direksi sekarang menatapmu. BoD menuntut terobosan gila dalam 10 minggu ke depan. Manuver pertamamu apa?',
    question: 'Di depan dewan direksi, langkah pertama apa yang kamu ambil untuk membongkar krisis ini?',
    variants: [{
      body: 'Direksi menuntut asal kebocoran dan cara menghentikannya.',
      dialogue: 'Lupakan cara normatif. Apa manuver pertamamu?',
      options: [
        [
          'Audit dana Brazil dan cari siapa yang menyetujuinya.',
          { cash: -3, insight: 14, chaos: 10, team: 4 },
          'Kamu menemukan dokumen transfer rahasia ke São Paulo berkedok biaya lisensi software.'
        ],
        [
          'Suruh Kevin menyusup ke Discord rahasia CakapKilat.',
          { cash: -2, insight: 12, chaos: 16, team: 6 },
          'Kevin berhasil menyusup memakai avatar anime dan mulai memantau chat tim marketing lawan.'
        ],
        [
          'Pangkas iklan dan hapus kopi susu dari pantry.',
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
    intro: 'Kevin menemukan Aldi, CMO CakapKilat, memamerkan pitch deck rahasia di kafe Senopati. Kamu menyusul Damar ke sana.',
    variants: [
      {
        body: 'Audit Brazil mengisyaratkan CakapKilat membajak teknologi yang sama. Kamu mengintai Aldi.',
        dialogue: 'Ruang Tumbuh sudah usang. AI Matrix kami meluncur bulan depan!',
        options: [
          [
            'Menyamar jadi barista dan intip laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Pura-pura telepon soal AI Quantum palsu di meja sebelah.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pingsan agar kamu bisa mengambil catatan Aldi.',
            { insight: 12, chaos: 24, trust: -8, cash: -5 },
            'Catatan didapat lewat drama teatrikal Damar, meski satpam kafe memandang curiga.'
          ]
        ]
      },
      {
        body: 'Kevin membocorkan jadwal Aldi. Kamu tiba saat ia membuka presentasi keuangan.',
        dialogue: 'Startup lain bakar duit tanpa retensi. CakapKilat menguasai edtech!',
        options: [
          [
            'Menyamar jadi barista dan intip laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Pura-pura telepon soal AI Quantum palsu di meja sebelah.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pingsan agar kamu bisa mengambil catatan Aldi.',
            { insight: 12, chaos: 24, trust: -8, cash: -5 },
            'Catatan didapat lewat drama teatrikal Damar, meski satpam kafe memandang curiga.'
          ]
        ]
      },
      {
        body: 'Setelah kopi pantry dipangkas, Damar mengajak tim mengintai kompetitor.',
        dialogue: 'Ngapain lirik-lirik? Minggu depan pelanggan kalian pindah ke kami!',
        options: [
          [
            'Menyamar jadi barista dan intip laptop Aldi.',
            { insight: 15, trust: 6, chaos: 12, cash: -3 },
            'Kamu berhasil mencatat celah fatal arsitektur platform CakapKilat tanpa dicurigai.'
          ],
          [
            'Pura-pura telepon soal AI Quantum palsu di meja sebelah.',
            { insight: 10, chaos: 18, team: 4, cash: -4 },
            'Aldi terpancing emosi dan membocorkan tanggal rilis kampanye mereka demi pamer.'
          ],
          [
            'Suruh Damar pingsan agar kamu bisa mengambil catatan Aldi.',
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
    intro: 'Komisaris menahan anggaran darurat sampai Madam Aurel meruwat server, yang katanya membuat bounce rate 89%. Dupa dan bunga memenuhi ruangan.',
    variants: [
      {
        body: 'Kamu hendak membenahi landing page, tapi Aurel menutup server dengan kain hitam.',
        dialogue: 'Cakra gelap menyumbat kas! Mandikan kabel fiber dengan air kembang!',
        options: [
          [
            'Ikuti ritual: siram server dengan air kembang dan pasang dupa.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Ganti dupa dengan vape, lalu sebut analitik ramalan modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak ritual dan usir Madam Aurel dari ruang server.',
            { team: 14, trust: -16, chaos: -10, cash: 0 },
            'Tim developer bersorak gembira, tapi komisaris mengancam membekukan operasional.'
          ]
        ]
      },
      {
        body: 'Pengintaian Senopati membuat komisaris mengundang Aurel meruwat kantor.',
        dialogue: 'Ada hawa mata-mata! Kita harus bersihkan aura server.',
        options: [
          [
            'Ikuti ritual: siram server dengan air kembang dan pasang dupa.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Ganti dupa dengan vape, lalu sebut analitik ramalan modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak ritual dan usir Madam Aurel dari ruang server.',
            { team: 14, trust: -16, chaos: -10, cash: 0 },
            'Tim developer bersorak gembira, tapi komisaris mengancam membekukan operasional.'
          ]
        ]
      },
      {
        body: 'Mira minta keputusan cepat agar anggaran server tidak diblokir.',
        dialogue: 'Jangan main logika di depan komisaris. Server butuh restu kosmik!',
        options: [
          [
            'Ikuti ritual: siram server dengan air kembang dan pasang dupa.',
            { trust: 14, team: -8, chaos: 22, cash: -4 },
            'Komisaris kagum pada kepatuhanmu dan membuka akses rekening, meski engineering histeris.'
          ],
          [
            'Ganti dupa dengan vape, lalu sebut analitik ramalan modern.',
            { insight: 12, trust: 10, chaos: 12, cash: -2 },
            'Madam Aurel terkesima oleh visualisasi data dan mengesahkan aura positif pertumbuhan.'
          ],
          [
            'Tolak ritual dan usir Madam Aurel dari ruang server.',
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
    intro: 'Bank São Paulo menolak membekukan rekening dari jauh. Tanpa verifikasi langsung, denda $30.000 ditarik. Mira memesankan penerbangan ekonomi 36 jam malam ini.',
    variants: [
      {
        body: 'Dana darurat cair; Mira menyodorkan tiket promo tanpa bagasi.',
        dialogue: 'Tiketnya sudah kubeli! Transit Malaysia, Qatar, Ethiopia. Siapkan strategi!',
        options: [
          [
            'Terima tiket ekonomi; siapkan audit dan deck bilingual di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Jadwalkan pitching ke investor Afrika-Latam saat transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam upgrade ke Business Class pakai kartu kantor.',
            { cash: -18, team: -8, trust: -6, chaos: 5 },
            'Tiketmu resmi berubah jadi kursi rebahan mewah, namun notifikasi SMS banking langsung membunyikan HP Mira.'
          ]
        ]
      },
      {
        body: 'Berbekal restu dupa modern, kamu siap menelusuri dana yang bocor.',
        dialogue: 'Hanya ada tiket ekonomi 36 jam. Siapkan diri sebelum terbang!',
        options: [
          [
            'Terima tiket ekonomi; siapkan audit dan deck bilingual di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Jadwalkan pitching ke investor Afrika-Latam saat transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam upgrade ke Business Class pakai kartu kantor.',
            { cash: -18, team: -8, trust: -6, chaos: 5 },
            'Tiketmu resmi berubah jadi kursi rebahan mewah, namun notifikasi SMS banking langsung membunyikan HP Mira.'
          ]
        ]
      },
      {
        body: 'Hubungan dengan komisaris tegang; kamu harus membuktikan hasil di Brazil.',
        dialogue: 'Pulang tanpa hasil, BoD pecat kita berdua. Apa persiapanmu?',
        options: [
          [
            'Terima tiket ekonomi; siapkan audit dan deck bilingual di pesawat.',
            { insight: 14, chaos: 14, cash: -6, team: 4 },
            'Kamu memasukkan laptop dan setumpuk dokumen audit ke ransel kabin, siap merumuskan strategi sepanjang 36 jam perjalanan.'
          ],
          [
            'Jadwalkan pitching ke investor Afrika-Latam saat transit.',
            { trust: 12, insight: 12, cash: -8, chaos: 10 },
            'Agenda rahasia tersusun: jeda transit di bandara nanti akan kamu manfaatkan untuk pitching ke investor lintas benua.'
          ],
          [
            'Diam-diam upgrade ke Business Class pakai kartu kantor.',
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
    intro: 'Cabang Brazil ternyata warung açaí di favela São Paulo. Di belakangnya, 15 programmer juga menari capoeira dan beternak ayam digital.',
    variants: [
      {
        body: 'Setelah 36 jam menggarap deck di kelas ekonomi, kamu tiba di markas Thiago.',
        dialogue: 'Amigo! Platform capoeira dan ayam blockchain kami punya margin 400%!',
        options: [
          [
            'Bentuk aliansi: pakai tim Thiago untuk pengembangan dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Sita kas Thiago dan tutup cabang Brazil permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Jual merchandise açaí dan ayam digital Thiago di Jakarta.',
            { cash: 10, chaos: 16, trust: 4, insight: 8 },
            'Merchandise açaí viral di kafe-kafe hipster Jakarta dan memberi suntikan pendapatan segar.'
          ]
        ]
      },
      {
        body: 'Investor yang kamu temui saat transit sudah menelepon Thiago.',
        dialogue: 'Bisnis favela soal respek. Bantu kembangkan, atau uang kembali ke Jakarta.',
        options: [
          [
            'Bentuk aliansi: pakai tim Thiago untuk pengembangan dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Sita kas Thiago dan tutup cabang Brazil permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Jual merchandise açaí dan ayam digital Thiago di Jakarta.',
            { cash: 10, chaos: 16, trust: 4, insight: 8 },
            'Merchandise açaí viral di kafe-kafe hipster Jakarta dan memberi suntikan pendapatan segar.'
          ]
        ]
      },
      {
        body: 'Kamu tiba segar dari Business Class, disambut 27 pesan marah Mira.',
        dialogue: 'Amigo, gabungkan saja kekuatan developer kita!',
        options: [
          [
            'Bentuk aliansi: pakai tim Thiago untuk pengembangan dan pasar Latam.',
            { cash: 18, insight: 16, chaos: 20, team: 8 },
            'Thiago bersorak! Tim Brazil resmi menjadi mesin teknologi rahasia Ruang Tumbuh dengan biaya hemat.'
          ],
          [
            'Sita kas Thiago dan tutup cabang Brazil permanen.',
            { cash: 15, trust: -10, chaos: -8, team: -6 },
            'Kamu membawa pulang dollar tunai, namun memutus potensi pertumbuhan luar negeri.'
          ],
          [
            'Jual merchandise açaí dan ayam digital Thiago di Jakarta.',
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
    intro: 'Setiba di Jakarta, 75 emak-emak affiliate menduduki lobi dengan panci dan mikrofon. Mereka marah karena komisi terlambat dua jam akibat selisih waktu Brazil.',
    variants: [
      {
        body: 'Aliansi Brazil belum diumumkan; dangdut sudah menggema di lobi.',
        dialogue: 'Mereka pasang tenda, bakar sate, dan ancam boikot grup arisan!',
        options: [
          [
            'Ambil mic dan rekrut mereka jadi buzzer kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng dan sembako dari kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur bersama Damar; biarkan Bagas bernegosiasi.',
            { team: -16, trust: -12, chaos: 14, cash: 2 },
            'Bagas disandera emak-emak selama 8 jam untuk mengajari mereka bikin transisi video TikTok.'
          ]
        ]
      },
      {
        body: 'Uang Brazil meredakan situasi, tapi ketua massa menuntut kepastian komisi.',
        dialogue: 'Komisi harus cair dobel hari ini, atau kami live TikTok sambil nangis!',
        options: [
          [
            'Ambil mic dan rekrut mereka jadi buzzer kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng dan sembako dari kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur bersama Damar; biarkan Bagas bernegosiasi.',
            { team: -16, trust: -12, chaos: 14, cash: 2 },
            'Bagas disandera emak-emak selama 8 jam untuk mengajari mereka bikin transisi video TikTok.'
          ]
        ]
      },
      {
        body: 'Akun gosip mulai meliput keributan di lobi.',
        dialogue: 'Jangan sampai wajah Damar direkam! Cari solusi sebelum Satpol PP datang!',
        options: [
          [
            'Ambil mic dan rekrut mereka jadi buzzer kompetitor.',
            { trust: 16, chaos: 24, team: 8, cash: -4 },
            'Emak-emak histeris gembira! Mereka resmi bertransformasi menjadi divisi perang siber paling militan.'
          ],
          [
            'Bagikan voucher minyak goreng dan sembako dari kas darurat.',
            { cash: -12, trust: 12, team: 4, chaos: -8 },
            'Emak-emak bubar dengan tertib dan damai, tapi anggaran belanja sembako membuat dompet tipis.'
          ],
          [
            'Kabur bersama Damar; biarkan Bagas bernegosiasi.',
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
    intro: 'Aldi akan meluncurkan produk CakapKilat di Tech Expo ICE BSD di depan 2.000 investor. Tanpa tiket VIP, kamu hanya punya rompi proyek dan tangga Kevin.',
    variants: [
      {
        body: 'Pasukan affiliate siap menunggu komando dari media sosial.',
        dialogue: 'Pakai rompi dan bawa tangga, satpam pasti biarkan kita ke belakang panggung!',
        options: [
          [
            'Susup ke control room dan putar rekaman Aldi di layar besar.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mic saat lampu padam dan promosikan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di dekat toilet VIP.',
            { trust: 10, cash: -4, team: 6, insight: 8 },
            'Pendekatan gerilya elegan; kamu berhasil mencegat tiga investor institusi yang sedang antre ke toilet.'
          ]
        ]
      },
      {
        body: 'Kevin sudah memetakan kabel audio panggung.',
        dialogue: 'Mau hancurkan presentasi mereka atau rebut panggungnya?',
        options: [
          [
            'Susup ke control room dan putar rekaman Aldi di layar besar.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mic saat lampu padam dan promosikan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di dekat toilet VIP.',
            { trust: 10, cash: -4, team: 6, insight: 8 },
            'Pendekatan gerilya elegan; kamu berhasil mencegat tiga investor institusi yang sedang antre ke toilet.'
          ]
        ]
      },
      {
        body: 'Bagas, yang lolos dari emak-emak, membantu membawa tangga.',
        dialogue: 'Jangan sampai ditangkap satpam expo. Ini kesempatan kita!',
        options: [
          [
            'Susup ke control room dan putar rekaman Aldi di layar besar.',
            { insight: 18, chaos: 26, trust: 6, cash: -3 },
            'Di layar 4K, suara Aldi menghina investornya terdengar jelas! Reputasi CakapKilat hancur berkeping-keping.'
          ],
          [
            'Bajak mic saat lampu padam dan promosikan Ruang Tumbuh.',
            { trust: -8, chaos: 30, insight: 10, cash: 8 },
            'Aksi nekatmu viral seketika di internet; ribuan pengguna baru mendaftar meski kamu dikejar panitia.'
          ],
          [
            'Buka booth gerilya di dekat toilet VIP.',
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
    intro: 'Setelah expo, @StartupSengsara membocorkan rekaman internal. #BoikotRuangTumbuh trending; war room malam ini memanas.',
    variants: [
      {
        body: 'Skandal Senopati dan expo viral. Dashboard Rani penuh pembatalan.',
        dialogue: 'Trending nomor satu! Klien menelepon terus. Kita harus balas sebelum pagi!',
        options: [
          [
            'Kerahkan 75 affiliate untuk meramaikan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar di depan tembok semen.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Klaim keributan ini eksperimen sosial peluncuran fitur.',
            { chaos: 28, trust: -10, insight: 8, cash: 10 },
            'Netizen geram tapi penasaran; server web sempat down dihantam lonjakan traffic 600%.'
          ]
        ]
      },
      {
        body: 'Warganet mengaitkan perusahaan dengan ritual server dan ayam Brazil.',
        dialogue: 'Pilih narasi: main aman, cari simpati, atau bakar panggung?',
        options: [
          [
            'Kerahkan 75 affiliate untuk meramaikan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar di depan tembok semen.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Klaim keributan ini eksperimen sosial peluncuran fitur.',
            { chaos: 28, trust: -10, insight: 8, cash: 10 },
            'Netizen geram tapi penasaran; server web sempat down dihantam lonjakan traffic 600%.'
          ]
        ]
      },
      {
        body: 'Mira menghitung kerugian jika boikot bertahan sampai akhir pekan.',
        dialogue: 'Salah langkah malam ini, perusahaan tamat sebelum minggu depan.',
        options: [
          [
            'Kerahkan 75 affiliate untuk meramaikan testimoni haru.',
            { trust: 18, team: 10, chaos: 16, cash: -4 },
            'Emak-emak mengunggah jutaan video memasak sambil belajar bisnis hingga tagar boikot tenggelam total.'
          ],
          [
            'Rilis video klarifikasi Damar di depan tembok semen.',
            { trust: 8, team: -6, chaos: -8, cash: -2 },
            'Video ditonton 5 juta kali; netizen luluh melihat ekspresi melas Damar meski ia jadi stiker WhatsApp.'
          ],
          [
            'Klaim keributan ini eksperimen sosial peluncuran fitur.',
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
    intro: 'Menjelang tenggat, Bima mengundangmu dan Damar ke lounge lantai 40. Di meja ada cek kosong dan tiket sekali jalan ke Rio.',
    variants: [
      {
        body: 'Bima menatapmu tajam sambil mengisap cerutu.',
        dialogue: 'Kegilaan terukur itu mahal. Ambil cek untuk 51% kendali, atau buktikan kartu as kalian.',
        options: [
          [
            'Tolak cek; tunjukkan sinergi intel Senopati, tim Brazil, dan affiliate.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek dan serahkan 51% saham ke Bima.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima tebak churn rate; yang kalah bayar operasional.',
            { chaos: 22, insight: 12, team: 8, cash: 6 },
            'Bima tertawa lepas menyukai nyalimu dan menyetujui dana talangan tanpa campur tangan dewan.'
          ]
        ]
      },
      {
        body: 'Bima bersandar sambil memandang lampu Jakarta.',
        dialogue: 'Banyak yang jago bikin deck, sedikit yang berani kotor. Apa tawaranmu?',
        options: [
          [
            'Tolak cek; tunjukkan sinergi intel Senopati, tim Brazil, dan affiliate.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek dan serahkan 51% saham ke Bima.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima tebak churn rate; yang kalah bayar operasional.',
            { chaos: 22, insight: 12, team: 8, cash: 6 },
            'Bima tertawa lepas menyukai nyalimu dan menyetujui dana talangan tanpa campur tangan dewan.'
          ]
        ]
      },
      {
        body: 'Damar gemetar melihat deretan nol pada cek Bima.',
        dialogue: 'Waktu tinggal sedikit. Keputusan ini menentukan masa depan kalian.',
        options: [
          [
            'Tolak cek; tunjukkan sinergi intel Senopati, tim Brazil, dan affiliate.',
            { trust: 20, insight: 16, chaos: 15, cash: 10 },
            'Bima terperangah melihat ekosistem organik buatanmu yang mandiri dan menolak diperbudak modal.'
          ],
          [
            'Ambil cek dan serahkan 51% saham ke Bima.',
            { cash: 40, trust: -16, team: -12, chaos: -10 },
            'Rekening perusahaan langsung terisi ratusan miliar, namun otonomi tim resmi musnah.'
          ],
          [
            'Tantang Bima tebak churn rate; yang kalah bayar operasional.',
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
    intro: 'Hari ke-60. Direksi dan tim berkumpul di ruang rapat, bersama cabang São Paulo lewat video. Waktu evaluasi habis.',
    variants: [
      {
        body: 'Palu sidang di meja; semua mata tertuju pada presentasimu.',
        dialogue: 'Enam puluh hari yang kacau. Apa rekomendasi terakhirmu?',
        options: [
          [
            'Paparkan sinergi tim Brazil, komunitas, dan peluang pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Utamakan kas jangka pendek dan usulkan merger.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Putar musik samba Thiago dan ajak direksi menari.',
            { chaos: 30, team: 15, trust: -6, cash: 0 },
            'Sidang direksi seketika berubah menjadi karnaval kegembiraan paling aneh dalam sejarah korporat.'
          ]
        ]
      },
      {
        body: 'Komisaris membuka map vonis akhir perusahaan.',
        dialogue: 'Kalian sudah melewati benua dan badai media. Buktikan nilainya.',
        options: [
          [
            'Paparkan sinergi tim Brazil, komunitas, dan peluang pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Utamakan kas jangka pendek dan usulkan merger.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Putar musik samba Thiago dan ajak direksi menari.',
            { chaos: 30, team: 15, trust: -6, cash: 0 },
            'Sidang direksi seketika berubah menjadi karnaval kegembiraan paling aneh dalam sejarah korporat.'
          ]
        ]
      },
      {
        body: 'Layar menampilkan metrik 60 hari terakhir untuk pemegang saham.',
        dialogue: 'Apa pun putusan hari ini, cara kita berbisnis sudah berubah.',
        options: [
          [
            'Paparkan sinergi tim Brazil, komunitas, dan peluang pasar.',
            { trust: 15, insight: 12, cash: 5, chaos: 10 },
            'Seluruh ruang rapat tertegun menyimak arsitektur pertumbuhan terhebat yang pernah dipresentasikan.'
          ],
          [
            'Utamakan kas jangka pendek dan usulkan merger.',
            { cash: 20, trust: 6, team: -10, chaos: -10 },
            'Dewan komisaris manggut-manggut menyetujui jaminan keselamatan dana para pemegang saham.'
          ],
          [
            'Putar musik samba Thiago dan ajak direksi menari.',
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
    heading: 'Menuju São Paulo',
    body: 'Setelah 36 jam dan transit di Malaysia, Qatar, serta Ethiopia, kamu tiba di São Paulo untuk menyelidiki cabang Brazil.',
    button: 'Mendarat di Favela São Paulo →'
  },
  5: {
    background: 'airplane-flight',
    title: 'TRANSISI KEPULANGAN · TERBANG KEMBALI KE JAKARTA',
    heading: 'Kembali ke Jakarta',
    body: 'Urusan dengan Thiago selesai. Begitu mendarat di Jakarta, pesan darurat dari tim CS langsung membanjiri ponselmu.',
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
    title: 'TRANSISI PENENTUAN · HARI KE-60',
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
        ? 'Akhirnya funnel itu dibongkar! Tim growth pasang tracker sore ini.'
        : index === 1
          ? 'Hari pertama sudah perang psikologis? Siap, tim gue gerak!'
          : 'Misi Senopati? Gue dan Kevin siapin alat sadap dan jadwal Aldi!',
      detail: 'Naya langsung mengumpulkan tim di ruang kerja seusai rapat direksi.'
    });
  } else if (week === 1) {
    list.push({
      speaker: 'Aldi · CMO CakapKilat',
      sprite: 'aldi',
      division: 'KOMPETITOR',
      background: 'senopati-cafe',
      dialogue: index === 0
        ? 'Barista tadi melototin layar gue? Ah, mungkin perasaan gue.'
        : index === 1
          ? 'Meja sebelah bicara Quantum AI? Jangan-jangan kita keduluan!'
          : 'Slide rahasia gue terbuka? Siapa yang foto?!',
      detail: 'Aldi buru-buru menutup MacBook Pro-nya di kafe Senopati dengan wajah curiga.'
    });
  } else if (week === 2) {
    list.push({
      speaker: 'Madam Aurel · Spiritual HRD',
      sprite: 'aurel',
      division: 'KOMISARIS',
      background: 'meeting',
      dialogue: index === 0
        ? 'Aura kembang menyatu dengan algoritma. Komisaris senang.'
        : index === 1
          ? 'Zodiak dan machine learning harmonis! Cakra konversi terbuka.'
          : 'Berani usir saya! Komisaris pasti dengar soal ini!',
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
        ? 'HEH! Gue beli ekonomi, kenapa tagihannya Business Class?! Pulang harus bawa hasil!'
        : index === 1
          ? 'Jadwal transit sudah cocok dengan VC. Jangan jajan aneh-aneh!'
          : 'Paspor dan audit lengkap? Hati-hati dengan barang kantor di favela.',
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
        ? 'Caramba, cabang São Paulo benar-benar ditutup? Kode AI kita hampir meledak!'
        : index === 0
          ? 'Muito bom! Tim favela siap bantu server Ruang Tumbuh!'
          : 'Bundel açaí dan NFT ini bakal bikin investor Jakarta melongo!',
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
        ? 'Emak-emak berpanci sekarang menyerbu medsos lawan. Lu pawang mereka!'
        : index === 1
          ? 'Mereka bubar setelah dapat sembako, tapi kas kita terkuras.'
          : 'Woi! Lu kabur, Bagas malah disandera dan disuruh joget TikTok!',
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
        ? 'HDMI sudah gue cabut! Bocoran Aldi ditonton dua juta orang!'
        : index === 1
          ? 'Aldi pucat pas lo rebut mic di depan ribuan orang!'
          : 'Booth dekat toilet sukses! Tiga direktur BUMN tanda tangan MOU!',
      detail: 'Kevin merapikan rompi proyek oranye di belakang panggung Indonesia Tech Expo sambil tersenyum puas.'
    });
  } else if (week === 7) {
    list.push({
      speaker: 'Rani · Sales Lead',
      sprite: index === 1 ? 'sales-angry' : 'sales',
      division: 'SALES',
      background: 'night',
      dialogue: index === 0
        ? 'Armada Bu Tejo dan bot favela bikin @StartupSengsara menghilang!'
        : index === 1
          ? 'Video Damar jadi meme! Ada yang simpati, tapi klien banyak bertanya.'
          : 'Ngaku social experiment malah bikin konversi naik 600%!',
      detail: 'Rani memantau grafik lonjakan trafik malam hari dari layar monitor War Room.'
    });
  } else if (week === 8) {
    list.push({
      speaker: 'Bima · Investor',
      sprite: 'investor',
      division: 'VENTURE CAPITAL',
      background: 'penthouse-lounge',
      dialogue: index === 0
        ? 'Tolak cek demi ekosistem sendiri? Berani juga. Buktikan di sidang.'
        : index === 1
          ? 'Realistis. Sekarang 51% kendali milik gue. Jangan bikin rugi.'
          : 'Taruhan churn rate? Oke, dana segar gue transfer. Sampai di sidang!',
      detail: 'Bima menyesap espresso di sofa kulit penthouse sambil menutup map investasinya.'
    });
  } else if (week === 9) {
    list.push({
      speaker: 'Damar · CEO',
      sprite: 'founder',
      division: 'CEO',
      background: 'boardroom',
      dialogue: index === 0
        ? 'Presentasi luar biasa! Komisaris terdiam melihat strategi kita menyatu.'
        : index === 1
          ? 'Langkah aman buat kas. Setidaknya gaji bulan depan selamat.'
          : 'Rapat direksi ditutup goyang samba! Startup legendaris!',
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
  layoutStoryScene();
  window.dispatchEvent(new Event('regrowth:scene'));
}
