/**
 * ★ HA MUSIC Player
 * Expanded 10-Track Database, Collapsible Lyrics Grid & Synced Seeking Engine (V3)
 */

// --- Curated 10-Track South Asian Master Database ---
const tracks = [
  {
    id: 0,
    title: "Tajdar-e-Haram",
    artist: "Atif Aslam",
    audioUrl: "/audio/Tajdar-e-Haram.mp3",
    coverUrl: "data:image/jpeg;base64,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",
    colorStart: "#ff007f",
    colorEnd: "#7f00ff",
    colorStartRGB: "255, 0, 127",
    colorEndRGB: "127, 0, 255",
    duration: " 10:28",
    isFavorite: false,
    lyrics: [
    { time: 0, text: "♪ Beautiful Sufi Harmonium & Sarangi Intro ♪" },
  { time: 20, text: "♪ Soft Tabla and Acoustic Guitar Joins ♪" },
  
  // Intro
  { time: 39, text: "Kismat mein meri chain se jeena likh de" },
  { time: 51, text: "Doobe na kabhi mera safeena likh de" },
  { time: 63, text: "Jannat bhi gawaarah hai, magar mere liye" },
  { time: 76, text: "Ae kaatib-e-taqdeer, Madina likh de" },
  
  // Chorus
  { time: 92, text: "Tajdar-e-haram, ho nigaah-e-karam" },
  { time: 104, text: "Tajdar-e-haram, ho nigaah-e-karam" },
  { time: 116, text: "Hum gareebon ke din bhi sawwar jaayenge" },
  { time: 128, text: "Haami-e-bekasaan, kya kahega jahaan" },
  { time: 140, text: "Aap ke dar se khaali agar jaayenge" },
  { time: 152, text: "Tajdar-e-haram, Tajdar-e-haram" },
  
  { time: 164, text: "♪ Rhythmic Qawwali Clapping Interlude ♪" },
  
  // Verse 1
  { time: 188, text: "Koi apna nahi, gham ke maare hai hum" },
  { time: 200, text: "Aapke dar pe fariyaad laaye hai hum" },
  { time: 212, text: "Ho nigaah-e-karam, warna chaukhat pe hum" },
  { time: 224, text: "Aapka naam le le ke mar jaayenge" },
  { time: 236, text: "Tajdar-e-haram, Tajdar-e-haram" },
  
  { time: 248, text: "♪ Soft Melodious Rubab & Sitar Transition ♪" },
  
  // Verse 2
  { time: 268, text: "Kya tumse kahoon ae Arab ke Kunwar" },
  { time: 277, text: "Tum jaante ho mann ki batiya" },
  { time: 286, text: "Dar-e-furqat toh, ae ummi-laqab" },
  { time: 295, text: "Kaatey na kat ti ab rattiyan" },
  { time: 304, text: "Tohri preet mein sudh-budh sab bisri" },
  { time: 313, text: "Kab tak rahegi yeh bekhabari" },
  { time: 322, text: "Gaahe ba-figan duzdeedah nazar" },
  { time: 331, text: "Kabhi sun bhi toh lo humaari battiyaan" },
  { time: 340, text: "Aapke dar se na koi khaali gaya" },
  { time: 350, text: "Apne daaman ko bhar ke sawaali gaya" },
  { time: 360, text: "Ho habeeb-e-hazeen par bhi Aaqa nazar" },
  { time: 370, text: "Warna auraq-e-hasti bikhar jaayenge" },
  { time: 382, text: "Tajdar-e-haram, Tajdar-e-haram" },
  
  { time: 395, text: "♪ Transition to High Tempo Drums & Clapping ♪" },
  
  // Verse 3
  { time: 412, text: "Maikasho aao aao Madine chalein" },
  { time: 417, text: "Madine chalein, Madine chalein" },
  { time: 421, text: "Aao Madine chalein, aao Madine chalein" },
  { time: 425, text: "Isi mahine chalein, aao Madine chalein" },
  { time: 429, text: "Tajalliyo ki ajab hai fizaa Madine mein" },
  { time: 435, text: "Nigah-e-shauq ki hai intehaa Madine mein" },
  { time: 441, text: "Gham-e-hayaat na khauf-e-kazaa Madine mein" },
  { time: 447, text: "Namaaz-e-ishq karenge adaa Madine mein" },
  { time: 453, text: "Barah-e-raast hai rah-e-Khuda Madine mein" },
  { time: 459, text: "Aao Madine chalein, aao Madine chalein" },
  { time: 463, text: "Isi mahine chalein, aao Madine chalein" },
  { time: 467, text: "Maikasho aao aao Madine chalein" },
  { time: 472, text: "Dast-e-saaqi-e-kausar se peene chalein" },
  { time: 478, text: "Yaad rakho agar, uth gayi ek nazar" },
  { time: 485, text: "Jitne khaali hai sab jaam bhar jaayenge" },
  { time: 494, text: "Tajdar-e-haram, Tajdar-e-haram" },
  
  { time: 506, text: "♪ Deep Spiritual Percussion & Flute Interlude ♪" },
  
  // Verse 4
  { time: 520, text: "Khauf-e-toofan hai, bijliyon ka hai dar" },
  { time: 528, text: "Sakht mushkil hai Aaqa, kidhar jaaye hum" },
  { time: 536, text: "Aap hi gar na lenge humaari khabar" },
  { time: 544, text: "Hum museebat ke maarey kidhar jaayenge" },
  { time: 552, text: "Tajdar-e-haram, Tajdar-e-haram" },
  
  // Arabic & Persian Outro
  { time: 564, text: "Ya Mustafa, ya Mujtaba, Irham lana, irham lana" },
  { time: 572, text: "Dast-e-hama, bechaara ra, Daaman tuhi, daaman tuhi" },
  { time: 580, text: "Mann aasiyam, mann aajizam, Mann bekasam, haal-e-mara" },
  { time: 588, text: "Pursan tuhi, pursan tuhi" },
  { time: 594, text: "Ae mushk-bed ambar fishaan, Paik-e-naseem-e-subah dam" },
  { time: 600, text: "Ae charagar, Eesa-nafas, Ae moonis-e-beemar-e-gham" },
  { time: 605, text: "Ae qaasid-e-farkhundah-paye, Tujh ko usi gul ki qasam" },
  { time: 610, text: "In nalta ya reeh-as-saba, Yauman ila ard-il-haram" },
  { time: 614, text: "Balligh salaami rawda-tan, Feeh-an-Nabi-yul-mohtaram" },
  
  // Conclusion
  { time: 618, text: "Tajdar-e-haram, ho nigaah-e-karam" },
  { time: 621, text: "Hum gareebon ke din bhi sawwar jaayenge" },
  { time: 623, text: "Haami-e-bekasaan, kya kahega jahaan" },
  { time: 625, text: "Aapke dar se khaali agar jaayenge" },
  { time: 627, text: "Tajdar-e-haram, Tajdar-e-haram" },
  { time: 628, text: "♪ Track Ends (10:28) ♪" }
    ],
    credits: {
      writers: "Traditional (Hazrat Sharafuddin)",
      producers: "Shiraz Uppal"
    }
  },
  {
    id: 1,
    title: "Afreen Afreen",
    artist: "Rahat Fateh Ali Khan",
    audioUrl: "/audio/Afreen Afreen.mp3",
    coverUrl: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&auto=format&fit=crop&q=80",
    colorStart: "#ff5e62",
    colorEnd: "#ff9966",
    colorStartRGB: "255, 94, 98",
    colorEndRGB: "255, 153, 102",
    duration: "06:33",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Soft Acoustic Strings & Harmonium ♪" },
      { time: 8, text: "Husn-e-jaana ki tareef kya poochiye" },
      { time: 16, text: "Aap jaise jahan mein koi nahi" },
      { time: 24, text: "Afreen afreen, afreen afreen" },
      { time: 32, text: "Aise zeba nazaara koi nahi" },
      { time: 40, text: "Taareef us khuda ki jisne tumhe banaya" },
      { time: 48, text: "Afreen afreen, afreen afreen..." }
    ],
    credits: {
      writers: "Javed Akhtar",
      producers: "Faakhir Mehmood"
    }
  },
  {
    id: 2,
    title: "Kun Faya Kun",
    artist: "A.R. Rahman & Javed Ali",
    audioUrl: "/audio/Kun Faya Kun.mp3",
    coverUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&auto=format&fit=crop&q=80",
    colorStart: "#00f2fe",
    colorEnd: "#4facfe",
    colorStartRGB: "0, 242, 254",
    colorEndRGB: "79, 172, 254",
    duration: "06:20",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Spiritual Ambient Synthesizer Intro ♪" },
      { time: 8, text: "Ya Rab, ya Rab, ya Rab..." },
      { time: 16, text: "Jab kahin pe kuch nahi bhi nahi tha" },
      { time: 24, text: "Wohi tha, wohi tha, wohi tha" },
      { time: 32, text: "Kun faya kun, kun faya kun" },
      { time: 40, text: "Sadaayein, fazaayein, samaayein..." },
      { time: 48, text: "Mann ke mere is andhere mein..." }
    ],
    credits: {
      writers: "Prasoon Joshi",
      producers: "A.R. Rahman"
    }
  },
  {
    id: 3,
    title: "Pasoori",
    artist: "Ali Sethi & Shae Gill",
    audioUrl: "/audio/Pasoori.mp3",
    coverUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",
    colorStart: "#ffd200",
    colorEnd: "#f7971e",
    colorStartRGB: "255, 210, 0",
    colorEndRGB: "247, 151, 30",
    duration: "04:36",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Dynamic Rubab & Percussion Intro ♪" },
      { time: 6, text: "Agg laavan majboori nu" },
      { time: 10, text: "Aan jaan di pasoori nu" },
      { time: 14, text: "Zehar bane teri peeli nu" },
      { time: 18, text: "Aave hawa di roori nu" },
      { time: 22, text: "Aa chalein yaara de ghar waley" },
      { time: 26, text: "Khaavein dil mera ghootan khaley..." },
      { time: 30, text: "Dil jaaniyan, dil jaaniyan" },
      { time: 34, text: "Mere kol beh ke dukhde suna jaa!" },
      { time: 38, text: "Agg laavan majboori nu" },
      { time: 42, text: "Aan jaan di pasoori nu..." }
    ],
    credits: {
      writers: "Ali Sethi, Fazal Abbas",
      producers: "Abdullah Siddiqui, Xulfi"
    }
  },
  {
    id: 4,
    title: "Chaap Tilak",
    artist: "Abida Parveen",
    audioUrl: "/audio/Chaap Tilak.mp3",
    coverUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80",
    colorStart: "#11998e",
    colorEnd: "#38ef7d",
    colorStartRGB: "17, 153, 142",
    colorEndRGB: "56, 239, 125",
    duration: "09:02",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Soulful Sufi Harmonium & Dholak ♪" },
      { time: 8, text: "Chaap tilak sab cheeni ray" },
      { time: 16, text: "Mose naina milai kay" },
      { time: 24, text: "Prem bhati ka madva pilai kay" },
      { time: 32, text: "Matwaali kar deeni ray" },
      { time: 40, text: "Apni si rang leeni ray" },
      { time: 48, text: "Mose naina milai kay..." }
    ],
    credits: {
      writers: "Amir Khusrow (Traditional)",
      producers: "Coke Studio"
    }
  },
  {
    id: 5,
    title: "Tu Kuja Man Kuja",
    artist: "Shiraz Uppal & Rafaqat Ali Khan",
    audioUrl: "/audio/Tu Kuja Man Kuja.mp3",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop&q=80",
    colorStart: "#8e2de2",
    colorEnd: "#4a00e0",
    colorStartRGB: "142, 45, 226",
    colorEndRGB: "74, 0, 224",
    duration: "08:50",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Soulful Sufi Harmonium & Tabla ♪" },
      { time: 10, text: "Tu kuja man kuja, tu kuja man kuja" },
      { time: 20, text: "Khaaliq-e-kainaat tu, nisf-e-wujood hai mera" },
      { time: 30, text: "Tu haqeeqat hai main sirf ek gumaan" },
      { time: 40, text: "Tu kuja man kuja, tu kuja man kuja..." }
    ],
    credits: {
      writers: "Muzaffar Warsi",
      producers: "Shiraz Uppal"
    }
  },
  {
    id: 6,
    title: "Rang",
    artist: "Rahat Fateh Ali Khan & Amjad Sabri",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80",
    colorStart: "#ff416c",
    colorEnd: "#ff4b2b",
    colorStartRGB: "255, 65, 108",
    colorEndRGB: "255, 75, 43",
    duration: "06:02",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Spiritual Qawwali Clap & Harmonium ♪" },
      { time: 10, text: "Aaj rang hai hey maa rang hai ri" },
      { time: 20, text: "Mere mehboob ke ghar rang hai ri" },
      { time: 30, text: "Mose naina milai ke, rang deeni re rang deeni re" },
      { time: 40, text: "Aaj rang hai hey maa rang hai ri..." }
    ],
    credits: {
      writers: "Hazrat Amir Khusrow",
      producers: "Coke Studio"
    }
  },
  {
    id: 7,
    title: "Garaj Baras",
    artist: "Ali Azmat",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    colorStart: "#11998e",
    colorEnd: "#38ef7d",
    colorStartRGB: "17, 153, 142",
    colorEndRGB: "56, 239, 125",
    duration: "04:55",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Heavy Rock Guitar & Bass Drum ♪" },
      { time: 10, text: "Garaj baras pyaasi dharti ko" },
      { time: 20, text: "Tarsaaye pavan har rutt aaye" },
      { time: 30, text: "Aaye pavan har rutt aaye" },
      { time: 40, text: "Par main na baras paaya..." }
    ],
    credits: {
      writers: "Sabir Zafar, Ali Azmat",
      producers: "Rohail Hyatt"
    }
  },
  {
    id: 8,
    title: "Bulla Ki Jaana",
    artist: "Rabbi Shergill",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    coverUrl: "https://images.unsplash.com/photo-1487180142328-054b783fc471?w=600&auto=format&fit=crop&q=80",
    colorStart: "#ffd200",
    colorEnd: "#f7971e",
    colorStartRGB: "255, 210, 0",
    colorEndRGB: "247, 151, 30",
    duration: "05:08",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Rustic Acoustic Rhythm Strum ♪" },
      { time: 10, text: "Bulla ki jaana main kaun" },
      { time: 20, text: "Na main momin vich maseet aan" },
      { time: 30, text: "Na main vich kufr diyan reet aan" },
      { time: 40, text: "Bulla ki jaana main kaun..." }
    ],
    credits: {
      writers: "Baba Bulleh Shah (Traditional)",
      producers: "Rabbi Shergill"
    }
  },
  {
    id: 9,
    title: "Laili Jaan",
    artist: "Ahmad Zahir",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    colorStart: "#ff007f",
    colorEnd: "#7f00ff",
    colorStartRGB: "255, 0, 127",
    colorEndRGB: "127, 0, 255",
    duration: "04:22",
    isFavorite: false,
    lyrics: [
      { time: 0, text: "♪ Upbeat Afghan Folk Rubab & Drums ♪" },
      { time: 10, text: "Laili laili laili jaan" },
      { time: 20, text: "Del-e-man-ra kardi viran" },
      { time: 30, text: "Khuda-ra dori bas ast digar" },
      { time: 40, text: "Laili laili laili jaan..." }
    ],
    credits: {
      writers: "Ahmad Zahir",
      producers: "Traditional Afghan Folk"
    }
  }
];

