const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")
const span = document.querySelector("span")
const clearAll = document.querySelector("#Clear")

let todolist = [] // {name: ''}

function printTodoLength() {
    span.innerHTML = `you have ${todolist.length} pending tasks`
}

ul.innerHTML = ''


button.addEventListener('click',function() {
    if (input.value == '') {
        alert("할 일을 추가하세용")
        return
    }
    // []
    todolist.push( {title:input.value}) // ['할일']
    console.log(todolist)
    relist ()
    input.value = ''
})

function xxxxxx () {
    let deleteBottons = document.querySelectorAll(".deleteButton")
    for (let i=0; i<todolist.length; i++) {
        deleteBottons[i].addEventListener ('click',function(){
            alert("삭제 할꼬에염?")
            console.log(todolist)
            todolist.splice(i,1)
            console.log(todolist)
            relist ()
        })
    }
}

function relist () {
    ul.innerHTML = ''
    for (let i =0; i<todolist.length; i++) {
        ul.innerHTML = ul.innerHTML + `<li> ${todolist[i].title} <button class = "deleteButton">x</button></li>`            
    } 
    xxxxxx ()
    printTodoLength ()
}

clearAll.addEventListener('click',function(){
    ul.innerHTML = ''
    todolist.splice(0,todolist.length)
    console.log(todolist)
    printTodoLength ()
})


async function getTodoList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json()
    todolist = data
    console.log(todolist)
    relist ()
}

getTodoList()





