// 자료형

/*
자료형은 [원시 타입, 객체 타입]으로 나뉨

    원시 타입은 [Number, String, Boolean, Null, Undefined]
    원시 타입은 기본형 타입이라고 불리고 , 프로그래밍에서 가장 기본적인 값들의 타입을 의미

    객체타입은 [Object]

        Object는 [Array, Function, RegExp]
*/

// 1. Number타입 , 존재할 수 있는 모든 숫자 값을 포함
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2 - num3);
// console.log((num1 * num2) / num3);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //Not a Number

// console.log(1 * "hello"); // NaN

// 2. String타입
let myName = "송";
let myName1 = "승수";
let fullname = myName + " " + myName1;
// console.log(fullname);

// !!!!!!템플릿 리터럴 문법 : 앞으로도 자주 , 실무에서도 자주 사용한다고 합니다.
let intorduceText = `저의 이름은 ${myName} ${myName1} 입니다.`;
// console.log(intorduceText);

// 3. Boolean타입 : 현재의 상태를 나타내는 타입 [true , false]
let isSwitchOn = true;
let isEmpty = false;

// 4. Null : 아무것도 없다
let empty = null; // empty변수에 아무 값도 없다.

// 5. Undefined : 변수를 선언하고 그 변수에 어떠한 값도 넣지 않았을 때 자동으로 할당되는 값
let none;
// console.log(none); //Undefined
