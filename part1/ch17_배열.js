// 배열(Array)이란?
// 여러개의 값을 순차적으로 담을 수 있는 자료 형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 방식

// 배열 갯수는 제한 없음 , 배열은 무엇이든 들어 올 수 있다(함수,배열,JSON,불리언,객체...)
let arrc = [1, 2, 3, true, "hello", null, undefined, undefined];
console.log(arrc);

// 2. 배열의 요소 접근
// 아래 두개의 코드는 arrc의 [인덱스 번호]로 접근하였음
let item1 = arrc[0];
let item2 = arrc[1];

console.log(item1, item2); // 1 2

arrc[0] = "hello";
console.log(arrc); // arrc[0]이 1 에서 "hello"로 변경되었음
