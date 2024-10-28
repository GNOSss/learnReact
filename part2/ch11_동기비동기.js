// 1. setTimeout()
// 비동기를 위한 메서드
// setTimeout()에는 2개의 파라미터를 받을 수 있습니다.
// 1번째 파라미터에는 콜백함수를 넣어 줍니다.
// 2번째 파라미터에는 대기 시간을 Miliseconds로 입력해줍니다.

console.log(1);
setTimeout(() => {
  console.log("Hello, setTimeout");
}, 2000); // 2000ms(2 seconds)
console.log(3);

// setTimeout(() => {
//   console.log("1초 후 실행");
//   setTimeout(() => {
//     console.log("2초후 실행");
//     setTimeout(() => {
//       console.log("3초 실행");
//     }, 1000);
//   }, 1000);
// }, 1000);


