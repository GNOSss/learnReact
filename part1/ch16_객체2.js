// 1. 상수(const) 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.type = "강아지"; // 수정
delete animal.color; // 삭제

// 자바스크릅트에서 const로 선언된 객체는 참조값을 고정하는 역할을 할 뿐,
// 객체 내부의 프로퍼티는 여전히 수정할 수 있기 때문입니다.
// const 키워드는 변수의 재할당을 방지하지만, 객체의 속성 자체가 아닌 **객체가 저장된
// 메모리 주소(참조)를 고정합니다.

// 2. 메서드
// -> 객체 프로퍼티 중에 값이 함수인 프로퍼티를 말함

const sss = {
  name: "ss",
  sayHi: () => console.log("즐"),
  sayHello() {
    console.log("이것도 됨");
  },
};

sss["sayHi"]();
sss.sayHi(); // 객체(sss)의 프로퍼티 키 sayHi를 호출하여 함수 호출
sss.sayHello(); // sayHello()는 sss.sayHello()와 동일 , (:)가 빠진 선언문
