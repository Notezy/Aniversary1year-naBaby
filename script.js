// 1. Live Anniversary Counter
const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 1);

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').innerText = String(days).padStart(3, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();

// 2. Music Player Control
let isPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btnText = document.getElementById('musicBtnText');

    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            btnText.innerText = "ปิดเพลง 🎵";
        }).catch(() => {
            btnText.innerText = "ไม่สามารถเล่นเพลงได้ 🔇";
        });
    } else {
        audio.pause();
        isPlaying = false;
        btnText.innerText = "เปิดเพลงรัก 🎵";
    }
}

// 3. Modal System
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// 4. Photo Lightbox System
function showLightbox(src, caption) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxCaption').innerText = caption;
    openModal('lightboxModal');
}