// function test(a, b, cb) {
//   setTimeout(() => {
//     const sum = a + b;
//     cb(sum); // 1. test()함수의 3번째로 받은 파라미터를 호출하게 됨 setTimeout()함수가 끝나고 났을 때
//   }, 1000);
// }

// test(1, 2, (val) => {
//   // 2. 3번째 인자가 1번 더 실행이 된다고 함
//   console.log(val);
// });

// 2.orderFood 함수 내부에서 setTimeout이 호출되어 1초 후에 콜백 함수가 실행되도록 예약
// 2. 이때 콜백함수는 화살표 함수입니다.
function orderFood(cb) {
  setTimeout(() => {
    const food = "치킨"; // 4. cb2함수 파라미터를 food 변수가 들어가게 됩니다.
    cb(food); // 3. orderFood() 호출시 1번째 인자는 콜백함수입니다.
  }, 1000);
}

function cooldownFood(food, cb2) {
  setTimeout(() => {
    const cooledFood = `식은 ${food}`; // 6. 5번에 사용하던 food = "치킨"이 변수에 할당됩니다.
    cb2(cooledFood); // 7. cooldownFood에 두번째 파라미터가 함수가 호출되면서 cooledFood 인자로 넘어갑니다.
  }, 2000);
}

function fFood(food, cb3) {
  setTimeout(() => {
    const frFood = `냉동된 ${food}`;
    cb3(frFood);
  }, 1500);
}

// 1 함수의 인자에 콜백함수를 넣어서 실행
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooledFood) => {
    // 5. cooldownFood함수가 호출되고 사용했던 food가 인자로 넘어갑니다.
    console.log(cooledFood);

    fFood(cooledFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
