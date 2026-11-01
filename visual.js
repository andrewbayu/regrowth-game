// Tampilan cerita interaktif RE:GROWTH (Chaos Edition). Data cerita & ending berada di game.js.

// Keep narrative context above the artwork and dialogue/choices below it.
function layoutStoryScene() {
  const screen = main.querySelector('.story-screen');
  const body = screen?.querySelector('.story-body');
  const panel = body?.querySelector('.story-panel');
  if (!screen || !body || !panel) return;

  const context = document.createElement('section');
  context.className = 'story-context';
  const outcome = body.querySelector('.previous-outcome');
  if (outcome) context.append(outcome);
  const dialogue = panel.querySelector('.dialogue');
  if (!dialogue) {
    const speaker = panel.querySelector('.speaker');
    if (speaker) context.append(speaker);
  }
  Array.from(panel.children).filter(element => element.matches('h2, p')).forEach(element => context.append(element));
  if (context.children.length) screen.insertBefore(context, body);
  if (!dialogue) panel.remove();

  const stage = document.createElement('div');
  stage.className = 'story-stage';
  const character = screen.querySelector('.story-character');
  if (character) stage.append(character);
  screen.insertBefore(stage, body);
  screen.classList.add('story-split');
}

function animateDialogue() {
  document.querySelectorAll('.dialogue').forEach(element => {
    if (element.dataset.typed === 'true') return;
    element.dataset.typed = 'true';
    const text = Array.from(element.textContent);
    element.setAttribute('aria-label', element.textContent);
    element.setAttribute('aria-live', 'off');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = text.join('');
      return;
    }
    element.textContent = '';
    window.dispatchEvent(new Event('regrowth:dialogue'));
    let index = 0;
    const timer = setInterval(() => {
      if (!element.isConnected) {
        clearInterval(timer);
        return;
      }
      element.textContent += text[index++];
      if (index >= text.length) clearInterval(timer);
    }, 20);
  });
}

window.addEventListener('regrowth:scene', animateDialogue);

