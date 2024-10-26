/* 
자바스크립트에서 Truthy와 Falsy는 조건문에서 true나 false로 평가될 수 있는 값들을 의미합니다. 
자바스크립트는 조건문에서 표현식을 평가할 때, 
해당 값이 참(true)으로 간주될 수 있는지(Truthy) 아니면 거짓(false)으로 간주될 수 있는지(Falsy)로 판별합니다.
*/

/* Truthy : 
- 빈 배열 [] 
- 빈 객체 {}
- 공백을 포함한 문자열  " "
- 0을 제외한 숫자
- true
*/

let t1 = [];
let t2 = {};
let t3 = " ";
let t4 = 1;
let t5 = true;

if (t1 && t2 && t3 && t4 && t5) {
  console.log("모두 Truthy");
}

/* Falsy : 
- NaN
- undefined
- null
- "" 빈문자열
- 0
- -0
- false
*/

let f1 = NaN;
let f2 = undefined;
let f3 = null;
let f4 = "";
let f5 = 0;
let f6 = -0;
let f7 = false;

if (!f1 && !f2 && !f3 && !f4 && !f5 && !f6 && !f7) {
  console.log("모두 Falsy");
}

// 활용 사례
function printName(person) {
  if (!person) {
    // 6. 최종 수정
    //   if (person === null || person === undefined) {    // 5.코드가 너무 지저분함
    //   ^^^ 4. ||연산자로 null, undefined 모두 에러 예방
    //   if (person === undefined) {
    //   ^^^ 2. person객체 프로퍼티 삭제해도 오류 방지 구문으로 Error 예방
    // 오류 방지하기 위한 if문 설정
    console.log("Person is undefined");
    return; // return으로 함수 종료
  }
  console.log(person.name);
}

// let person; //= { name: "Song Seungsoo" };   // 1. person객체의 프로퍼티 삭제 해봄,
let person = null; // 3. person객체를 Undefined가 아닌 null로 전환했다면 if 수정 필요
printName(person);
