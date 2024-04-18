const screens = document.querySelectorAll()
const choose_insect_btns
const game_container
const start_btn
const timeEl
const scoreEl
const message
let seconds = 0
let score = 0
let selected_insect = {}
start_btn.addEventListener('click', () => {
    screens[0].classList
})



choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {







    })
})


function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = 
}


function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
}