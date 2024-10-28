// 순회 (Iteration)
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

/*
배열 순회
let numbers = [1,2,3];
배열의 인덱스 값을 통해서 순차적으로 접근할 수 있음
*/

/*
객체 순회
let person = {
    name : "송승수"
    age : 27,
    hobby : "웨이트"
};
키 값을 기준으로 N번째 프로퍼티의 값을 접근 할 수 있고
벨류를 기준으로도 순회 할 수 있다.
*/

// 1.배열 순회
let arr = [1, 2, 3, 4, 5, 6];

// 1-1. 배열 인덱스 , [.length]를 사용해서 배열 길이만큼 조건식을 만듦
for (let i = 0; i < arr.length; i++) {
  // arr 배열의 인덱스를 통해 각 요소에 접근하여 출력
  console.log(arr[i]);

  if (i == arr.length - 1) {
    console.log("기본 for문 끝\n");
  }
}

// 1-2. for of 반복문
// 기존 for문에 필요한 증감식, 조건식이 필요 없음
// let i (루프 제어 변수) of 배열명을 입력하면 배열 길이만큼 순회함
for (let i of arr) {
  console.log(i);
  if (i == arr.length) {
    console.log("for of 반복문 끝\n");
  }
}

console.log("\n-----배열 순회 끝------객체 순회 시작------\n");

// 2. 객체 순회
let me = {
  name: "승수",
  age: 32,
  hobby: "웨이트",
};

// 2-1. Object.keys, Object.values 사용
// 객체에서 Key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(me);
let valuess = Object.values(me);

// 2-2. 기존 for문
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  if (i == keys.length - 1) {
    console.log("객체 기본 for문 끝\n");
  }
}

// 2-3. for of 반복문
for (let value of valuess) {
  console.log(value); // console.log(객체명[value]);도 가능
  if (value == valuess.length - 1) {
    console.log("객체 for of 반복문 끝\n");
  }
}

for (let key of keys) {
  console.log(`${key} :  ${me[key]}`);
  if (key === keys[keys.length - 1]) {
    // 외부의 keys변수를 사용했음
    console.log("객체 for of 반복문2 끝\n");
  }
}

// 2-4. for in => in 연산자가 객체의 프로퍼티를 순회함
for (let key in me) {
  console.log(`${key} :  ${me[key]}`);
  if (key === keys[keys.length - 1]) {
    // 외부의 keys변수를 사용했음
    console.log("객체 for in 반복문 끝\n");
  }
}

/**
 * 배열을 순회할때는 for of 가
 * 객체를 순회할때는 for in 이 효과적이라고 합네다..
 */