function showStart() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen cover">
      <img class="title-logo" src="assets/title-logo-60.png" alt="Aku Direkrut Jadi CMO Saat Perusahaan Ini Cuma Punya 60 Hari — RE:GROWTH">
      <div class="cover-subtitle">Sepuluh babak. Enam puluh hari. Satu kesempatan gila.</div>
      <p>Ruang Tumbuh berada di ujung tanduk. Sebagai CMO baru, pimpin tim membongkar krisis kas, mengintai kompetitor di Senopati, hingga menjelajahi favela Brazil sebelum vonis akhir direksi.</p>
      <div class="cover-stakes">
        <span>10 MINGGU / 60 HARI</span>
        <span>ABSURD SCENARIOS</span>
      </div>
      <button class="primary" id="start">Mulai cerita →</button>
      <div class="cover-foot">Satir interaktif tentang dunia startup dan keputusan bisnis.</div>
    </section>
  `;
  document.querySelector('#start').onclick = () => {
    state.page = 'arrival';
    render();
    window.scrollTo(0, 0);
  };
}

function showArrival() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/building-exterior.png)">
      <header class="story-head">
        <div class="day-title">HARI PERTAMA</div>
        <div class="day-meta">PELATARAN GEDUNG<strong>08:45 WIB</strong></div>
      </header>
      <div class="story-body">
        <div class="story-panel">
          <div class="speaker">Kamu · CMO Baru</div>
          <div class="dialogue">“Setelah tujuh ronde interview gila dan tes psikologi yang absurd, akhirnya hari ini tiba. Ini dia menara kantor Ruang Tumbuh.”</div>
          <h2>Tiba di depan kantor Ruang Tumbuh</h2>
          <p>Kamu berdiri di pelataran depan gedung perkantoran megah Jakarta. Menurut kabar burung, kas perusahaan tinggal 60 hari, penjualan turun drastis, dan para dewan direksi sudah menunggu di lantai 12. Jam di tangan menunjukkan pukul 08.45 WIB. Apa yang kamu lakukan sebelum melangkah masuk?</p>
        </div>
        <div class="story-question">Apa tindakan pertamamu di pelataran gedung?</div>
        <div class="story-choices">
          <button class="story-choice" id="arrival-enter">Langsung melangkah tegap masuk lobi menemui Damar dan dewan direksi →</button>
          <button class="story-choice" id="arrival-smoke">Santai sejenak sebat ngerokok kretek di pojokan parkiran mobil sambil mengumpulkan nyawa →</button>
          <button class="story-choice" id="arrival-starling">Beli kopi keliling (starling) di trotoar depan gedung sambil menyusun strategi di kepala →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#arrival-enter').onclick = () => {
    state.page = 'welcome';
    render();
    window.scrollTo(0, 0);
  };
  document.querySelector('#arrival-smoke').onclick = () => {
    state.page = 'smoke';
    render();
    window.scrollTo(0, 0);
  };
  document.querySelector('#arrival-starling').onclick = () => {
    state.page = 'starling';
    render();
    window.scrollTo(0, 0);
  };
}

function showStarling() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/building-exterior.png)">
      <header class="story-head">
        <div class="day-title">HARI PERTAMA</div>
        <div class="day-meta">TROTOAR DEPAN GEDUNG<strong>08:50 WIB</strong></div>
      </header>
      <img class="story-character" src="assets/starling-remake.png" alt="Bang Udin Starling">
      <div class="story-body">
        <div class="story-panel">
          <div class="speaker">Bang Udin · Barista Sepeda Starling</div>
          <div class="dialogue">“Kopi tubruk manis satu ya, Mas Bos. Kelihatan tegang amat mukanya. Hidup itu diseruput pelan-pelan, jangan kalah sama target korporat.”</div>
          <h2>Secangkir kafein jalanan</h2>
          <p>Seruputan kopi panas di trotoar mengembalikan fokus dan ketenanganmu. Kamu mencatat poin-poin penting di aplikasi notes handphone. <strong>Insight +5, Chaos +4</strong>. Sekarang saatnya melangkah masuk ke dalam gedung.</p>
        </div>
        <div class="story-choices" style="margin-top:16px">
          <button class="story-choice" id="starling-enter">Melangkah masuk ke lobi menemui Damar →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#starling-enter').onclick = () => {
    state.stats.insight = Math.min(100, state.stats.insight + 5);
    state.stats.chaos = Math.min(100, state.stats.chaos + 4);
    state.page = 'welcome';
    render();
    window.scrollTo(0, 0);
  };
}

function showSmoke() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/parking-lot.png)">
      <header class="story-head">
        <div class="day-title">HARI PERTAMA</div>
        <div class="day-meta">POJOKAN PARKIRAN<strong>08:52 WIB</strong></div>
      </header>
      <img class="story-character" src="assets/satpam.png?v=2" alt="Pak Slamet Satpam">
      <div class="story-body">
        <div class="story-panel">
          <div class="speaker">Pak Slamet · Satpam Gedung</div>
          <div class="dialogue">“Mas! Mas CMO baru ya? Jangan merokok di situ Mas! Di balik tumpukan kardus itu ada jeriken tiner pembersih lantai dan arsip berkas pajak lama!”</div>
          <h2>Sebat rokok yang berujung petaka</h2>
          <p>Kamu baru saja menyedot tarikan kedua rokok kretekmu dengan nikmat. Terkejut oleh teriakan satpam, tanganmu reflek menjentikkan puntung rokok yang masih menyala merah ke arah tempat sampah terbuka. Dalam sepersekian detik, percikan bara api menyambar tumpukan tiner dan kardus arsip yang kering kerontang!</p>
        </div>
        <div class="story-choices" style="margin-top:16px">
          <button class="story-choice" id="fire-panic" style="background:linear-gradient(105deg,#c8372d,#ea6b35)">WADUH! APINYA MENYAMBAR DINDING! LARI! →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#fire-panic').onclick = () => {
    state.page = 'fire';
    render();
    window.scrollTo(0, 0);
  };
}

function showFire() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/burning-building.png)">
      <header class="story-head">
        <div class="day-title" style="color:#ff687d">BENCANA BESAR</div>
        <div class="day-meta">KONDISI KAS<strong>◉ 0 / HANGUS</strong></div>
      </header>
      <img class="story-character" src="assets/founder-shock.png?v=4" alt="Damar Panik Histeris">
      <div class="story-body">
        <div class="story-panel" style="border-color:#ff687d88">
          <div class="speaker" style="color:#ff8569">Damar · CEO (Histeris di Trotoar)</div>
          <div class="dialogue">“SIAPA YANG MEROKOK DI SAMPING TAMPUNGAN TINER?! GEDUNG, SERVER, LAPTOP, DAN DOKUMEN UTANG KITA TERBAKAR HABIS! KITA BANGKRUT TOTAL SEBELUM JAM MAKAN SIANG!”</div>
          <h2>Menara perkantoran dilalap si jago merah</h2>
          <p>Asap hitam pekat membubung tinggi ke langit Jakarta, menutupi sinar matahari. Sirine armada mobil pemadam kebakaran meraung-raung dari kejauhan. Kamu, Damar, dan para dewan direksi hanya bisa berdiri mematung di seberang jalan dengan pakaian berbau sangit menyaksikan gedung kantor ludes menjadi arang.</p>
        </div>
        <div class="story-choices" style="margin-top:16px">
          <button class="primary" id="see-disaster-ending" style="background:#ff687d;color:#fff;width:100%">Lihat vonis akhir kariermu →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#see-disaster-ending').onclick = () => {
    state.page = 'bad_ending_fire';
    render();
    window.scrollTo(0, 0);
  };
}

function showBadEndingFire() {
  aside.innerHTML = '';
  const scores = [
    ['Kas', 0],
    ['Intel (Insight)', 10],
    ['Tim', 0],
    ['Kepercayaan', 0],
    ['Chaos', 100]
  ];
  main.innerHTML = `
    <section class="story-screen result-screen" style="background-image:url(assets/burning-building.png)">
      <div class="result-content">
        <div class="eyebrow" style="color:#ff687d;font-weight:800;letter-spacing:0.15em">★ SECRET BAD ENDING ★</div>
        <div style="display:inline-block;padding:4px 10px;border-radius:4px;background:#ffffff15;font-size:11px;font-weight:800;color:#ff687d;margin:6px 0 12px;border:1px solid #ff687d44">
          F-TIER · ARSONIST CMO
        </div>
        <h1 style="color:#ffffff">Firestarter CMO: Abu Arang Korporat</h1>
        <p class="result-ending">Belum genap satu jam menjabat sebagai Chief Marketing Officer di Ruang Tumbuh, kamu sudah sukses mencetak rekor: membakar habis seluruh gedung kantor pusat, server database, dan tumpukan dokumen audit hanya gara-gara sebatang rokok kretek di dekat jeriken tiner. Damar pingsan di trotoar, dewan komisaris melongo histeris di pinggir jalan, dan wajahmu langsung tayang sebagai buronan utama di Breaking News TV One. Karier startup-mu tamat dalam 15 menit!</p>

        <div class="result-card result-scores">
          <h2>Indikator Akhir (Bencana Total)</h2>
          <p class="result-hint">Skala metrik 0–100</p>
          <div class="result-score-grid">
            ${scores.map(([name, value]) => `
              <div class="result-score">
                <span>${name}</span>
                <strong>${value}</strong>
              </div>
            `).join('')}
          </div>
        </div>

        <button class="primary" id="restart">Main lagi ↻</button>
        <p class="result-note">RE:GROWTH Chaos Edition · Pelajaran moral: Jangan pernah merokok di dekat jeriken tiner.</p>
      </div>
    </section>
  `;
  document.querySelector('#restart').onclick = reset;
}

function showWelcome() {
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/office.png)">
      <header class="story-head">
        <div class="day-title">LOBI UTAMA · LANTAI 1</div>
        <div class="day-meta">HARI PERTAMA<strong>01 / 60</strong></div>
      </header>
      <img class="story-character" src="assets/founder.png" alt="Damar CEO">
      <div class="story-body">
        <div class="story-panel">
          <div class="speaker">Damar · CEO</div>
          <div class="dialogue">“Syukurlah kamu sudah sampai! Masuk ke lift sekarang—Mira, Bagas, dan komisaris sudah berkumpul di ruang sidang lantai 12. Kas kita sekarat dan unicorn sebelah mulai menyerang, jadi siapkan nyalimu!”</div>
          <h2>Disambut di Lobi PT Ruang Tumbuh</h2>
          <p>Begitu kamu melewati gerbang kaca lobi, Damar langsung menghampirimu di depan lift eksekutif sambil memegang setumpuk map merah. Misi penyelamatan selama 60 hari resmi dimulai detik ini.</p>
        </div>
        <div class="story-choices">
          <button class="story-choice" id="board">Naik lift ke ruang sidang lantai 12 →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#board').onclick = () => {
    state.page = 'game';
    render();
    window.scrollTo(0, 0);
  };
}

function showTransition() {
  const tr = transitions[state.week];
  if (!tr) {
    proceedTransition();
    return;
  }
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/${tr.background}.png)">
      <header class="story-head">
        <div class="day-title" style="font-size:clamp(17px,4.5vw,24px)">${tr.title}</div>
        <div class="day-meta">CUTSCENE<strong>TRANSISI</strong></div>
      </header>
      <div class="story-body">
        <div class="story-panel" style="backdrop-filter:blur(16px);border-color:#d0ec8066">
          <div class="speaker">Perjalanan Cerita</div>
          <h2>${tr.heading}</h2>
          <p style="font-size:13px;line-height:1.7">${tr.body}</p>
        </div>
        <div class="story-choices" style="margin-top:16px">
          <button class="story-choice" id="continue-transition" style="padding:15px;font-size:13px">${tr.button}</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#continue-transition').onclick = proceedTransition;
}

function showGame() {
  const week = weeks[state.week];
  const variant = week.variants[state.week === 0 ? 0 : state.route];
  const sprite = week.sprite === 'character' && (state.lastDelta.team >= 7 || state.lastDelta.trust >= 7)
    ? 'character-happy'
    : week.sprite === 'founder' && state.stats.cash < 35
      ? 'founder-worried'
      : week.sprite;

  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/${week.background}.png)">
      <header class="story-head">
        <div class="day-title">MINGGU ${state.week + 1}</div>
        <div class="day-meta">
          MISI 60 HARI
          <strong>◉ KAS ${state.stats.cash} · ⚡ CHAOS ${state.stats.chaos}</strong>
        </div>
      </header>
      <img class="story-character" src="assets/${sprite}.png?v=2" alt="${week.speaker}">
      <div class="story-body">
        ${state.previous ? `<div class="previous-outcome"><strong>Dampak keputusanmu:</strong> ${state.previous}</div>` : ''}
        <div class="story-panel">
          <div class="speaker">${week.speaker}</div>
          <div class="dialogue">“${variant.dialogue || week.dialogue}”</div>
          <h2>${week.title}</h2>
          <p>${week.intro} ${variant.body}</p>
        </div>
        <div class="story-question">${week.question || 'Apa manuver pilihanmu sebagai CMO?'}</div>
        <div class="story-choices">
          ${variant.options.map((option, i) => `
            <button class="story-choice" data-choice="${i}">${option[0]}</button>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-choice]').forEach(button => {
    button.onclick = () => choose(Number(button.dataset.choice));
  });
}

