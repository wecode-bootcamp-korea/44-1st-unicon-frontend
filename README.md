# WEKEA : IKEA-motivated clone coding project

![Vector](https://user-images.githubusercontent.com/37966668/232393450-f45f8d99-6001-4ce0-9e19-c2c0bebd19ae.png)

![giphy](https://user-images.githubusercontent.com/37966668/232397033-2bbaa8d7-382f-494b-9a8d-d7a3180d966c.gif)

<br />

![Group 3](https://user-images.githubusercontent.com/37966668/232392845-3958e8f3-0bfc-4734-8423-cd8a47ba55a3.png)

## Team uniC5n - FrontEnd

- <a href="https://github.com/ggkim0614">김정환 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="https://github.com/suny0ung">최선영 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

<br />

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>


## Team uniC5n - BackEnd

- <a href="https://github.com/minseoya">김민서 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/minseoya"/></a>
- <a href="https://github.com/lsg622">임성근<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/lsg622"/></a>
- <a href="https://github.com/Dongrang072">최상현<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/Dongrang072"/></a>

<br />

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>

<br />

Special Thanks to - <a href="https://github.com/parkseyik">박세익 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/parkseyik"/></a>

<br/>

# WEKEA - 가구 e-commerce 플랫폼 클론 코딩 프로젝트

- 이 프로젝트는 <a href="https://github.com/wecode-bootcamp-korea">Wecode 코딩 부트캠프</a> 커리큘럼의 일부로써 제작되었습니다.

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

#### ** 0. products **
이케아라는 브랜드를 떠올렸을때 가장 먼저 생각나는 오프라인 쇼룸을 모티브로 프로덕트의 주 방향으로 잡았습니다.<br />
오프라인 쇼룸에서 여러 제품이 어우러진 인테리어를 감상하고, 해당 브랜드의 제품을 실제로 접촉하고 경험하면서 소비자들과 소통하는 이케아의 강점을 홈페이지에 녹아내고자 하였습니다.<br />
온라인 쇼룸 페이지를 통해서 인테리어 이미지와 관련 제품들을 나열하여 이케아의 장점을 살리고자 하였고, 제품 나열페이지에서는 호버되는 이미지들을 통해서 실제로 접촉하여 제품을 느꼈을때 다 방면으로 바라보는 시선을 구현하고자 하였습니다.<br />
그 외에도 메인페이지에서 이벤트를 고려하여 색상이나 버튼의 크기등 눈에 띄게 조정하였고, 장바구니나 결제페이지에서는 소비자들의 주의를 집중시키기 위해 nav바를 생략하는 등 디테일한 부분들에서도 소비자의 시선을 고민하며 구현에 집중하였습니다.

#### ** 1. 로그인/회원가입 페이지 **

**로그인** - 정규표현식을 이용한 입력값 검사, 이후 통과시 백엔드에 요청을 보내 JWT(JSON Web Token) 수령. 로컬 스토리지에 해당 토큰을 저장 후 요청 시 필요할 때마다 리퀘스트 헤더에 담아서 사용. 해당 사용자값 DB에 존재 시 알림창과 함께 요청 반환값으로 받은 사용자 이름 내비게이션 바에 디스플레이.

https://user-images.githubusercontent.com/37966668/232360969-961bce36-2904-4a2a-bff8-55f712371490.mov

**회원가입** - 다양한 정규표현식(생년월일/YYYY-MM-DD, 계정/XXXX@XXXX.XX, 핸드폰 번호/XXX-XXXX-XXXXX 등)을 이용한 입력값 검사, 이후 통과시 백엔드에 해당 값들을 페이로드로 실어서 백엔드로 전송

https://user-images.githubusercontent.com/37966668/232361004-cde3fa02-0019-4541-a264-1b11b847047c.mov

<br />

#### ** 2. 랜딩 페이지 **<br>

내비게이션 바, 쇼룸으로 가는 링크가 내포된 메인 배너, 페이지 하단에 배치된 추천 아이템 및 다양한 요소들로 구성되어 있음.

**내비게이션 바** - 로그인 이후 페이로드에 JWT와 같이 저장된 사용자 이름을 디스플레이. 다수의 링크들을 상수 데이터를 이용하여 맵핑 및 해당 페이지로 이동 가능하게 라우팅 구현.

https://user-images.githubusercontent.com/37966668/232379658-8921f658-8999-41a2-9d33-0a32c5284a2b.mov


**검색 기능** - 제품명뿐만이 아니라 해당 제품의 카테고리값으로도 검색이 가능하게 구현. 값이 인풋될 때마다 상태값이 업데이트 되고, 백엔드에 해당 값으로 검색 결과 요청 이후 해당 값들을 맵핑하여 구현함.

https://user-images.githubusercontent.com/37966668/232379785-4304a413-f12d-4f0c-a582-3aff6e79cf36.mov

<br />

#### ** 3. 쇼룸 페이지 **<br>

가구가 조합으로 배치됐을 때의 사진을 보여주고, 측면에 사진 내부에 배치된 개별의 가구들을 사이드 캐러셀로 배치한 페이지. 캐러셀의 아이템들을 누르면 해당 제품의 상세 페이지로 이동할 수 있게 동적 라우팅 구현.

https://user-images.githubusercontent.com/37966668/232380673-85340074-ad54-403c-90f7-4c7edb4b3e87.mov

<br />

#### ** 4. 상품 리스트 페이지 **<br>

**가격 낮은순/높은순 필터 기능** - 리스트 페이지에 맵핑된 상품들을 동적으로 쿼리 스트링으로 요청하여 맵핑 순서 재배치.

https://user-images.githubusercontent.com/37966668/232383804-1432ed20-cad6-4cf0-b63b-40c0a642b446.mov

<br />

#### ** 5. 상품 상세 페이지 **<br>

제품의 상세 정보가 구현된 페이지. 동적 라우팅으로 같은 상세 페이지 컴포넌트 내에서 쿼리한 값에 따라 다른 아이디의, 해당 제품의 정보값을 나열, 해당 상품의 리뷰 유무 및 내용도 확인 가능.

https://user-images.githubusercontent.com/37966668/232384212-2c71ce5b-e667-4e98-97e5-1034e97962fe.mov

<br />

#### ** 6. 장바구니-주문-결제 페이지(플로우) **<br>

장바구니에서 제품 수량 변경, 삭제, 결제 시 보유 포인트에서 결제 가격 차감 기능까지 구현. 모든 요청은 헤더에 유저의 고유 토큰 값이 담겨야 반환되며, 구매한 상품은 구매내역 페이지에서 확인 가능하게 구현.

https://user-images.githubusercontent.com/37966668/232386906-437d0a4a-12de-4964-ba1a-a6e0d69213cf.mov

<br />

#### ** 7. 구매한 상품 / 리뷰 남기기/삭제 기능 **<br>

유저가 해당 상품을 구매한 이력이 있다면, 리뷰 남기기가 가능하고, 구매한 이력이 없다면 가능하지 않도록 구현. 

https://user-images.githubusercontent.com/37966668/232387897-96f1cba1-d256-44ee-8933-32db6449efbc.mov

<br />








