// 1. 대입 연산자
let var1 = 1; //변수에 값을 할당하는 (=) 연산자

// 2. 산술 연산자
let num1 = 3 + 2 - (((2 * 1) / 1) % 1);

let num6 = 1 + 2 * 10; // * > +

// 3. 복합 대입 연산자
let num7 = 10;
// num7 = num7 + 20;
// num7 += 20; // num7 = num7 + 20;와 같은 구문
// += , -= , *= , /= , %= 도 가능

// 4. 증감 연산자
let num8 = 10;
num8++; //후위 연산자 , num8 = num8 + 1;
++num8; //전위 연산자 , num8 = 1 + num8;
let num9 = 10;
num9--; // num9 = num9 - 1;
--num9; // num9 = 1 - num9;

// 5. 논리 연산자
let _or = true || false; // 둘 중 하나라도 true면 ture
let _and = true && false; // 모두가 true면 true
let _not = !true; // true면 false

// 6. 비교 연산자
let comp1 = 1 === 2; //
let comp2 = 1 !== 2; //
console.log(`comp1 = ${comp1}, comp2 = ${comp2}`);
// 연산자 === 3개는 type 또한 같은지
// 연사자 == 2개는 type 무시 , 값 자체만 비교

let comp3 = 2 > 1;
console.log(`comp3 = ${comp3}`);

// 7. typeof
