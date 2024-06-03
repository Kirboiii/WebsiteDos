const musicContainer = document.getElementById('music-container')
const backBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')
const title = document.getElementById('title')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const songs = ['hey', 'summer', 'ukulele']
let songIndex = 0
let playing = false
loadingSong(songs[songIndex])
function loadingSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}
function playSong() {
    audio.play()
    playing = true
    musicContainer.classList.add('play')
    playBtn.querySelector('i').classList.remove('fa-play')
    playBtn.querySelector('i').classList.add('fa-pause')
}
function pauseSong() {
    audio.pause()
    playing = false
    musicContainer.classList.remove('play')
    playBtn.querySelector('i').classList.remove('fa-pause')
    playBtn.querySelector('i').classList.add('fa-play')
}
function setProgress(e) {
    const{duration, currentTime} = e.srcElement
    progress.style.width = `${(currentTime / duration) * 100}%`
}
function updateProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}
function prevSong () {
    songIndex = songIndex - 1
    if (songindex < 0) {
        songIndex = songs.length-1
    }
    loadingSong(songs[songIndex])
    playSong()
}
function nextSong() {
    songIndex = songIndex + 1
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadingSong(songs[songIndex])
    playSong()
}
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})
audio.addEventListener('timeupdate', setProgress)
progressContainer.addEventListener('click', updateProgress)
backBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('ended', nextSong)
