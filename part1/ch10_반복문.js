// 반복문 (Loop, Iteration)

/*
초기식은 대부분 let i = 0 
조건식은 i가 n번만큼 True를 반환하게끔 잡아주는 구문
증감식은 i++ , i-- 로 증가/감소 시킴, 물론 다르게도 활용 가능
for (초기식 ; 조건식 ; 증감식){
    실행할 코드
}
*/
const 기준 = 10;
for (var i = 0; i < 기준; i++) {
  if (i % 2 === 0) {
    continue; // i의 값이 짝수이면 아래 코드 skip후 증감하고 계속 실행
  }

  const haveNum = 기준 - i;
  console.log(`${haveNum}번 남았습니다`);

  if (i >= 5) {
    break;
  }
}
