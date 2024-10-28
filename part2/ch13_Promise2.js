// Promise객체를 함수안에 심어 놓을 수 있습니다.
// 이렇게 되면 다양한 파라미터의 값을 받아서 동적으로 코드 작업을 진행할 수 있습니다.

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("Input should be a number");
      }
    }, 2000);
  });
  return promise;
}

// setTimeout(() => {
//   console.log(promise); // 1. console.log를 사용해도 출력되지는 않고 Promise의 프로퍼티들만 갱신되고 출력됨
// }, 2000);

// 2. setTimeout이 끝난 후, Promise 상태는 resolved 또는 rejected로 변하지만
//    console.log(promise)만으로는 상태 변화에 따라 결과 값이 출력되지 않습니다.
//    Promise의 성공/실패 결과에 따른 작업을 하려면 .then()이나 .catch()를 사용해야 합니다.

// // then() 메서드는 Promise의 resolve메서드의 인자를 받아서 실행하게 됩니다.
// promise.then((x) => {
//   console.log(
//     "Promise객체 내의 코드를 실행했고 성공적으로 완료하여\nresolve()함수 호출했음"
//   );
//   console.log(`결과는 ${x}`);
// });

// // catch() 메서드는 Promise의 reject메서드의 인자를 받아서 실행하게 됩니다.
// promise.catch((err) => {
//   console.log(err);
// });

/* 21,28번째 코드를 보면 promise.then(), promise.catch()각각 호출하고 있습니다. 
.then과, .catch는 자동으로 Promise를 호출하게 되는데
21,28번째 코드를 보면 Promise객체를 중복해서 호출하게 됩니다.
그럴 필요 없이 .then()메서드 뒤에 .catch()를 이어서 작성하면 효율적으로 처리 가능합니다.
.then().catch()
*/

// promise
//   .then((x) => {
//     console.log(
//       "Promise객체 내의 코드를 실행했고 성공적으로 완료하여\nresolve()함수 호출했음"
//     );
//     console.log(`결과는 ${x}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise객체를 add()함수에 감싼뒤의 실행 코드입니다.
// add10()의 함수는 인자(10)을 보내서 반환 값 중 reslove나 reject를 반환 받습니다.
const p = add10(10);
p.then((x) => {
  console.log(`성공 , 값은 ${x}`);

  const pp = add10(x);
  pp.then((y) => {
    console.log(`성공 , 값은 ${y}`);

    const ppp = add10(y);
    ppp.then((z) => {
      console.log(`성공 , 값은 ${z}`);
    });
  }).catch((err) => {
    console.log(`error : ${err}`);
  });
});