// --- Audio Player State ---
let currentIndex = 0;
let isPlaying = false;
let isMuted = false;
let previousVolume = 0.7; // Cache level for unmute toggle
let repeatMode = 'all';    // 'all' (loop list), 'one' (loop track), 'none' (linear stop)
let isShuffle = false;
let isDraggingScrubber = false;
let activeLyricIndex = -1; // Cache lyric matching indexes

// Instantiate programmatic HTML5 Audio engine
const audio = new Audio();
audio.volume = 0.7;
audio.preload = "metadata";

// --- DOM Elements ---
const elAlbumArt = document.getElementById("album-art");
const elArtworkShadow = document.getElementById("artwork-shadow");
const elArtworkWrapper = document.getElementById("artwork-wrapper");
const elSongTitle = document.getElementById("song-title");
const elArtistName = document.getElementById("artist-name");
const elCurrentTime = document.getElementById("current-time");
const elTotalTime = document.getElementById("total-time");
const elAudioLoader = document.getElementById("audio-loader");
const elHeartBtn = document.getElementById("song-favorite");

const elTimelineWrapper = document.getElementById("timeline-slider-wrapper");
const elWaveformBars = document.getElementById("waveform-bars");

const elVolumeIconBtn = document.getElementById("volume-icon-btn");
const elVolumeSlider = document.getElementById("volume-slider");
const elVolumeSvg = document.getElementById("volume-svg");

