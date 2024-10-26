// 함수를(선언)
function test_sss() {
  console.log("Testing Function");
}

console.log("호출 전");
// 함수를(호출)
test_sss();
console.log("호출 후");

console.log("============경계1===============");

function getArea(width, height) {
  //매개변수(Parameter) width, height로 받음
  let area = width * height;

  return area;
}

const etet = getArea(3, 4); // 인수(Argument) 3,4를 던짐
console.log(`etet : ${etet}`);
console.log(getArea(3, 4)); // console.log()로 바로 출력 가능하지만 다른 코드와 개연성을 위해 새 변수에 할당하는게 좋을듯 ?

console.log("============경계2===============");

Outter(); // 호이스팅 기능으로 호출이 선언보다 위에 있어도 호출 가능
// 중첩함수
function Outter() {
  // Outter라는 함수 생성
  function Inner() {
    // Inner라는 함수도 생성
    console.log("Inner function");
  }
  Inner(); // Outer function코드 구문에 Inner function 호출
  console.log("Outter function");
}
