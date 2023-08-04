// 아무 값도 입력하지 않고 (빈문자열)버튼을 클릭하면 '할일을 입력하세요'라고 경고창 출력

let input = document.querySelector("input")
console.log(input.value)
// let value = input.value // 10 =>input.value의 데이터 타입은 무조건 문자
// 그래서 10을 입력해도 데이터 타입을 숫자가아닌 문자로 가지고 옴.
let button = document.querySelector("button")
// querySelector=>이거 쓰면 제일 처음꺼 가져옴
//그래서 css같이 id만들어서 그걸로 연결하면 됨
let a = ''
const todolist = []
function printTodoLength() {
    // span.innerHTML = 'you have ' + todolist.length + ' pending tasks'
    span.innerHTML = `you have ${todolist.length} pending tasks`
}
button.addEventListener('click', function(){
    if (input.value == a) {
        alert("할 일을 입력하세요")
    }else {
        todolist.push(input.value) 
        console.log(todolist)
        printTodoLength()

    }
})

//span.innerHTML => 이너는 html의 모든 태그에 숨어있는 속성
// 태그 사이에 글자를 넣어준다
//html에 적은거는 그냥 시안이라고 생각하고
//js에서 inner를 넣고 글자를 넣어주면 그걸 고대로 출력하는거임

let span = document.querySelector("span")
console.log(span)


printTodoLength() //파라미터없어도 함수 호출되고 / 초기화
//pending tasks


// let a = ''//빈문자열 () // number, string(문자타입을) 