const elBtnRepeat = document.getElementById("btn-repeat");
const elBtnPrev = document.getElementById("btn-prev");
const elBtnPlayPause = document.getElementById("btn-play-pause");
const elBtnNext = document.getElementById("btn-next");
const elBtnShuffle = document.getElementById("btn-shuffle");

const elTrackListContainer = document.getElementById("track-list");
const elQueueToggle = document.getElementById("queue-toggle");
const elPlaylistQueue = document.getElementById("playlist-queue");
const elPlaySvg = document.getElementById("play-svg");

const elSearchInput = document.getElementById("queue-search");
const elTrackCount = document.getElementById("queue-track-count");

// V3 Elements (Lyrics, Badges, & Collapsible Panels)
const elLyricsPanel = document.getElementById("lyrics-panel");
const elLyricsToggle = document.getElementById("lyrics-toggle"); // Mobile top toggle drawer
const elLyricsPanelToggle = document.getElementById("lyrics-panel-toggle"); // Desktop metadata row toggle
const elLyricsContainer = document.getElementById("lyrics-container");
const elCreditsWriters = document.getElementById("credits-writers");
const elCreditsProducers = document.getElementById("credits-producers");
const elSyncBadge = document.getElementById("lyrics-sync-badge");

// --- Helper Functions ---

