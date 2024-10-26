// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 리터럴 방식
// name, age, hobby, sayHello = 객체의 프로퍼티(속성) / 좌측은 키 , 우측은 벨류(값)
// 프로퍼티의 갯수는 제한 없음 , 프로퍼티의 벨류는 무엇이든 들어 올 수 있다(함수,배열,JSON,불리언,객체...)
// 프로퍼티 키값은 : 숫자,문자값이 들어와야함 , 만약 K mart 처럼 띄어쓰기가 필요할 땐 "K mart" << (" ")쌍 따움표 필요함
let person = {
  name: "Seugnsoo",
  age: 31,
  hobby: "웨이트",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 방법 : (점(.) 표기법, 괄호[" "] 표기법 괄호법은 []와 ""가 필요하다.
let name = person.name;
console.log(name); // Seungsoo

let age = person["age"];
console.log(age); // 31

let property = "hobby";
let hobby = person[property]; // person객체의 괄호 표기법을 사용하지만 괄호 안에 다른 변수를 참조하여 실행
console.log(hobby); // 웨이트

// 3.2 새로운 프로퍼티를 추가하는 방법
// 3.2.1 점 표기법
let sss = { name: "Seungsoo", address: "Incheon" };
sss.married = true; // 객체명.새로 추가할 프로퍼티 키 = 프로퍼티 값;
console.log(sss); // { name: 'Seungsoo', address: 'Incheon', married: true }

// 3.2.2 괄호 방식 [" "]
sss["job"] = "false";
console.log(sss); // { name: 'Seungsoo', address: 'Incheon', married: true, job: 'false' }

// 3.3 프로퍼티 수정하는 방법
let kbr = { name: "Bora", address: "Incheon" };
// 3.3.1 점 표기법
kbr.name = "Kimberly";
console.log(kbr); // { name: 'Kimberly', address: 'Incheon' }
// 3.3.2 괄호 방식
kbr["address"] = "Incheon seo-gu";
console.log(kbr); // { name: 'Kimberly', address: 'Incheon seo-gu' }

//3.4 프로퍼티 삭제하는 방법
let test = { A: "1", 2: "2", 3: "3", D: "4" };
delete test.D;
delete test[3];
// delete test.2; // 객체의 키값이 숫자일 경우 점(.)표기법으로 삭제가 불가 , 반드시 괄호표기법으로 진행
console.log(test); // { A: '1' }

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let test1 = { A: "1", B: "2", C: "3", D: "4" };
// 객체의 프로퍼티를 ("")따움표로 감싸주고 in 객체명
let find = "A" in test1;
console.log(find); // true
