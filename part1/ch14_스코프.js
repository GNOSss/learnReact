// 우리말로 "범위"를 뜻함
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함

// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 지역) 스코프
// -> 전역(전체 영역) 스코프 : 전체 영역에서 접근이 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

// 단, 함수선언식은 , 호출된 기준에서 스코프가 정의되는게아니라
// 선언(정의)된 곳에서 스코프가 성립된다. (전역에서 정의된 함수가 중첩함수에서 호출되어도 전역스코프를 가질 수 있음)

function funcA() {
  let a = 1; // 지역 스코프
}

// console.log(a);
// ReferenceError: a is not defined , 전역범위에 있는 console.log()는 let a변수를 찾을 수 없음
// let a = 1;는 funcA() 함수 스코프 내부에 한정되어 있다.

console.log("--------경계1---------");

let b = 1; // 전역 스코프

function funcB() {
  console.log(b);
}

funcB(); // 위 funcA와 달리 출력됨. let b는 전역스코프를 갖게 되고 이를 funcB()함수가 참조 가능할 수 있다.

console.log("--------경계2---------");

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(d);
// ReferenceError: a is not a defined , 마찬가지로 let d는 for문안에서 블록을 갖고 있어 외부에서 참조 불가
