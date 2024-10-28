/* Promise란 ?
비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
Promise는 then() 메서드를 사용하여 콜백 함수를 등록할 수 있고,
catch() 메서드를 사용하여 에러 핸들링을 할 수 있다.

Promise는 비동기 작업을 감싸는(?) 객체이다.
Promise 효능 : 비동기 작업 실행, 상태관리, 결과 저장, 병렬 실행, 다시 실행, 기타 등등
*/

// 이정환 강의에서는 비동기 작업 실행, 상태관리, 결과 저장를 다룬다고 함

// Promise의 3가지 상태
// 대기(Pending) : 아직 작업이 완료되지 않은 상태
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패(Rejected) : 비동기 작업이 실패한 상태

// 해결(resolve) : 비동기 작업이 대기 상태에서 작업이 성공되었다면 resolve
// 거부(reject) : 비동기 작업이 대기 상태에서 작업이 거부되었다면 reject

/* ex) 유튜브에서 사용자가 영상을 눌렀을때 
로딩작업이 성공적으로 완성되면 resolve, 
네트워크 오류 같은게 발생해 시청 불가능하면 Reject */

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 : executor
  setTimeout(() => {
    console.log("ddddd");
    resolve("PromiseResult를 완료 처리"); // resolve()함수가 호출되어야 웹브라우저의 Promise객체의 상태가 pending 에서 fulfillment로 변경됨
  }, 1000);
});

// console.log(promise); // Promise{<pending>}
// Promise객체를 담은 promise 변수를 출력해보면  <pending> , 즉 대기상태임을 나타냄

setTimeout(() => {
  console.log(promise);
}, 3000);

////// rejected promise

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("eeeee");
    reject("Promise 실패ㅠㅠ");
  }, 1000);
});

setTimeout(() => {
  console.log(promise2);
}, 3000);