/**
 * Format raw seconds into MM:SS format
 * @param {number} seconds 
 * @returns {string} formatted time string
 */
function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Transition design CSS variables dynamically on the document root
 * @param {object} track 
 */
function updateDynamicTheme(track) {
  const root = document.documentElement;
  root.style.setProperty('--accent-color-start', track.colorStart);
  root.style.setProperty('--accent-color-end', track.colorEnd);
  root.style.setProperty('--accent-color-start-rgb', track.colorStartRGB);
  root.style.setProperty('--accent-color-end-rgb', track.colorEndRGB);
}

// --- Player Core Actions ---

/**
 * Load a song by index and prepare it with full dynamic asset synchronization
 * @param {number} index 
 * @param {boolean} shouldPlayNow 
 */
function loadTrack(index, shouldPlayNow = false) {
  if (index < 0 || index >= tracks.length) return;
  
  currentIndex = index;
  const track = tracks[currentIndex];

  // Show buffer spinner
  elAudioLoader.classList.add("visible");
  
  // Set source and load (Absolute synchronization logic)
  audio.src = track.audioUrl;
  audio.load();

  // Update Metadata UI
  elSongTitle.textContent = track.title;
  elArtistName.textContent = track.artist;
  elAlbumArt.src = track.coverUrl;
  elAlbumArt.alt = `${track.title} Album Art`;
  
  // Set pre-rendered durations
  elCurrentTime.textContent = "00:00";
  elTotalTime.textContent = track.duration;
  
  // Reset waveform bars visually
  const bars = elWaveformBars.querySelectorAll(".wave-bar");
  bars.forEach(bar => bar.classList.remove("active"));
  elTimelineWrapper.setAttribute("aria-valuenow", "0");

  // Favorite Gold Heart icon state preservation
  if (track.isFavorite) {
    elHeartBtn.classList.add("hearted");
  } else {
    elHeartBtn.classList.remove("hearted");
  }

  // Load Synced Lyrics inside scrolling viewport
  populateLyrics(track);

  // Load Song Credits dynamically
  elCreditsWriters.innerHTML = `Writers: <strong>${track.credits.writers}</strong>`;
  elCreditsProducers.innerHTML = `Producers: <strong>${track.credits.producers}</strong>`;

  // Update Dynamic Theme Colors
  updateDynamicTheme(track);

  // Update queue highlights
  updateQueueUI();

  if (shouldPlayNow) {
    playTrack();
  } else {
    pauseTrackUI();
  }
}

