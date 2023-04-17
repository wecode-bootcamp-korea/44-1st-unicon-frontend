# Team WEKEA - IKEA-motivated clone coding project

![Vector](https://user-images.githubusercontent.com/37966668/231990989-8fcaec4a-bf09-435d-b47a-36296dd16ac0.png)


## FrontEnd

- <a href="https://github.com/ggkim0614">김정환 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="https://github.com/suny0ung">최선영 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

<br />

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>


## BackEnd

- <a href="https://github.com/minseoya">김민서 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/minseoya"/></a>
- <a href="https://github.com/lsg622">임성근<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/lsg622"/></a>
- <a href="https://github.com/Dongrang072">최상현<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/Dongrang072"/></a>

<br />

Special Thanks to - <a href="https://github.com/parkseyik">박세익 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/parkseyik"/></a>


<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>

  
<br/>

# WEKEA - 가구 e-commerce 플랫폼 클론 코딩 프로젝트

- 이 프로젝트는 Wecode 코딩 부트캠프 커리큘럼의 일부로써 제작되었습니다.

<br/>

# 👨‍💻 구현 페이지 목록
1. 로그인 페이지 (정환)
2. 메인 페이지 (선영)
3. 상품 리스트 페이지 (선영)
4. 상품 상세 페이지 (선영)
5. 쇼룸 페이지 (정환)
6. 구매한 상품 페이지 (정환)
7. 장바구니 페이지 (정환)
8. 주문/결제 페이지 (정환)


**1. 로그인/회원가입**<br>-

**로그인** - 정규표현식을 이용한 입력값 검사, 이후 통과시 백엔드에 요청을 보내 JWT(JSON Web Token) 수령. 로컬 스토리지에 해당 토큰을 저장 후 요청 시 필요할 때마다 리퀘스트 헤더에 담아서 사용. 해당 사용자값 DB에 존재 시 알림창과 함께 요청 반환값으로 받은 사용자 이름 내비게이션 바에 디스플레이.

https://user-images.githubusercontent.com/37966668/232360969-961bce36-2904-4a2a-bff8-55f712371490.mov

**회원가입** - 다양한 정규표현식(생년월일/YYYY-MM-DD, 계정/XXXX@XXXX.XX, 핸드폰 번호/XXX-XXXX-XXXXX 등)을 이용한 입력값 검사, 이후 통과시 백엔드에 해당 값들을 페이로드로 실어서 백엔드로 전송

https://user-images.githubusercontent.com/37966668/232361004-cde3fa02-0019-4541-a264-1b11b847047c.mov

