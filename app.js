const cols = document.querySelectorAll('.col')

function generateRandomColor () {
    hexCode = '123456789ABCDEF'
    color = ''
    for(let i = 0; i < 6 ; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

function setRandomColor () {
    cols.forEach((col) => {

        const text = col.querySelector('h2')
        const color = generateRandomColor()

        text.textContent = color
        col.style.backgroundColor = generateRandomColor()
    })
}

setRandomColor() 
