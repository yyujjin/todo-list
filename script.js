

let input = document.querySelector("input")
console.log(input.value)
let button = document.querySelector("button")
const todolist = []
button.addEventListener('click', function(){
    todolist.push(input.value)
    console.log(todolist)
})


