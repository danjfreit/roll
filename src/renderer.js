
function Roll() {
    return Math.floor(Math.random() * 6) + 1;
}

document.querySelector('.rollbtn').addEventListener('click', () => {
    Roll()
})