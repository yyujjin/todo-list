// 1. input 변수에 담기
// 2. button을 변수에 담기
// 3. input의 value를 콘솔로 출력

let input = document.querySelector("input")
let button = document.querySelector("button")
console.log(input.value)

// 어떤 이벤트인지?, 익명함수 / 실행할 코드 (함수처럼)
// 밑에 있는 파라미터의 함수는 () 안에서 만들어진것이기 때문에
// 안에서만 작동함. 
// 그래서 밖에서 호출불가능 , 그래서 그냥 이름 삭제해도 됨 => 익명함수
// 버튼에 그냥 이벤트(함수)를 적용했다. 
button.addEventListener('click', function () {
    // 경고창 내용으로 인풋의 벨류를 출력
    alert(input.value)
    
})

// function name() {
//     console.log('dd')
// }

// name()

// 문제 ['abc', 'hi']
// todoList라는 배열을 만들고, 버튼을 클릭하면 배열에 값을 추가.
// 어떤 값이냐면 input에 입력된 값을 추가
// 배열에 추가 후 콘솔로 배열을 출력했을 때 값이 잘 들어가 있으면 성공! 
