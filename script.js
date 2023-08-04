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
button.addEventListener('click', function(){
    if (input.value == a) {
        alert("할 일을 입력하세요")
    }else {
        todolist.push(input.value) 
        console.log(todolist)
    }
})



// let a = ''//빈문자열 () // number, string(문자타입을) 

