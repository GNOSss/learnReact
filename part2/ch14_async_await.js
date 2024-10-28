// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

// async 키워드로 통해서 getData함수는 비동기 함수로 바뀐다 ?
async function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ name: "Song", age: 32 });
    }, 2000);
  });
}
/* ^^^^^^^^^^^^^^^^^^^^ 이정환이 설명하는 내용
그러니까 이 객체(return의 객체{})를 그대로 반환하는 함수가 아니라
이 객체(return의 객체{})를 결과 값으로 갖는 
새로운 프라미스를 반환하는 함수로 변환하는거죠
*/

console.log(getData()); // Promise {PromiseState <fulfilled>, PromiseResult<Object>}

// 과연 이런 async를 우리가 어디에다가 써먹을 수 있을까요 ??

// 그래서 async는 await이라는 키워드랑 사용하면 효과를 볼 수 있다고 합니다.

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printDate() {
  // await구문이 들어가면 Promise 작업이 끝나기를 기다린다. 그리고 결과를 받는다.
  const data = await getData();
  console.log(data);
}
printDate();
