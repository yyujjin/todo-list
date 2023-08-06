
let input = document.querySelector("input")
console.log(input.value)

let button = document.querySelector("button")

let a = ''
const todolist = []
let span = document.querySelector("span")
console.log(span)
function printTodoLength() {
    span.innerHTML = `you have ${todolist.length} pending tasks`
} 
printTodoLength()

let ul = document.querySelector("ul")
ul.innerHTML = ""

button.addEventListener('click',function(){
    
    if(input.value==a) {
        alert ("할 일을 입력하세요")
        return
    }
    todolist.push(input.value)
    console.log(todolist)
    // span.innerHTML = `you have ${todolist.length} pending tasks`
    printTodoLength()
    ul.innerHTML = `<li> ${input.value} </li>` + ul.innerHTML
    
})

let Clear = document.querySelector("#Clear")
// console.log(Clear)


Clear.addEventListener('click',function(){
    ul.innerHTML = a
    input.value = a
    todolist.splice(0,todolist.length)
    console.log(todolist) 
    printTodoLength()
})