/**
 * Generate scrollable lyrics items inside Column 3
 * @param {object} track 
 */
function populateLyrics(track) {
  elLyricsContainer.innerHTML = "";
  activeLyricIndex = -1; // Reset matching index cache

  track.lyrics.forEach((line, index) => {
    const p = document.createElement("p");
    p.className = `lyric-line ${index === 0 ? 'active' : ''}`;
    p.textContent = line.text;
    p.setAttribute("data-index", index);
    elLyricsContainer.appendChild(p);
  });
  
  elLyricsContainer.scrollTop = 0; // Scroll back to top
}

/**
 * Trigger programmatic play
 */
function playTrack() {
  isPlaying = true;
  
  // Animate artwork breathing
  elArtworkWrapper.classList.add("playing");
  
  // Toggle Play Button SVG to Pause SVG
  elBtnPlayPause.setAttribute("aria-label", "Pause song");
  elBtnPlayPause.setAttribute("title", "Pause");
  elPlaySvg.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

  // Start active equalizer state in queue item
  const activeQueueItem = document.querySelector(`.track-item[data-index="${currentIndex}"]`);
  if (activeQueueItem) {
    activeQueueItem.classList.add("playing");
  }

  // Update "Live Sync" pulsating badge
  elSyncBadge.textContent = "Live Sync";
  elSyncBadge.classList.add("active-pulse");

  // Play audio stream
  audio.play().then(() => {
    elAudioLoader.classList.remove("visible");
  }).catch(error => {
    console.warn("Autoplay block or loading error: ", error);
    pauseTrackUI();
  });
}

/**
 * Pause music playback
 */
function pauseTrack() {
  isPlaying = false;
  audio.pause();
  pauseTrackUI();
}

/**
 * Reset play controls UI to inactive/pause state
 */
function pauseTrackUI() {
  isPlaying = false;
  elArtworkWrapper.classList.remove("playing");
  elBtnPlayPause.setAttribute("aria-label", "Play song");
  elBtnPlayPause.setAttribute("title", "Play");
  elPlaySvg.innerHTML = `<path d="M8 5v14l11-7z"/>`;
  
  // Pause equalizer animations in queue rows
  const trackItems = document.querySelectorAll(".track-item");
  trackItems.forEach(item => item.classList.remove("playing"));

  // Reset Synced Badge status
  elSyncBadge.textContent = "Synced";
  elSyncBadge.classList.remove("active-pulse");
}

/**
 * Skip forward logic incorporating shuffle states
 */
