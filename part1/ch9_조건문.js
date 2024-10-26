// 조건문 : if,switch가 대표적으로 존재함

// 1. if문
let num = 2;

// if (조건식) {실행할 코드} else {조건식에 맞지 않을때 사용할 코드}
// if (조건식) {실행할 코드} else if (조건식2) {실행할 코드} else {두 조건식에 맞지 않을때 사용할 코드} 도 가능
if (num >= 11) {
  console.log("num is greater than 11");
} else if (num >= 10) {
  console.log("num is greater than 10");
} else if (num >= 3) {
  console.log("num is greater than 3");
} else {
  console.log("num is less than or equal to 10");
}

// 2. switch문
// -> if문과 기능 자체는 동일하다
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

/* switch(비교대상객체) {
  case "객체" : 
    조건에 맞으면 사용할 코드 
    break; <<반복 
  default :
    모든 조건이 맞지 않을때 사용할 코드
} */
switch (animal) {
  case "dog":
    console.log("I'm a dog!");
    break;
  case "cat":
    console.log("I'm a cat!");
    break;
  case "bird":
    console.log("I'm a bird!");
    break;
  default:
    console.log("I'm not a dog, cat, or bird.");
}
