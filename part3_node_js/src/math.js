// 간단한 연산이 되니깐 , Math모듈 ??
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// //Common JS 모듈 시스템 문법
// module.exports = {
//   // value값으로 사용되는 변수의 이름과 키 값이 똑같은 경우
//   // add , sub 처럼 함수의 이름만 적어도 됨
//   // 원래는 abb : abb , sub : sub
//   add,
//   sub,
// };

// Es모듈 시스템
// 1. add, sub 키워드로 내보내는 기능
// export { add, sub };

// 2. 함수 구문 앞에 export 키워드를 적어줄 수 있다.

// 3. export default 키워드 , import하는 파일에서는 '{}'기호를 제외하여 사용
export default function multiply(a, b) {
  return a * b;
}