function nextTrack() {
  let nextIndex = currentIndex;
  
  if (isShuffle) {
    let availableIndices = tracks
      .map((_, idx) => idx)
      .filter(idx => idx !== currentIndex);
      
    if (availableIndices.length === 0) {
      nextIndex = currentIndex;
    } else {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      nextIndex = availableIndices[randIdx];
    }
  } else {
    nextIndex = currentIndex + 1;
    if (nextIndex >= tracks.length) {
      if (repeatMode === 'all') {
        nextIndex = 0; // Loop back
      } else {
        pauseTrack();
        audio.currentTime = 0;
        return;
      }
    }
  }
  
  loadTrack(nextIndex, true);
}

/**
 * Skip backward logic
 */
function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    if (repeatMode === 'all') {
      prevIndex = tracks.length - 1; // Loop back to last
    } else {
      prevIndex = 0;
    }
  }
  
  loadTrack(prevIndex, true);
}

/**
 * Adjust sound levels programmatically and sync UI elements
 * @param {number} val (0 to 1) 
 */
function setVolume(val) {
  val = parseFloat(val);
  if (val < 0) val = 0;
  if (val > 1) val = 1;
  
  audio.volume = val;
  elVolumeSlider.value = val; // Dynamic slider syncing
  
  if (val === 0) {
    isMuted = true;
    updateVolumeIcon(0);
  } else {
    isMuted = false;
    previousVolume = val; // Cache volume level
    updateVolumeIcon(val);
  }
}

/**
 * Toggle volume mute state and synchronize slider handles
 */
function toggleMute() {
  if (isMuted) {
    setVolume(previousVolume);
  } else {
    previousVolume = audio.volume;
    setVolume(0); // Instantly updates slider value to 0
  }
}

/**
 * Change Speaker Vector Icon based on strength
 * @param {number} level 
 */
function updateVolumeIcon(level) {
  if (level === 0) {
    elVolumeSvg.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
  } else if (level < 0.4) {
    elVolumeSvg.innerHTML = `<path d="M7 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>`;
  } else {
    elVolumeSvg.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
  }
}

// --- Queue / Playlist Management UI ---

/**
 * Re-render highlight classes and items on playlist queue
 */
function updateQueueUI() {
  const items = elTrackListContainer.querySelectorAll(".track-item");
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
      item.setAttribute("aria-selected", "true");
      
      if (isPlaying) {
        item.classList.add("playing"); // Shows equalizer wave
      }
    } else {
      item.classList.remove("active");
      item.classList.remove("playing");
      item.setAttribute("aria-selected", "false");
    }
  });
}

/**
 * Construct Playlist Items programmatically to bind triggers
 */
function initializePlaylistItems() {
  elTrackListContainer.innerHTML = ""; // Clear placeholders
  
  tracks.forEach((track, index) => {
    const trackRow = document.createElement("div");
    trackRow.className = `track-item ${index === currentIndex ? 'active' : ''}`;
    trackRow.setAttribute("data-index", index);
    trackRow.setAttribute("role", "option");
    trackRow.setAttribute("tabindex", "0");
    trackRow.setAttribute("aria-selected", index === currentIndex ? "true" : "false");

    trackRow.innerHTML = `
      <div class="track-item-left">
        <div class="track-item-thumb-wrapper">
          <img src="${track.coverUrl}" alt="${track.title} Cover" class="track-item-thumb">
        </div>
        <div class="track-item-meta">
          <p class="track-item-title">${track.title}</p>
          <p class="track-item-artist">${track.artist}</p>
        </div>
      </div>
      <div class="track-item-right">
        <div class="equalizer-wave" aria-hidden="true">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
        <span class="track-item-duration">${track.duration}</span>
      </div>
    `;

    // Row Click Listener for smooth state transition without layout shifts
    trackRow.addEventListener("click", () => {
      if (currentIndex === index) {
        if (isPlaying) pauseTrack();
        else playTrack();
      } else {
        loadTrack(index, true);
      }
    });

    // Enter Key accessibility
    trackRow.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trackRow.click();
      }
    });

    elTrackListContainer.appendChild(trackRow);
  });
}

// --- Custom Audio Waveform Seeker Logic ---

/**
 * Handle timeline seek updates from mouse/touch coordinate position
 * @param {Event} e mouse or touch event 
 */
function calculateTimelineProgress(e) {
  const rect = elTimelineWrapper.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  
  let progressX = clientX - rect.left;
  let progressPercent = (progressX / rect.width) * 100;
  
  if (progressPercent < 0) progressPercent = 0;
  if (progressPercent > 100) progressPercent = 100;

  // Color correct wave bars based on drag progress
  updateWaveformColor(progressPercent);
  
  const tempSeconds = (progressPercent / 100) * (audio.duration || 0);
  elCurrentTime.textContent = formatTime(tempSeconds);
  
  return tempSeconds;
}

/**
 * Color vertical waveform bars up to calculated percent
 * @param {number} percent 
 */
