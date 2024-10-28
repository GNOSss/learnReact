// 6가지 요소 조작하기

// 1. push (배열의 뒤에 새로운 요소 추가)
let push1 = [1, 2, 3];
const push11 = push1.push(4, 5, 6);
console.log(`push method , push1 : ${push1}`); // 1,2,3,4,5,6
console.log(`push11은 길이만 반환함 : ${push11}`); // 6
// Note: 만약 추가된 배열의 내용 자체를 출력하고 싶다면 arr1을 출력하면 됩니다:

// 2. pop (배열 맨 뒤에 있는 요소를 제거하고 반환)
let pop1 = [1, 2, 3, 4];
const pop11 = pop1.pop();
console.log(`pop method , pop1 : ${pop1}`); // 1,2,3
console.log(`pop11은 제거된 값 반환함 : ${pop11}`); // 4
// pop1변수에 pop() 실행하고 pop11에는 제거된 값만 할당됨

// 3. shitf
// 배열의 맨 앞에 있는 요소를 제거, 반환
let shift1 = [1, 2, 3];
let shift11 = shift1.shift();
console.log(`shift method , shitf1 : ${shift1}`); // 2,3
console.log(`shift11은 제거된 값 반환함 : ${shift11}`); // 1

// 4. unshift
// 배열 맨 앞에 요소를 추가
let unshift1 = [1, 2, 3];
let unshift11 = unshift1.unshift(0); // unshift1변수에 0을 추가
console.log(`unshift method , unshift1 : ${unshift1}`); // 0,1,2,3
console.log(`unshift11은 unshift() 실행한 후의 length 반환함 : ${unshift11}`); // 4

// % 속도: push, pop >> shift, unshift : 배열 앞에 요소를 추가할 경우 나머지 값들의 인덱스 번호가 다 밀림

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let slice1 = [1, 2, 3, 4, 5];
let slice11 = slice1.slice(0, 3); // 1,2,3 / slice()범위는 0 부터 ~ length - 1 해줘야함
console.log(`slice method , slice1 : ${slice1}`); // 1,2,3,4,5 , 기존 값 유지
console.log(`slice11 : ${slice11}`); // 1,2,3 , slice범위만 할당됨

let slice111 = slice1.slice(-2);
console.log(`slice111 : ${slice111}`); // 4,5 (-)기호는 역순으로 카운트 하게 된다

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // 기준변수.concat(붙힐 변수);
console.log(`concat method , concatedArr : ${concatedArr}`); // 1,2,3,4

let concatedArr1 = arr7.concat(arr6);
console.log(`concat method , concatedArr1 : ${concatedArr1}`); // 3,4,1,2
