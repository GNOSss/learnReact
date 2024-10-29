React App은 어떻게 구동되는걸까 ?

1. React App 생성 (with Vite)
   1. npm create vite@latest
   2. 빌드 세팅
2. React App 가동
   1. npm run dev
   2. 주소를 받아서 브라우저에 이동
3. React Application?
   1. Vite를 통해 생성한 리액트 앱에는 사실 웹서버가 내장되어 있었고
   2. npm run dev 명령어는 리액트 서버를 가동시키는 명령어 입니다.
   3. 리액트 서버를 가동시키면 Local에 나오는 주소는
   4. 리액트 웹 서버를 접속할 수 있는 주소입니다..
4. 로컬호스트의 주소는 뭘까 ? 내 컴퓨터의 주소를 의미합니다.
   로컬호스트 주소의 끝에 4자리 숫자는 port 번호입니다
   port번호는 하나의 컴퓨터에서 여러개의 서버를 동작시키기 위해서 필요한 주소
   왜 필요할까요 ? 하나의 컴퓨터에 2대 이상의 서버를 가동하게되면
   웹 브라우저는 요청이 들어오고 응답을 해주는 과정에서 어떤 곳에 응답을 해줘야 할지
   정확하게 구분하기가 어렵습니다. 그렇기에 포트번호를 각각 부여하여 구분할 수 있습니다.
   주의사항은 외부 컴퓨터에서는 접속할 수 가 없다는 것 입니다.

React의 작동 원리는 무엇일까 ?
작성자가 만들어 놓은 html파일의 script 태그로 불러오고 있는
@@@.jsx라는 자바스크립트 파일이 실행되었을때
동적으로 추가되는 요소들입니다.