// 1. Spread 연산자
// -> 흩뿌리다. 펼치다라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

console.log("================================================");

let sss = {
  name: "seugnsoo",
  age: 30,
  address: "Incheon",
};
let coco = {
  name: "coco",
  age: 10,
  address: "Seoul",
};

let fam = { ...sss, ...coco };
console.log(fam);
/* coco객체의 값들만 출력됩니다.  
스프레드 연산자는 각 개체의 프로퍼티를 왼쪽에서 오른쪽 순서로 복사합니다.
따라서 coco의 프로퍼티가 fam객체에 마지막으로 복사되면서 sss객체를 덮어버립니다.
sss, coco 둘다 fam에 포함하려면 중첩구조 설정하거나, 다른 프로퍼티 이름으로 사용해야합니다.
*/

// 해결 방법 중 1개
let fam2 = [{ ...sss }, { ...coco }];
console.log(fam2);

console.log("================================================");

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  //a: obj1.a
  //b: obj1.b
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

console.log("================================================");

function funcA(x, y, z, w) {
  console.log(x, y, z, w);
}
// funcA(...obj2); // 이렇게 호출 하면 오류남 , 현재 obj2라는 객체를 배열 형태'[]'로 변환하지 않고
// 그대로 전달하려했다/'{}' 때문에 funcA()함수는 총 4개의 파라미터를 받을 준비를 했지만
// 객체형태에서 Spread연산을하면 1개의 파라미터에 객체를 모두 받고 나머지 3개의 파라미터에는 값이 들어오지 않음
// 객체는 순서가 정해진 데이터가 아니므로 함수에 순차적으로 매개변수로 전달해야한다.
// 즉 객체형태'{}'에서 스프레드하는 것은 허용되지 않습니다.
funcA(...Object.values(obj2)); // 1 2 3 4 << Object.values(obj2)를 하면 obj2의 값들을 꺼내올 수 있음

console.log("===================Rest매개변수========================");

//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수

// 주의할 점은 함수()의 파라미터에 사용할 Rest매개변수(...)뒤에 파라미터를 정의하면 안됩니다.
// function funcB(x, ...y , last) {}  <<< last 파라미터는 안됨
function funcB(x, ...y) {
  console.log(x); // 1 출력
  console.log(y); // [2,3,4]로 출력 받음
}

funcB(...Object.values(obj2));