function updateWaveformColor(percent) {
  const bars = elWaveformBars.querySelectorAll(".wave-bar");
  const activeCount = Math.round((percent / 100) * bars.length);
  
  bars.forEach((bar, idx) => {
    if (idx < activeCount) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  });
  
  elTimelineWrapper.setAttribute("aria-valuenow", Math.round(percent).toString());
}

/**
 * Set up custom dragging events for the timeline waveform slider
 */
function setupCustomScrubber() {
  const startDrag = (e) => {
    isDraggingScrubber = true;
    const targetSeconds = calculateTimelineProgress(e);
    
    const handleMove = (moveEv) => {
      if (!isDraggingScrubber) return;
      calculateTimelineProgress(moveEv);
    };

    const stopDrag = (stopEv) => {
      if (isDraggingScrubber) {
        isDraggingScrubber = false;
        const rect = elTimelineWrapper.getBoundingClientRect();
        const clientX = stopEv.changedTouches ? stopEv.changedTouches[0].clientX : stopEv.clientX;
        let progressX = clientX - rect.left;
        let progressPercent = (progressX / rect.width) * 100;
        
        if (progressPercent < 0) progressPercent = 0;
        if (progressPercent > 100) progressPercent = 100;
        
        const finalTime = (progressPercent / 100) * (audio.duration || 0);
        
        if (!isNaN(finalTime)) {
          audio.currentTime = finalTime;
        }

        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", stopDrag);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", stopDrag);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", stopDrag);
  };

  elTimelineWrapper.addEventListener("mousedown", startDrag);
  elTimelineWrapper.addEventListener("touchstart", startDrag, { passive: true });
}

// --- Dynamic Lyrics Synchronization Scrolling ---

/**
 * Check currentTime and scroll lyrics smoothly
 * @param {number} elapsedSeconds 
 */
function updateLyricsSync(elapsedSeconds) {
  const lyricLines = tracks[currentIndex].lyrics;
  let activeIndex = -1;

  // Find the current active line index
  for (let i = 0; i < lyricLines.length; i++) {
    if (elapsedSeconds >= lyricLines[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // If matched index has changed, update DOM classes and trigger centering scroll
  if (activeIndex !== activeLyricIndex && activeIndex !== -1) {
    activeLyricIndex = activeIndex;
    
    const pLines = elLyricsContainer.querySelectorAll(".lyric-line");
    pLines.forEach((p, idx) => {
      if (idx === activeIndex) {
        if (!p.classList.contains("active")) {
          p.classList.add("active");
          // Centers active element within scrollable viewport smoothly
          p.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        p.classList.remove("active");
      }
    });
  }
}

// --- Audio Hooks & Lifecycle Listeners ---

function setupAudioListeners() {
  audio.addEventListener("loadedmetadata", () => {
    elTotalTime.textContent = formatTime(audio.duration);
    elAudioLoader.classList.remove("visible");
  });

  audio.addEventListener("timeupdate", () => {
    if (isDraggingScrubber) return;
    
    const elapsed = audio.currentTime;
    const duration = audio.duration || 0;
    
    elCurrentTime.textContent = formatTime(elapsed);
    
    if (duration > 0) {
      const progressPercent = (elapsed / duration) * 100;
      updateWaveformColor(progressPercent);
      
      // Sync lyrics timing
      updateLyricsSync(elapsed);
    }
  });

  audio.addEventListener("waiting", () => {
    elAudioLoader.classList.add("visible");
  });

  audio.addEventListener("canplay", () => {
    elAudioLoader.classList.remove("visible");
  });

  audio.addEventListener("ended", () => {
    if (repeatMode === 'one') {
      audio.currentTime = 0;
      playTrack();
    } else {
      nextTrack();
    }
  });
}

// --- Controller Click Listeners ---

function setupControllerEvents() {
  // Play/Pause Toggle
  elBtnPlayPause.addEventListener("click", () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  });

  // Next Skip
  elBtnNext.addEventListener("click", nextTrack);

  // Prev Skip
  elBtnPrev.addEventListener("click", prevTrack);

  // Heart Favorite Gold Toggle
  elHeartBtn.addEventListener("click", () => {
    const currentTrack = tracks[currentIndex];
    currentTrack.isFavorite = !currentTrack.isFavorite;
    
    if (currentTrack.isFavorite) {
      elHeartBtn.classList.add("hearted");
    } else {
      elHeartBtn.classList.remove("hearted");
    }
  });

  // Desktop Collapsible Lyrics Panel Toggle Click handler
  elLyricsPanelToggle.addEventListener("click", () => {
    elLyricsPanel.classList.toggle("collapsed");
    elLyricsPanelToggle.classList.toggle("active");
  });

  // Instant Search filtering
  elSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const items = elTrackListContainer.querySelectorAll(".track-item");
    let visibleCount = 0;
    
    items.forEach(item => {
      const idx = parseInt(item.getAttribute("data-index"));
      const track = tracks[idx];
      const matches = track.title.toLowerCase().includes(query) || 
                      track.artist.toLowerCase().includes(query);
                      
      if (matches) {
        item.style.display = "flex";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });
    
    // Update track count header label
    elTrackCount.textContent = `${visibleCount} Track${visibleCount !== 1 ? 's' : ''}`;
    
    // Manage empty state visual
    let noResultsEl = elTrackListContainer.querySelector(".no-results-msg");
    if (visibleCount === 0) {
      if (!noResultsEl) {
        noResultsEl = document.createElement("div");
        noResultsEl.className = "no-results-msg";
        noResultsEl.innerHTML = `
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>No tracks match your search</p>
        `;
        elTrackListContainer.appendChild(noResultsEl);
      }
    } else {
      if (noResultsEl) {
        noResultsEl.remove();
      }
    }
  });

  // Repeat Mode Cycle
  elBtnRepeat.addEventListener("click", () => {
    if (repeatMode === 'all') {
      repeatMode = 'one';
      elBtnRepeat.classList.add("active");
      elBtnRepeat.setAttribute("title", "Repeat Track");
      elBtnRepeat.querySelector("svg").style.filter = "hue-rotate(90deg) saturate(2)";
    } else if (repeatMode === 'one') {
      repeatMode = 'none';
      elBtnRepeat.classList.remove("active");
      elBtnRepeat.setAttribute("title", "Repeat Mode Off");
      elBtnRepeat.querySelector("svg").style.filter = "none";
    } else {
      repeatMode = 'all';
      elBtnRepeat.classList.add("active");
      elBtnRepeat.setAttribute("title", "Repeat Playlist");
      elBtnRepeat.querySelector("svg").style.filter = "none";
    }
  });

  // Shuffle Mode Toggle
  elBtnShuffle.addEventListener("click", () => {
    isShuffle = !isShuffle;
    if (isShuffle) {
      elBtnShuffle.classList.add("active");
      elBtnShuffle.setAttribute("title", "Shuffle On");
    } else {
      elBtnShuffle.classList.remove("active");
      elBtnShuffle.setAttribute("title", "Shuffle Off");
    }
  });

  // Volume Bar Input change
  elVolumeSlider.addEventListener("input", (e) => {
    setVolume(e.target.value);
  });

  // Mute button click
  elVolumeIconBtn.addEventListener("click", toggleMute);

  // Side Queue Slide Toggle (Mobile viewport)
  elQueueToggle.addEventListener("click", () => {
    elPlaylistQueue.classList.toggle("visible");
    elLyricsPanel.classList.remove("visible"); // Close other panels
  });

  // Side Lyrics Panel Toggle (Mobile viewport)
  elLyricsToggle.addEventListener("click", () => {
    elLyricsPanel.classList.toggle("visible");
    elPlaylistQueue.classList.remove("visible"); // Close other panels
  });

  // Close sliding panels on clicking outside on mobile sizes
  document.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= 1100;
    if (!isMobile) return;
    
    const isClickInsideLyrics = elLyricsPanel.contains(e.target);
    const isClickInsideQueue = elPlaylistQueue.contains(e.target);
    const isClickLyricsToggle = elLyricsToggle.contains(e.target);
    const isClickQueueToggle = elQueueToggle.contains(e.target);
    
    if (!isClickInsideLyrics && !isClickLyricsToggle && elLyricsPanel.classList.contains("visible")) {
      elLyricsPanel.classList.remove("visible");
    }
    if (!isClickInsideQueue && !isClickQueueToggle && elPlaylistQueue.classList.contains("visible")) {
      elPlaylistQueue.classList.remove("visible");
    }
  });
}

// --- App Initialization Entry Point ---

document.addEventListener("DOMContentLoaded", () => {
  // Pre-load default state variables
  updateDynamicTheme(tracks[0]);
  
  // Render playlist rows (Supports complete 10-track layout dynamically!)
  initializePlaylistItems();
  
  // Register Scrubbing Wave Drag Triggers
  setupCustomScrubber();
  
  // Setup Streaming Triggers
  setupAudioListeners();
  
  // Register controls clicks
  setupControllerEvents();
  
  // Pre-fetch metadata details without auto-playing immediately
  loadTrack(0, false);
  
  // Set volume initial slider state
  elVolumeSlider.value = 0.7;
  audio.volume = 0.7;
  
  // Repeat playlist enabled by default
  elBtnRepeat.classList.add("active");
  
  // Synchronously update dynamic track counter inside playlist queue header
  elTrackCount.textContent = `${tracks.length} Tracks`;

  console.log("★ HA MUSIC player successfully loaded and active with 10 tracks.");
});
