//배열자체에 이벤트 연결불가 콕 찝어서 해줘야함
//그래서 포문씀.
//에드이벤트 리스너는 모든 요소에게 쓸수있음. 인풋에 있는 벨류속성은 인풋에만 쓸수있다.
//프로퍼티 뭐라 에러뜨면 요소를 가져왔나 확인해야된다.
//그래서 이런에러뜨면 요소 잘 들고왔는지 찍어봐라. 99퍼 안찍힐거임.


let input = document.querySelector("input")
console.log(input.value)

let button = document.querySelector("button")

let ul = document.querySelector("ul")
ul.innerHTML = ""

// 
const todolist = ['생새우', '초밥', '술']

// 1. makeTodoList, clickDeleteButton
// 2. 방금처럼 동작하게 해봐



function makeTodoList () { // 리스트 만드는 함수
    ul.innerHTML = '' // 
    for (let i=0; i<todolist.length; i++) {
        ul.innerHTML = ul.innerHTML + `<li> ${todolist[i]} <button class = "deleteButtons" >x</button> </li>` 
    } //
}

function clickDeleteButton () {
    let deleteButtons = document.querySelectorAll(".deleteButtons")
    console.log(deleteButtons)
    for (let i=0; i<deleteButtons.length; i++) {

        deleteButtons[i].addEventListener('click',function(){
            alert("지울꼬야?")
            todolist.splice(i,1) // 1, 1
            console.log(todolist) // [새우, 술]

            // 3. 새로 리스트를 만들고 이벤트 연결
            // makeTodoList()
            makeTodoList()
            // 4. 삭제 버튼 다시 연결)
            clickDeleteButton()
        })    
    }
}
//

makeTodoList()
clickDeleteButton ()
// ul.innerHTML = '<li>zzz</li>' + ul.innerHTML // innerHTML 쓰는 순간 addEventListener 했던 게 날라감!!!
// clickDeleteButton ()
// 6개 x
// 3개 무!조!건!






let span = document.querySelector("span")
console.log(span)
function printTodoLength() {
    span.innerHTML = `you have ${todolist.length} pending tasks`
} 
printTodoLength()



function add () {}

button.addEventListener('click',function(){
    
    if(input.value=='') {
        alert ("할 일을 입력하세요")
        return
    }
    todolist.push(input.value)
    console.log(todolist)
    // span.innerHTML = `you have ${todolist.length} pending tasks`
    printTodoLength()
    makeTodoList ()
    clickDeleteButton ()
    // 1. 리스트를 다시 생성
    // 2. 이벤트 다시 연결
    // ul.innerHTML = `<li> ${input.value} <button class="deleteButton">x</button> </li>` + ul.innerHTML
    // innerHTML로 내용을  바꾸면 이전에 등록된 이벤트가 모두 사라짐!!!!
    input.value=''

    // plus 1 click -> 1
    // plus 2 click -> 2
    // let deleteBottons = document.querySelectorAll(".deleteButton") // 배열임! -> 랭스 영
    // console.log(deleteBottons)
    // for (let i=0; i<deleteBottons.length; i++ ) {

    //     deleteBottons[i].addEventListener('click',function(){
    //         alert("정말로 삭제하시겠습니까?")
    //         // 숙제! 클릭한 요소를 삭제
    //         // 요소를 삭제 -> 브라우저에서 실제로 삭제되고, 배열에서도 삭제되어야 함!
    //     })
    // }
})
// let deleteBottons = document.querySelectorAll(".deleteButton")

console.log('todolist', todolist)

let clear = document.querySelector("#Clear")
// console.log(Clear)


clear.addEventListener('click',function(){
    ul.innerHTML = ''
    input.value = ''
    todolist.splice(0,todolist.length)
    console.log(todolist) 
    printTodoLength()
})


// deleteBottons[0].addEventListener('click',function(){
//     alert("정말로 삭제하시겠습니까?")
// })
// deleteBottons[1].addEventListener('click',function(){
//     alert("정말로 삭제하시겠습니까?")
// })
// deleteBottons[2].addEventListener('click',function(){
//     alert("정말로 삭제하시겠습니까?")
// })}

