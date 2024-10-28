/*
자바스크립트의 자료형에는 크게 [원시타입] [객체타입]으로 나뉘어 있다.

왜 [원시타입] [객체타입]으로 나누었을까 ?

원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문이다 ?

원시타입 = 불변값(실제 메모리의 값은 수정되지 않음) : copy by value (값 복사)

객체타입 : copy by reference (참조 복사)

*/

console.log("---------내가 기존에 알고 있던 개념-----------");

let p1 = 1;
let p2 = p1;
let p3 = p1;

console.log(p2 === p3); // p1의 값의 복사를 통해서 생성된 p2, p3는 같다.

function test(name, age) {
  this.name = name;
  this.age = age;
}

let t1 = new test("seung", 30);
let t2 = new test("seung", 30);

console.log(t1 === t2); // 객체를 통해서 생성된 인스턴스는 참조 복사가 되었으나 t1, t2는 서로 다르다.

console.log("---------새롭게 배우는 개념-----------");
// 객체 타입은 참조에 의한 복사를 하게 된다.
// 객체의 저장 방식은 변수들이 메모리 주소에 참조값을 바라 볼 뿐
// 실제 메모리 저장 공간을 따로 존재한다.
// 왜냐 ?  원시타입에 비해 얼마나 많은 양들이 적재될지 모르기때문에
// 저장 공간을 따로 둔다. 그래서 객체는 참조(메모리 주소)에 의한 복사를 한다.

let o1 = { name: "승수" };
let o2 = o1; // o2 = o1; 으로 인해서 o2, o1 둘 다 같은 객체를 참조. 즉 동일한 메모리 주소를 가리킴
console.log(`o2 : ${o2.name}`);
o2.name = "coco"; // o2.name의 값을 "coco"로 변경했으므로 o1, o2가 참조하는 실제 메모리 공간에 수정이 일어남
console.log(`o2의 name값을 변경한뒤 o2의 name : ${o2.name}`);
console.log(`o1의 name값을 변경한뒤 o1의 name : ${o1.name}`);
// o2를 o1과 같은 객체에 reference로 참조하므로 o1의 name도 "coco"로 바뀌게 된다.

console.log(o1 === o2); //true

function test1(name, age) {
  this.name = name;
  this.age = age;
}

let t11 = new test1("seung", 30); //객체 생성
let t22 = t11; // 객체 참조 복사 (메모리 주소)
t22.name = "coco"; // 해당 메모리 주소를 참조하여 name프로퍼티 수정
console.log(`t22의 name : ${t22.name}`); // coco
console.log(`t11의 name : ${t11.name}`); // coco

console.log(t11 === t22); // t11, t22 둘다 동일한 객체를 참조하여 가리킴

console.log("---------새롭게 배우는 개념1-----------");
// 1.의도치 않게 값이 수정될 수 있다.
/* 
위 예제를 보면 알겠지만
생성자 함수를 통해서 만들어진 인스턴스 객체 또한
참조에 의한 복사가 이뤄지고 그 복사된 변수를 통해서
메모리 공간의 데이터들 수정할 수 있기때문에
의도치 않은 값이 수정된다는 점 유의 해야함
개발자 용어에서는 [Side Effect]라고 한다. 
사전적의미는 : 부작용 , 개발자들 사이에서는 : 의도하지 않은 결과
*/

//참조 복사에 의한 Side Effect를 해결하는 간단한 예제
let Exm = { name: "aaaaaaaa" };
let Exm2 = { ...Exm }; // Spread연산자를 통해서 값을 복사 시켜버림

console.log("---------잊고 있었던 개념-----------");
//얕은 복사 shallow : 원본 객체가 수정될 수 있어 위험함
let s1 = { name: "승수" };
let s2 = s1; // 객체의 참조값을 보사

//깊은 복사 deep : 원본  객체가 수정될 일이 없어 안점함
let c1 = { name: "coco" };
let c2 = JSON.parse(JSON.stringify(c1)); // JSON.stringify()를 이용해서 String으로 변환 후 JSON.parse()를 이용해서 다시 객체로 변환
let c3 = { ...c1 }; // 새로운 객체를 생성하면서 프로퍼티만 따로 복사함

// 새로운 객체가 깊은 복사를 통해서 만들어진다면
console.log(`c1과 c3는 같은가? : `, c1 === c3);
console.log(
  `c1과c3를 JSON.stringify()로 만든다면 ? `,
  JSON.stringify(c1) === JSON.stringify(c3)
);
/*
JSON.stringify를 사용하면 객체가 문자열로 변환되므로, 
메모리 주소와는 무관하게 문자열로서의 데이터만을 비교하게 됩니다. 
JSON.stringify(c1)와 JSON.stringify(c3)는 각각 c1과 c3의 내용을 문자열로 변환합니다.
메모리 주소 비교 대신, 이 두 문자열이 같은지를 단순히 값으로서 비교합니다.
따라서 JSON.stringify(c1) === JSON.stringify(c3)는 문자열화된 객체 내용만을 비교하므로 
메모리 주소는 전혀 상관이 없습니다. 
이 방식으로 객체의 내용을 쉽게 비교할 수 있습니다
*/

/*
자바스크립트에서 배열과 함수도 객체이다.
단지, 함수는 호출, 선언 같은 기능이 추가되었다 생각하고
배열은 순차저장, 순회가 가능하는 점만 있을 분
객체이다. 라고 이정환님께서 간략하게 알랴줌..
*/
