let box = document.querySelector('#num')

let btn1 = document.querySelector('.dec')

let btn2 = document.querySelector('.reset')

let btn3 = document.querySelector('.inc')

let btn4 = document.querySelector('.random')

let a = 0


btn1.addEventListener("click", () => {
    if (a > 0) {
        a--
        box.textContent = a
    }
})

btn2.addEventListener("click", () => {
    a = 0
    box.textContent = a
})

btn3.addEventListener("click", () => {
    a++
    box.textContent = a
})

btn4.addEventListener("click", () => {
    a = Math.floor(Math.random()*100) + 1
    box.textContent = a
})
