/*
단락 평가의 정의 
AND(&&) , OR(||) 같은 논리 연산식에서
첫 번째 피연산자의 값만으로도 해당 연산의 결과를 확정 할 수 있다면
그때는 두번째 피연산자의 값에는 접근하지 않는 자바스크립트의 특징

즉,
AND는 모두가 True여야 True를 반환하기에
첫번째 연산이 Flase면 결국 결과는 False, 굳이 두번째 연산자를 연산할 필요가 없고

OR는 한개라도 True면 True를 반환하기에
첫번재 연산이 True면 결국 결과는 True, 굳이 두번째 연산자를 연산할 필요가 없음

내 추측으로는 &&,||은 가급적 두번째 연산자는 추측가능한 연산을 두고
첫번째 연산자는 개발자의 의도가 확정적이지 않을때 사용하는게 어떨지 ?
*/

function returnFalse() {
  console.log("False함수");
  return false;
}

function returnTrue() {
  console.log("True함수");
  return true;
}

console.log(returnFalse() && returnTrue()); //false
/*
다르게 생각하면 returnFalse()와 returnTrue()가 실행되야 하는데
&& 연산자가 있으므로써 단락평가가 실행된 걸 볼수 있다.
첫 번째 피연산자의 결과 값으로 두 번째 피연산자는 접근 하지 않는다.
*/

console.log("================================");

console.log(returnTrue() && returnFalse()); // True함수 False함수 false
// 첫 번째 함수가 True를 반환하였기에 두번째 함수도 실행되기는 한다.
// 그러나 && 연산은 false를 반환

console.log("================================");

console.log(returnTrue() && returnTrue()); // True함수 True함수 true

console.log("================================");

function ttrue() {
  return 10;
}

function ffalse() {
  return null;
}

console.log(ttrue() && ffalse()); // null을 반환
console.log(ttrue() || ffalse()); // 10을 반환
// 이로써 꼭 && , || 사용하면 꼭 true,false를 반환하는게 아니라
// truthy하거나 falsy한 값을 반환한다고 생각을 하면 좋을 듯 ?

/**
 * 단락 평가 활용 사례
 */

// function printName(person) {
//   if (!person) {
//     console.log("Person is undefined");
//     return;
//   }
//   console.log(person.name);
// }

// 위 주석처리된 코드와 동일한 결과 효과를 얻을 수 있다 ?
function printName(person) {
  console.log(person && person.name);
  /*
   && 논리 연산자는 왼쪽에서 오른쪽으로 평가한다. 왼쪽 값이 Truthy라면 오른쪽 값을 반환
   만약 왼쪽 값이 Falsy라면 왼쪽 값을 반환하게 된다.
   반대로
    || 연산자는 왼쪽 같이 Truthy라면 왼쪽 값을 반환하고 Falsy라면 오른쪽 값을 반환한다.
   */
}

let person = { name: "John", age: 32 };
printName(person); // John
let person2 = { name: "", age: 32 };
printName(person2); // undefined

// 위 코드를 업그레이드.

function printName2(person) {
  const x = person && person.name; // person은 Truthly하면 person.name을 반환 (&&연산자 true면 오른쪽 반환)
  console.log(x || "person의 값이 없음"); // x의 값이 Truthly하면 x를 반환 (|| 연산자 true면 왼쪽반환)
}

printName2(); // person의 값이 없음
printName2({ name: "승수" }); // 승수

/* 
OR(||)연산자가 
모두 True일 경우에는 첫 번째 피연산자를 반환
모두 False일 경우에는 두 번째 피연산자를 반환
*/
