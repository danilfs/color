const cols = document.querySelectorAll('.col')
const buttonU = document.querySelector('.col1')

function generateRandomColor () {
    const hexCode = '123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6 ; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

function setRandomColor () {
    cols.forEach ((col) => {
        const text = col.querySelector('h2')
        const color = chroma.random()
        text.textContent = color
        col.style.backgroundColor = color
        setTextColor(text,color)
    })
}

function setTextColor (text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()


