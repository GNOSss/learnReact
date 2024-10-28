//5가지 배열 변형 메서드

// 1.filter (콜벡함수 이용)
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 웹페이지 만들때 특정 조건 검색이나 정렬할때 필수적으로 사용한다고 합니다.
let arr1 = [
  { name: "승수", hobby: "운동" },
  { name: "coco", hobby: "먹기" },
  { name: "coco", hobby: "잠" },
  { name: "보라", hobby: "잠" },
];

// function표현식 , 화살표 함수식으로도 작성 가능함.
const arr2 = arr1.filter((val) => val.name === "coco");

const arr3 = arr1.filter(function (val) {
  return val.name === "coco";
});

console.log(arr2); // [ { name: 'coco', hobby: '먹기' }, { name: 'coco', hobby: '잠' } ]
console.log(arr3); // [ { name: 'coco', hobby: '먹기' }, { name: 'coco', hobby: '잠' } ]

// 2.map
// 프론트분야에서 자주 사용되는 기능
// 배열의 모든 요소를 순회하면서 , 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환(return)
let arr5 = [1, 2, 3, 4, 4];

//map메서드의 파라미터 3가지 받을 수 있음
// 1번째 : value , 2번째 : index , 3번째 : array
arr5.map((x, y, z) => {
  console.log(x, y);
  if (arr5.length - 1 === y) {
    console.log(`map에 사용된 배열은 : ${z}`);
  }
});

// map은 return 받을 수 있어 새로운 변수에 가공된 값을 할당받을 수 있다.
const arr6 = arr5.map((x, y, z) => {
  console.log(x, y);
  return x * 2;
});

console.log(arr6); // [ 2, 4, 6, 8, 8 ]

// 위 arr1변수는 배열안에 객체로 담겨 있습니다. 이럴경우 아래 코드처럼 작성하면 각 프로퍼티에 접근 가능
let names = arr1.map((item) => item.name);
console.log(names); // [ '승수', 'coco', 'coco', '보라' ]

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr7 = ["b", "y", "a", "d", "h"];
arr7.sort();
console.log(arr7); // 'a' ,'b' , 'd' , 'h', 'y'

let arr8 = [10, 3, 5];
/*
arr8.sort(); // 10, 3, 5 로 정렬됨
sort() 메서드는 기본적으로 요소들을 문자열로 변환한 후 사전 순서대로 정렬한다.
문자열 기준으로 1번째 자리를 우선적으로 비교하기에
"10" 문자열은 "1"이 첫번째 자리이고 "3"과 비교시 작기 때문에 10이 앞에 출력됨
그래서 숫자는 콜백함수로 정의를 내려줘야함
*/

arr8.sort((a, b) => a - b); // 숫자타입 sort메서드로 오름차순 정렬 : 3,5,10
arr8.sort((a, b) => b - a); // 내림차순 정렬 : 10,5,3
console.log(arr8);

// 4. toSorted
// sort메서드는 원본을 정렬해줌
// toSorted메서드는 원본은 냅두고 새롭게 생성시켜줌
let arr9 = ["b", "y", "a", "d", "h"];
let sortedArr = arr9.toSorted();
console.log(sortedArr); // 'a' ,'b' , 'd' , 'h', 'y'
console.log(arr9); // ['b', 'y', 'a', 'd', 'h']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
// 각 요소 사이에는 지정된 구분자를 넣을 수 있습니다.
// 구분자(separator)를 지정하지 않으면 기본적으로 쉼표 (,)가 사용됨
let arr10 = ["a", "b", "c"];
console.log(arr10.join()); // a,b,c
console.log(arr10.join(", ")); // a, b, c
console.log(arr10.join("")); // abc