function showReaction() {
  const reaction = state.reactions[0];
  const bg = reaction.background || 'meeting';
  aside.innerHTML = '';
  main.innerHTML = `
    <section class="story-screen" style="background-image:url(assets/${bg}.png)">
      <header class="story-head">
        <div class="day-title reaction-division">${reaction.division}</div>
        <div class="day-meta">KONDISI KAS<strong>◉ ${state.stats.cash} / 100</strong></div>
      </header>
      <img class="story-character" src="assets/${reaction.sprite}.png?v=2" alt="${reaction.speaker}">
      <div class="story-body">
        <div class="story-panel">
          <div class="speaker">${reaction.speaker}</div>
          <div class="dialogue">“${reaction.dialogue}”</div>
          <h2>Tanggapan atas manuvermu</h2>
          <p>Keputusanmu: <em>"${reaction.choice}"</em></p>
          <p style="margin-top:6px;color:#a0b8aa">${reaction.detail}</p>
        </div>
        <div class="story-choices">
          <button class="story-choice" id="continue-reaction">Lanjut perjalanan →</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#continue-reaction').onclick = advanceReaction;
}

function showResult() {
  aside.innerHTML = '';
  const ending = determineEnding();
  const scores = [
    ['Kas', state.stats.cash],
    ['Intel (Insight)', state.stats.insight],
    ['Tim', state.stats.team],
    ['Kepercayaan', state.stats.trust],
    ['Chaos', state.stats.chaos]
  ];

  main.innerHTML = `
    <section class="story-screen result-screen">
      <div class="result-content">
        <div class="eyebrow" style="color:${ending.color};font-weight:800;letter-spacing:0.15em">${ending.badge}</div>
        <div style="display:inline-block;padding:4px 10px;border-radius:4px;background:#ffffff15;font-size:11px;font-weight:800;color:${ending.color};margin:6px 0 12px;border:1px solid ${ending.color}44">
          ${ending.grade}
        </div>
        <h1 style="color:#ffffff">${ending.title}</h1>
        <p class="result-ending">${ending.body}</p>

        <div class="result-card result-scores">
          <h2>Indikator Akhir 60 Hari</h2>
          <p class="result-hint">Skala metrik 0–100</p>
          <div class="result-score-grid">
            ${scores.map(([name, value]) => `
              <div class="result-score">
                <span>${name}</span>
                <strong>${value}</strong>
              </div>
            `).join('')}
          </div>
        </div>

        <details class="result-history">
          <summary>Catatan 10 Minggu Jejak Keputusanmu <span aria-hidden="true">↓</span></summary>
          <ol>
            ${state.history.map(item => `
              <li>
                <span>Minggu ${item.week} · ${item.title || ''}</span>
                <strong>${item.choice}</strong>
                <p>${item.outcome}</p>
              </li>
            `).join('')}
          </ol>
        </details>

        <button class="primary" id="restart">Main lagi ↻</button>
        <p class="result-note">RE:GROWTH Chaos Edition · 4 Ending Terbuka (3 Normal + 1 Perfect).</p>
      </div>
    </section>
  `;
  document.querySelector('#restart').onclick = reset;
}

// Cabang perjalanan menuju Senopati. Semua jalur yang selamat kembali ke minggu kedua.
const travelScenes = {
  travel_transport: {
    background: 'street-traffic', location: 'DEPAN KANTOR', title: 'Berangkat ke Senopati',
    speaker: 'Damar · CEO', dialogue: 'Gue duluan, ya. Aldi udah buka laptopnya. Pilih kendaraan yang bikin lo bisa nyusul sebelum dia tutup presentasi!',
    body: 'Dari depan kantor, kamu punya tiga pilihan untuk menyusul Damar ke kafe. Jalan utama tampak padat, tapi keadaan Jakarta bisa berubah setiap menit.',
    question: 'Mau berangkat naik apa?',
    options: [['Pakai mobil kantor', 'travel_car'], ['Naik Gojek', 'travel_gojek'], ['Naik MRT', 'travel_mrt']]
  },
  travel_car: {
    background: 'travel-traffic', location: 'JALAN SUDIRMAN', title: 'Ada apa di depan?',
    speaker: 'Pak Joko · Sopir Kantor', dialogue: 'Waduh, Pak. Dari tadi mobilnya nggak gerak. Di depan kayaknya ada kerumunan, tapi saya belum bisa lihat jelas.',
    body: 'Lampu rem memanjang sampai tikungan. Di kejauhan terdengar suara pengeras suara dan orang-orang memenuhi jalan. Damar mengirim pesan: “Cepat, Aldi sudah pesan kopi kedua.”',
    question: 'Apa yang kamu lakukan?',
    options: [['Penasaran, turun dan lihat keramaiannya', 'travel_demo'], ['Tetap di mobil dan lanjut saat jalan terbuka', 'travel_arrive']]
  },
  travel_demo: {
    background: 'travel-protest-v2', location: 'TENGAH KOTA', title: 'Terseret arus massa',
    speaker: 'Peserta Aksi', dialogue: 'Mas, jangan bengong di tengah jalan! Kalau mau ikut, sini pegang kardusnya!',
    body: 'Ternyata ada aksi demonstrasi. Seorang peserta menyodorkan kardus bekas bertuliskan tuntutan yang belum sempat kamu baca. Sopir kantor menunggu di ujung jalan sambil melambaikan tangan.',
    question: 'Kamu memilih apa?',
    options: [['Ikutan demo dan angkat kardusnya', 'travel_arrest_demo'], ['Balik ke mobil dan lanjut ke kafe', 'travel_arrive']]
  },
  travel_gojek: {
    background: 'travel-gojek', location: 'SENOPATI', title: 'Tiba tanpa drama',
    speaker: 'Driver Gojek', dialogue: 'Sudah sampai, Kak. Semoga meeting-nya lancar!',
    body: 'Kamu turun di depan kafe dan melihat Damar melambai dari balik jendela. Emang pake Gojek gak pake ribet melewati macet #GojekAja',
    question: '', options: [['Temui Damar di kafe', 'game']]
  },
  travel_mrt: {
    background: 'travel-mrt-v2', location: 'DI DALAM MRT', title: 'Penumpang paling tidak terduga',
    speaker: 'Kamu · CMO Baru', dialogue: 'Sebentar... itu Presiden? Di gerbong yang sama? Ini Jakarta atau simulasi?',
    body: 'Di ujung gerbong, Presiden fiksi negeri ini sedang meninjau transportasi umum bersama pengawal. Pintu akan terbuka di stasiun berikutnya—waktumu untuk mencapai Senopati makin tipis.',
    question: 'Apa yang kamu lakukan?',
    options: [['Cuek saja dan turun di stasiun tujuan', 'travel_arrive'], ['Menyapa Presiden', 'travel_arrest_mrt']]
  },
  travel_arrive: {
    background: 'senopati-cafe', location: 'KAFE SENOPATI', title: 'Akhirnya sampai',
    speaker: 'Damar · CEO', dialogue: 'Akhirnya! Cepat duduk. Aldi baru saja buka slide yang kayaknya penting.',
    body: 'Kamu berhasil menyusul Damar. Di meja seberang, Aldi sedang memamerkan presentasinya. Misi mengintai kompetitor pun dimulai.',
    question: '', options: [['Masuk ke kafe', 'game']]
  }
};

const travelEndings = {
  travel_arrest_demo: {
    title: 'CMO di Balik Jeruji',
    body: 'Baru saja kamu mengangkat kardus, barisan pengamanan bergerak membubarkan kerumunan. Dalam kekacauan, kamu ikut diamankan bersama massa. Ponselmu tertinggal di mobil, Damar menunggu di kafe, dan rapat terpenting minggu ini resmi berubah menjadi urusan kantor polisi. Karier CMO-mu berakhir sebelum sempat memesan kopi.',
    note: 'Satu kardus. Satu perjalanan yang melenceng jauh.'
  },
  travel_arrest_mrt: {
    title: 'Salam yang Terlalu Mahal',
    body: '“Pak Presiden, boleh networking sebentar?” sapamu sambil meraih kartu nama. Pengawal salah mengira gerakan mendadakmu sebagai ancaman dan langsung mengamankanmu. Beberapa jam kemudian, kamu masih di sel menunggu kesalahpahaman dijelaskan. Damar sudah menyelesaikan kopi ketiganya sendirian; misi Senopati gagal total.',
    note: 'Kadang kartu nama perlu menunggu waktu yang tepat.'
  }
};

function showTravel() {
  aside.innerHTML = '';
  const ending = travelEndings[state.page];
  if (ending) {
    main.innerHTML = `
      <section class="story-screen result-screen" style="background-image:url(assets/travel-cell.png)">
        <div class="result-content">
          <div class="eyebrow" style="color:#ff8569">★ BAD ENDING ★</div>
          <h1>${ending.title}</h1><p class="result-ending">${ending.body}</p>
          <button class="primary" id="restart">Main lagi ↻</button>
          <p class="result-note">${ending.note}</p>
        </div>
      </section>`;
    document.querySelector('#restart').onclick = reset;
    return;
  }
  const scene = travelScenes[state.page];
  if (!scene) { state.page = state.pending; render(); return; }
  main.innerHTML = `
    <section class="story-screen${state.page === 'travel_demo' ? ' protest-scene' : ''}" style="background-image:url(assets/${scene.background}.png)">
      <header class="story-head"><div class="day-title">MINGGU 2</div><div class="day-meta">${scene.location}<strong>OTW SENOPATI</strong></div></header>
      <div class="story-body"><div class="story-panel"><div class="speaker">${scene.speaker}</div>
        <div class="dialogue">“${scene.dialogue}”</div><h2>${scene.title}</h2><p>${scene.body}</p></div>
        ${scene.question ? `<div class="story-question">${scene.question}</div>` : ''}
        <div class="story-choices"${scene.question ? '' : ' style="margin-top:16px"'}>
          ${scene.options.map(([label], index) => `<button class="story-choice" data-travel-choice="${index}">${label} →</button>`).join('')}
        </div>
      </div>
    </section>`;
  document.querySelectorAll('[data-travel-choice]').forEach(button => {
    button.onclick = () => {
      state.page = scene.options[Number(button.dataset.travelChoice)][1];
      render();
      window.scrollTo(0, 0);
    };
  });
}

render();
