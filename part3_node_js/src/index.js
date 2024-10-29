// 모듈 시스템 : 모듈을 다루는 시스템
/* 
모듈 : 여러 가지의 기능을 구현해야한다고 하면 기능별로 나눠서 개발을 하게 됩니다.
기능별로 나뉘어진 이런 각각의 자바스크립트 파일들을 우리는 모듈이라는 이름으로 부릅니다.
Ex) 회원관리 기능이 들어있는 User.js는 User모듈
Ex) 장바구니 기능이 들어있는 Cart.js는 Cart모듈 이라고 부릅니다.

자바스크립트에서는 여러가지 모듈 시스템들이 있습니다.
CommonJS : Node.js에서 사용하는 모듈 시스템
목적: 주로 서버 사이드(Node.js)에서 사용하기 위해 만들어졌습니다.
특징:
require()와 module.exports를 사용해 모듈을 가져오고 내보냅니다.
동기 로딩: 모듈을 코드 실행 도중 불러오며, 이 방식은 서버 환경에 적합합니다.

ESM(ES Modules):
목적: JavaScript의 공식 모듈 시스템으로, 클라이언트와 서버 모두에서 사용할 수 있습니다.
특징:
import와 export를 사용해 모듈을 가져오고 내보냅니다.
비동기 로딩: 브라우저 환경에서의 비동기 로딩을 지원하여, 네트워크 지연을 줄일 수 있습니다.

AMD (Asynchronous Module Definition) : 
목적: 주로 브라우저에서 비동기적으로 모듈을 로드할 수 있도록 설계되었습니다.
특징:
define()과 require()를 사용해 모듈을 정의하고 가져옵니다.
비동기 로딩: 네트워크 요청을 비동기적으로 처리해 빠르게 로딩하고, 브라우저 환경에 적합합니다.
RequireJS: AMD 방식 구현 라이브러리로 유명합니다.

UMD (Universal Module Definition)
목적: CommonJS, AMD, 전역(global) 스코프 등 다양한 환경에서 동작하도록 설계되었습니다.
특징:
CommonJS와 AMD 모듈 방식과 호환되며, 서버 및 브라우저 환경에서 모두 사용 가능합니다.
하나의 파일이 다양한 JavaScript 모듈 환경에서 실행되도록 해주는 "범용" 모듈 포맷입니다.


이정환씨는 CommonJs , Es Modules 을 사용하겠다고 합니다.

CommonJs와 Es Module의 사용은 코드를 작성하는 곳마다 주석처리하였고

NPM 사이트 들어가서 라이브러리 설치 가능합니다. install코드 복사 후 
사용할 폴더 경로에 이동해서 install코드 실행

외부 라이브러리 다운로드를 하게 되면 package-lock.json파일과 node_modules폴더가 생성됩니다.
또한 package.json파일의 "dependencies"항목에 설치된 라이브러리 리스트가 보입니다.
package-lock.json은 설치한 라이브러리의 내용을 package.json보다 정확하고 엄밀하게 저장하는 파일입니다.
node_modules파일은 설치한 라이브러리의 코드파일들이 있습니다.

추가로 node_modules나 package-lock.json 파일이 삭제되어도
package.json의 dependencies리스트에 라이브러리 이름과 버전이 기록되어있으면
npm i 라는 실행코드로 다시 설치해줄 수 있습니다.

Github이나 다른이에게 공유할때는 굳이 node_modules까지 올릴 필요는 없을거 같습니다. (용량 문제)

*/

// // (Common JS)아래 require구문으로 mathe.js에서 exports문법에 쓰인 함수들 가져옴
// const moduleData = require("./math.js");
// // 변수에 할당 후  (.)으로 각 함수를 프로퍼티처럼 사용 가능
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// // 구조 분해 할당으로 사용 가능
// const { add, sub } = require("./math.js");
// console.log(add(3, 4));

// ES모듈 시스템
import mul, { add, sub } from "./math.js";

console.log(add(3, 4));
console.log(sub(3, 4));
console.log(mul(3, 4));

// 사용자가 npm을 통해서 설치한 라이브러리는
// from구문에 경로가 아닌 라이브러리 이름을 명시.
import randomColor from "randomcolor";

console.log(randomColor()); // 무작위한 색상 코드가 출력됨
