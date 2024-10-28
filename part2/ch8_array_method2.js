// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
// 1번값은 value(element) 2번값은 index 3번값은 array의 총 리스트
arr1.forEach(function (value, index, array) {
  if (arr1.length - 1 === index) {
    console.log(`index : ${index}, value : ${value}, array : ${array}`);
  } else if (arr1.length > index) {
    console.log(`index : ${index}, value : ${value}`);
  }
});

let doubledArr = [];
arr1.forEach((val) => {
  doubledArr.push(val);
});
console.log(`forEach로 doubledArr : ${doubledArr}`);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let arr3 = arr2.includes(2); // 기준변수.includes(확인할 값); 값의 유무의 따라 참,거짓 반환
console.log(`includes method , arr3 : ${arr3}`); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [5, 4, 3, 2];
let index = arr4.indexOf(3); // 기준변수.indexOf(위치확인할 값); 해당 인자(Arg)가 기준변수에 index 몇번째에 있는지
console.log(`indexOf method , index : ${index}`); // 1

// !!!! indexOf는 얕은 비교에 의해서 수행된다
// !!!! 객체들의 프로퍼티 기준으로 비교가 이루어지지 않는다 ???
// !!!! 그래서 indexOf로는 배열에서 특정 객체 값이 존재하지 찾을 수 없다.
// !!!! 그래서 findIndex를 이용하면  더 구체적이고 프로퍼티의 값을 비교해서 답을 도출할 수 있다 ???
// !!!! 단순한 원시타입 indexOf , 복잡학 객체타입에는 findIndex

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는지
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [5, 4, 3, 2];
let index2 = arr5.findIndex((val) => {
  if (val % 2 === 0) return true;
}); // 콜벡함수
// 기준변수.findIndex()함수안에 콜벡함수를 넣는다 arr5가 val에 1개씩 순회하면서 Ture만 찾아낸다.
console.log(`findIndex method , index2 : ${index2}`); // 출력 1 , 4가 if문에 가장 처음으로 true를 반환하니깐

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 , 요소를 그대로 반환
let arr6 = [5, 4, 3, 2, 1];
let index3 = arr6.find((val) => {
  if (val % 2 === 0) return val;
});
console.log(`find method , index3 : ${index3}`);
// 4 , findIndex함수는 인덱스 번호를, find는 해당 인덱스번호의 벨류를
