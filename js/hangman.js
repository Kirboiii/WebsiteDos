const wordEl = document.getElementById('word')
wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.getElementById('.figure-part')
const word = ['hi', 'pneumonoultramicroscopicsilicovolcanosis', 'hippopotomonstrosesquippedaliophobia', 'supercalifragilisticexpialidocious']
let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]
const correctLetters = []
const wrongLetters = []
function displayWord() {
    wordEl.innerHTML = `${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')
    }`
    const innerWord = wordEl.innerText.replace(/\n/g, '')
    if (innerWord == selectedWord) {
        finalMessage.innerText = 'Huzzah.'
        popup.style.display = 'flex'
    }
}
function updateWrongLettersEl() {
    wrongLetterEl.innerHTML = `
      ${wrongLetters.length > 0 ? '<p>Wrong Letters!</p>' : ''}
      ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length
        if (index < errors) {
            part.style.display = 'block'
        }
        else {
            part.style.display = 'none'
        }
    })
    if (wrongLetters.length == figureParts.length) {
        finalMessage.innerText = 'You lost. Womp womp... :('
        popup.style.display = 'flex'
    }
}
function showNotification() {
    notification.classList.add('show')
    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)
                displayWord()
            }
            else {
                showNotification()
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)
                updateWrongLettersEl()
            }
            else {
                showNotification()
            }
        }
    }
})
playAgainBtn.addEventListener('click', () => {
    correctLetters.length = 0
    wrongLetters.length = 0
    selectedIndex = Math.floor(word.length * Math.random())
    selectedWord = word[selectedIndex]
    displayWord()
    updateWrongLettersEl()
    popup.style.display = 'none'
})
displayWord()