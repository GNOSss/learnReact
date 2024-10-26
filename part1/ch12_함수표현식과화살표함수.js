// 1. funcA는 함수선언식을 통해서 만들어짐
function funcA() {
  console.log("funcA");
}

let varA = funcA; // varA변수에 함수를 참조한다. (호출하는거 아님X) (할당하는 개념아님 , 그저 Reference)
console.log(funcA); // [Function : funcA]
console.log(varA()); // 함수를 할당한 변수에 + ()를 붙히면 할당된 함수가 실행된다.
// varA()처럼 뒤에 () 괄호를 붙이면 JavaScript는 이 변수에 저장된 참조가 함수임을 인식하고 해당 함수를 실행

console.log("===========경계1==========");

// 2. funcB는 함수표현식을 통해서 만들어짐 , 표현식으로 만들어진 함수는 함수명으로 호출 불가능하다.
let varB = function funcB() {
  console.log("funcB");
};

// funcB(); // 함수표현식으로 통해 생성된 함수는 직접적으로 호출 불가 , 변수명으로 호출해야함
varB();

console.log("===========경계2==========");

// 2_1. 함수표현식을 통해서 생성되는 함수는 함수명도 필요하지 않음 , 단 파라미터의 '()'는 있어야지 ?
// (변수의) 값으로 써 생성된 함수는 호이스팅이 되지 않음
let varC = function () {
  console.log("funcC");
};

varC();

console.log("===========경계3==========");

/* 3. 화살표 함수 : 기존의 함수를 이전보다 더 빠르고 간결하게 생성해 줄 수 있도록 도와주는 문접
2_1. 함수 표현식과 비교하면 [function 테스트를 삭제 , 파라미터 괄호()와 코드 구문 괄호 {}사이에 '=>' 추가]
*/
let varD = () => {
  return 1;
};

console.log(varD()); // 1

console.log("===========경계4==========");

// 3_1. 더 간결한 화살표 함수 : [ 코드 구문 괄호 '{}'삭제, 'return'구문도 삭제]
let varE = (x, y) => x * y;
console.log(varE(2, 3)); // 6
