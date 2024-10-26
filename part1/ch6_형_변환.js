// 형 변환 (Type Casting)
/*
어떤 값의 타입을 다른 타입으로 변경하는 것을 말함

형 변환에는 [묵시적 형 변환 , 명시적 형 변환]

[묵시적 형 변환]은 암묵적 형 변환이고
개발자가 직접 설정하지 않아도 알아서 
자바스크립트 엔진이 형 변환하는 것을 말함

[명시적 형 변환]은
개발자가 직접 함수 등을 이용해
형 변환을 일으킴

*/

// 1.묵시적 형 변환 > 자바스크립트 엔진 마음대로 변환
let num = 10;
let str = "20";

const result = num + str; // 1020 , '+'연산하는 과정에서 num의 타입이 number -> string으로 변환되어 연산
console.log(`result : ${result}`);

let num1 = "10";
let str1 = 20;
const result2 = num1 + str1; // 1020, 위와 동일하게 계산됨 그렇다면 Number와 String을 계산할때는 String으로 변환해서 연산 ??
console.log(`result2 : ${result2}`);

// 2. 명시적 형 변환 > 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자
let str2 = "10";
let str3 = Number(str2);
console.log(`str3 : ${str3}`);

let str4 = "100000원";
let str5 = parseInt(str4); // str4에서 숫자형태만 빼와서 Number타입으로 변환 , 단 앞쪽에 숫자가 아니면 파싱안됨
console.log(`str5 : ${str5}`); // 10, parseInt() : 10개 -> 10

// 숫자열 > 문자열
let num3 = 20;
let numToStr3 = String(num3);
console.log(`numToStr3 : ${numToStr3}`);
