// 구조 분해 할당은 자바스크립트에서 배열이나 객체의 값을 쉽게 추출하여 변수에 할당할 수 있는 문법

// 1. 배열의 구조 분해 할당
const arr = [1, 2, 3, undefined, 5];

// arr 배열의 인덱스 번호 순서대로 first, second에 순차적으로 값을 할당
let [first, second, three, four = 4, five] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(four); // undefined 자리에 '4를 할당하여 출력됨

five = 5; // let으로 선언한 변수에 값을 할당 할 수 있으나 , const는 불가능
console.log(five);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// 2. 객체의 구조 분해 할당
let sss = { name: "seugnsoo", age: 30, address: "Incheon" };

let { name, age, address } = sss;
console.log(name); // seugnsoo
console.log(age); // 30
console.log(address); // Incheon

// 2.1 만약 새로운 객체에 담아 생성하고 싶다면
// sss2 객체 생성
const sss2 = { name: "seugnsoo", age: 30, address: "Incheon" };
// 구조분해할당을 통해 sss2객체의 name,age,address 프로퍼티 값을 새로운 변수 myName, myAge, myAddress에 할당
let { name: myName, age: myAge, address: myAddress } = sss2;
// 테스트 실행
console.log(`myName : ${myName}`); // seugnsoo
console.log(`myAge : ${myAge}`); // 30
console.log(`myAddress : ${myAddress}`); // Incheon
// 새로운 객체 newSss2를 생성, 여기에 단숙 속성명을 사용함
let newSss2 = { myName, myAge, myAddress };
console.log(newSss2); // { myName: "seugnsoo", myAge: 30, myAddress: "Incheon" }

console.log(sss2 === newSss2); // false
console.log(sss2.name === newSss2.name); //false
// 구조분해할당은 객체의 값을 복사하여 새로운 변수에 할당하는 방식입니다.
// 이 과정에서 기존 객체와는 별도의 메모리 주소를 가지는 새로운 값이 생성됩니다.

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

// 설명 2. 파라미터(Parameters)에 각 객체의 프로퍼티 키값을 넣어줌 , 이때 '{}'중괄호 감싸줘야함
const func = ({ myAddress, myAge, myName }) => {
  console.log(myName, myAge, myAddress);
};

func(newSss2); // 설명 1. 함수호출시 인자(Arg)에 변수를 넣어줌
