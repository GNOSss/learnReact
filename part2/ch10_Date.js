// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //
console.log(date1); // 2024-10-28T06:11:31.755Z

let date2 = new Date("2024-10-28"); // new Date("yyyy-mm-dd");
console.log(date2); // 2024-10-28T00:00:00.000Z

let date3 = new Date("2025-10-28/23:59:59");
console.log(date3); // 2025-10-28T23:59:59.000Z

// 해당값은 문자값이 아닙니다. 특히 월은 0으로 적으면 1월 입니다.
let date4 = new Date(1993, 7, 9, 1, 2, 3);
console.log(date4); // 1993-09-09T01:02:03.000Z

// 2. 타임스템프 timestemp
// UTC(1970.01.01 00:00:00)부터 ms가 지났는지 의미하는 숫자 값
let date11 = new Date(); // 현재 연월일 시분초 반환
let timestamp = date11.getTime(); // UTC부터 date11시간의 차이 밀리세컨즈로 반환

console.log(timestamp); //

//////////////////////////////////////////
// 3. 시간 요소들을 추출하는 방법
let date12 = new Date();

let year = date12.getFullYear(); // 4 digits year
let month = date12.getMonth() + 1; // 0-11
let day = date12.getDate(); // 1-31
let hour = date12.getHours(); // 0-23
let minute = date12.getMinutes(); // 0-59
let second = date12.getSeconds(); // 0-59

console.log(year, month, day, hour, minute, second);

// 4. 시간 수정하기
let date13 = new Date();

// 1999년 9월 11일 21시 11분 30초 로 바꿔보기
date13.setFullYear(1999); // 4 digits year
date13.setMonth(8); // 0-11
date13.setDate(11); // 1-31
date13.setHours(21); // 0-23
date13.setMinutes(11); // 0-59
date13.setSeconds(30); // 0-59
console.log(date13); //

// 5. 시간을 여러 포맷으로 출력하기
let date14 = new Date();

console.log(date14.toDateString()); // Mon Oct 28 2024
console.log(date14.toLocaleString()); // 2024-10-28, 오후 18:12:13
console.log(date14.toLocaleTimeString()); // 18:12:13
console.log(date14.toLocaleDateString()); // 2024-10-28
console.log(date14.toISOString()); // 2024-10-28T18:12:13.755Z
