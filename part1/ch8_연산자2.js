// 1. NULL 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, Undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 두개의 변수 중 null, undefined가 아닌 변수를 할당
console.log(`var4 : ${var4}`); // var4 : 10

let var5 = var1 ?? var3; // var3 = 20
console.log(`var5 : ${var5}`); // var5 : 20

let var6 = var2 ?? var3; // 두개의 변수 모두 null, undefined가 아니라면 처음으로 들어온 변수를 할당
console.log(`var6 : ${var6}`); // var6 : 10

////////////////////////////

let userName = "송승수";
let userNickname = "Kordan belfort";

let displayName = userName ?? userNickname;
console.log(`displayName : ${displayName}`); // displayName : 송승수 , userName에 값이 있으므로...

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1; // const타입은 에러 발생함.
var7 = "hello";
console.log(`var7 : ${var7}`); // hello 출력됨

let t1 = typeof var7;
console.log(`t1 : ${t1}`); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// 위 예제들에는 2개의 항 연산을 많이 사용했음
//예를 들어 const test = 1 + 2; 이때 1과2는 항이라고 하고 2개가 있으니 이항 연산자
// -> 3항 연산자는 조건식을 이용해서 참, 거짓일때 의 값을 다르게 반환

// 조건식 : 변수 res에 var8의 값이 짝수라면 "짝"을, 홀수라면 "홀"이라고 출력해라
let var8 = 10;
/* 
var8을 2의 나눈 몫 === 0 이 같으면 true 아니면 false , '?'연산자 기준 뒤에는 return할 결과
':'연산자 기준으로 좌측은 true 반환식 , 우측은 false 반환식
*/
let res = var8 % 2 === 0 ? "짝" : "홀"; // 총 3개의 항 (var8, 2 , "짝":"홀")
console.log(`res : ${res}`); // res : 짝

// 삼항연산자를 사용해서 0부터 758까지의 숫자를 담고있는 변수를 4로 나누어본다
// 그렇게 몫이 나눈 나머지가 1인 값들만 갯수를 세고 출력한다.

const selftest = 758;
let count = [];
let noCount = [];

for (let i = 0; i < selftest; i++) {
  i % 4 === 1 ? count.push(i) : noCount.push(i);
}

console.log(`count: ${count.length}`);
console.log(`noCount: ${noCount.length}`);
