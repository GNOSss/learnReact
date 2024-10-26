// 1. 콜백함수 : 어떠한 함수를 다른 함수의 인수로 전달해서 그 다음 알아서 호출하도록 설정한 (sub함수)같은 함수
function main(x) {
  x(); // 2. Argument가 'x'라는 파라미터로 받게되고 '파라미터()'형태로 변환되어 함수 호출
}

function sub() {
  console.log("sub"); // 3. 'x()'구문 실행
}

main(sub); //1. 메인함수 호출 및 sub함수 Argument로 전달
/* 
아래 식처럼 Argument 자체를 함수로 던져도 가능
main(function sub() {
    console.log("sub"); 
})

또 아래 식처럼 Argument 자체를 화살표로도 가능
main(() => {
    console.log("sub");
});
*/

// 2. 콜백함수 활용

function test2(x, y) {
  for (let i = 1; i <= x; i++) {
    y(i); // 2.2) y의 함수를 i라는 인자를 담아 호출
  }
}

// 1.1) test2() 호출, Arg : 5와 익명함수
test2(5, function (i) {
  console.log(i); // 3.3 Arg의 두번째 인자 익명함수 실행
});

// 4.4 아래처럼 간결하게도 가능
test2(5, (i) => {
  console.log(i * 2);
});
