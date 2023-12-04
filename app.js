const cols = document.querySelectorAll('.col')

document.addEventListener('click' , (event) => {
    const type = event.target.dataset.type

    if(type === 'lock') {
        console.log(event.target);
    }
})

document.addEventListener ('keydown' , (event) => {
    if(event.code.toLowerCase() === 'space'){
        setRandomColor()
    }
} )

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
        const button = col.querySelector('button')
        const color = chroma.random()
        text.textContent = color
        col.style.background = color

        setTextColor(text,color)
        setTextColor(button,color)
    })
}

function setTextColor (text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()


