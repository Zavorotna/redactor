// редактор

// const color = document.querySelector("#color"),
//     text = document.querySelector("#text"),
//     italic = document.querySelector("#italic"),
//     normal = document.querySelector("#normal"),
//     fontSize = document.querySelector("#fontSize")

// color.addEventListener('input', () => {
//     text.style.color = color.value
// })

// italic.addEventListener('click', () => {
//     text.style.fontStyle = "italic"
// }) 

// normal.addEventListener('click', () => {
//     text.style.fontStyle = "normal"
// })

// fontSize.addEventListener('change', () => {
//     text.style.fontSize = fontSize.value + 'px'
// })
// // не друкувати фігурні і трикутні скоби, функціонал блокуванн сайту, якщо на сайті ввести комбінацію close появляється синій укран який повністю закриває сайт на комбінацію open відкриватися

// const blockSymbol = ['<', '>', '{', '}'],
//     textElement = document.getElementById('text')

// textElement.addEventListener('keydown', (event) => {
//     const pressedKey = event.key

//     if (blockSymbol.includes(pressedKey)) {
//         event.preventDefault() // dont get block symbol
//     }
// })

// const block = document.getElementById('block'),
//     lockKey = ['c', 'l', 'o', 's', 'e'],
//     unlockKey = ['o', 'p', 'e', 'n'],
//     pressedKeys = []
// let isBlocked = false,
//     isLocked = true

// document.addEventListener('keydown', (event) => {
//     const key = event.key.toLowerCase()

//     if (key === lockKey[pressedKeys.length]) { //code for change window with comand "close" to blue death screen
//         pressedKeys.push(key)
//         if (pressedKeys.length === lockKey.length) {
//             isBlocked = true
//             block.style.display = 'flex'
//             pressedKeys.splice(0,lockKey.length)
//         }
//     } 

//     if (key === unlockKey[pressedKeys.length]) { //code for change window with comand "open" to normal
//         pressedKeys.push(key)
//         if (pressedKeys.length === unlockKey.length) {
//             isBlocked = false
//             block.style.display = 'none'
//             pressedKeys.splice(0, unlockKey.length)
//         }
//     }
// })

 //- редактор коду емет

// let html = document.querySelector("#html"),
//     css  = document.querySelector("#css"),
//     js = document.querySelector("#js"),
//     viewBlock = document.querySelector("#viewBlock")

// html.onchange = redactor
// css.onchange = redactor
// js.onchange = redactor

// function redactor () {
//     viewBlock.innerHTML = 
//         `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <style> 
//                 ${css.value}
//             </style>
//             ${html.value}
//         </body>
//         </html>
//     `
//     eval(js.value)
// }

// emmet.require('textarea').setup({
//     pretty_break: true,
//     use_tab: true
// })


// circle.addEventListener ('mousedown', function(event) {

    //     function moveAt(pageX, pageY) {
        //         circle.style.left = pageX - circle.offsetWidth / 2 + 'px'
        //         circle.style.top = pageY - circle.offsetHeight / 2 + 'px'
        //     }
        
        //       // переносимо наш абсолютно позиціюнованний м’яч під курсор
        //     moveAt(event.pageX, event.pageY)
        
        //     function onMouseMove(event) {
            //         moveAt(event.pageX, event.pageY)
//     }

//     document.addEventListener('mousemove', onMouseMove)

//     circle.addEventListener("mouseup", function() {
    //         document.removeEventListener('mousemove', onMouseMove)
//     })

// })
const circle = [...document.querySelectorAll(".circle")]

let activeCircle = null,
    corX, 
    corY

circle.forEach(item => {
    console.log(item)
    item.addEventListener('mousedown', function(e){
        activeCircle = e.target
        corX = e.pageX - item.getBoundingClientRect().x
        corY = e.pageY - item.getBoundingClientRect().y
        item.addEventListener('mousemove', move)

    })

    function move(e) {
        if(activeCircle) {
            activeCircle.style.left = e.pageX - corX + 'px' //визначенняя нової позиції по Х та У
            activeCircle.style.top = e.pageY - corY + 'px'
        }
    }
    
    document.addEventListener('mouseup', function(){
        console.log(activeCircle)
        activeCircle.removeEventListener('mousemove', move)
        activeCircle = null
    })
})

// перевірити ontouchstart ontouchmove!!!!

// const circles = document.querySelectorAll(".circle")

// let corX, corY

// circles.onmousedown = function(e) {
//     corX = e.pageX - circle.getBoundingClientRect().x
//     corY = e.pageY - circle.getBoundingClientRect().y
//     document.addEventListener('mousedown', move)
// }

// function move(e) {
//     circles.style.left = pageX - corX + 'px' //визначенняя нової позиції по Х та У
//     circles.style.top = pageY - corY + 'px'
// }

// circles.onmouseup = function (){
//     circles.removeEventListener('mousemove', move)
// }


// let activeCircle = null,
//     offsetX, 
//     offsetY

// document.addEventListener('mousedown', (event) => {
//     if (event.target.classList.contains('circle')) {
//         activeCircle = event.target 
//         offsetX = event.clientX - activeCircle.getBoundingClientRect().left  //різниця між позицією миші та лівим краєм об'єкта в момент початку перетягування
//         offsetY = event.clientY - activeCircle.getBoundingClientRect().top //різниця між позицією миші та верхнім краєм об'єкта в момент початку перетягування
//     }
// })

// document.addEventListener('mousemove', (event) => {
//     if (activeCircle) {
//         const pageX = event.pageX, //горизонтальна координата миші на стор в момент події
//             pageY = event.pageY //вертикальна координата миші на стор в момент події
//         activeCircle.style.left = pageX - offsetX + 'px' //визначенняя нової позиції по Х та У
//         activeCircle.style.top = pageY - offsetY + 'px'
//     }
// })

// document.addEventListener('mouseup', () => {
//     activeCircle = null
// })


