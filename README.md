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

# 👨‍💻 구현 화면 목록
1. 로그인 페이지 (정환)
2. 메인 페이지 (선영)
3. 상품 리스트 페이지 (선영)
4. 상품 상세 페이지 (선영)
5. 장바구니 페이지 (정환)
6. 주문/결제 페이지 (정환)


| **1. 로그인/회원가입**        | <br> | **F준현님, B원경님**<br>**[공통]**<br>- 신규 유저 유입 허들을 낮추기 위해서 소셜 로그인을 도입함 <br>- 우리나라 기준으로 카카오톡 유저가 제일 많기 때문에 카카오 로그인을 최상단위 위치함 (이후 유저가 많은 SNS 순서로 배치)<br>- 회원가입 버튼이 최하위에 위치한 이유는 데이터베이스에 들어가는 리소스를 최소화하기 위함 <br>- 소셜 로그인으로 신규 유저 정보를 얻는 이유는 이미 기반이 잘 잡힌 기업에 인증 권한을 위임하는 게 안전하기 때문.<br>**[FrontEnd]**<br>- 카카오 API를 통해 Token을 요청하고 서버로 전달하는 로직을 구현<br>- 뒷 배경을 어둡게 해서 로그인 창을 좀 더 강조하고자 함<br>**[BackEnd]**<br>- 소셜 로그인 API에서 유저 닉네임과 이메일 동의를 구하기로 정함<br>- 리소스를 최소화하기 위함<br>- 소셜로그인으로 가입하면 비밀번호가 Null값으로 들어옴 → 자사 사이트에서 회원가입을 한 사람은 비밀번호 데이터가 있음 <br>- 유저별 이벤트 등에 활용 가능 (소셜로그인 회원 / 순수 사이트 가입 회원)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **2. 메인 페이지**            |  <br>  | **F준현님, B홍열님**<br>**[공통]**<br>- 강의의 다양성을 강조하기 위해 카테고리별 강의들을 메인 화면에 나타내고 있음<br>- 다양한 관심사를 가진 유저들을 최대한 많이 유입하기 위함<br>- 최상단에 위치한 메인 배너는 사이트가 가장 강조하고 싶은 강의 및 정보를 노출<br>- 유저가 사이트 접속 시 제일 먼저 보게 되는 위치에 있기 때문<br>**[FrontEnd]**<br>- 카테고리별 캐러셀 기능 구현해서 최대한 다양한 카테고리별 강의들을 노출<br>- Nav바에 전체 카테고리 드롭다운을 생성해서 전체 카테고리 목록을 한번에 확인할 수 있도록 구현<br>**[BackEnd]**<br>- 카테고리별 조회 API 와 전체 조회 API를 하나로 묶어서 기능을 구현<br>- 두 가지 기능을 하나로 묶어서 리소스를 줄이고 효율성을 극대화 (필요 시에만 카테고리별 API 를 get 해올 수 있음)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **3. 상세 페이지**            | <br> | **F혜린님, B홍열님**<br>**[공통]**<br>- 관심(좋아요) 수를 통해 얼마나 많은 고객들이 해당 강의에 관심을 보이고 있는지를 나타내고 있고 유저의 ‘관심목록’에 추가한다. <br>- 해당 수치로 강의에 대한 관심도 및 인기도를 가늠해볼 수 있음. <br>- 하트를 누른 유저는 마이페이지에서 관심 있는 강의 목록에서 확인할 수 있음 + 관심 있는 강의 바탕 알람 전송 (노출증가)<br>- 공유하기, 선물하기 버튼<br>- 관심 있을 거 같은 지인에게 공유하기 및 선물하기 버튼을 통해 해당 강의를 널리 퍼뜨릴 수 있음 → 바이럴 효과, 유저 유입 증가 목표<br>**[FrontEnd]**<br>- 가장 먼저 나타나는 썸네일은 유저가 강조하고 싶은 이미지이기 때문에 제일 큰 사이즈로 구성<br>- ‘구독하기’ 버튼을 포함한 Aside 바는 화면을 스크롤해도 계속해서 쫓아다닌다.<br>- 클래스에 대한 정보를 알아보는 과정 속에서도 구독하기를 계속해서 유도할 수 있음. <br>- 가장 중요한 ‘구독하기(결제)’ 버튼이 유저의 UI에 계속 노출되도록 `position:sticky`사용<br>- 메뉴바 순서 - 후기> 클래스 소개>커리큘럼>크리에이터>환불정책<br>- 클래스명을 보고 클릭을 해서 상세페이지로 넘어온 유저는 적어도 클래스명만으로도 관심을 갖고 누른 유저일 가능성 ↑<br>- 해당 클래스의 신빙성을 따지기 위해서 제일 먼저 확인하는 척도는 후기인 경우가 많음<br>- 후기를 확인한 이후에는 클래스에 대한 자세한 소개글을 보며 유저가 기대한 내용이 맞는지를 확인할 수 있음<br>- 이후에 커리큘럼 및 크리에이터 소개글을 통해 더 자세한 내용을 확인하고 구독/결제로 유도하게끔 기획<br>**[BackEnd]**<br>- 하나의 페이지에서 해당 강의에 대한 모든 정보를 유저에게 전달할 수 있게 유저의 니즈를 충족해줄 수 있는 데이터들을 하나의 API로 구현 |
| **4. 콘텐츠 플레이어 페이지** | <br> | **세익님**<br>**[공통]**<br>- 우측 사이드바 속 정보 (강좌명, 목차명 등)을 확인하면서도 좌측 영상을 동시에 시청할 수 있음 <br>- 유저가 편하게 원하는 강의를 골라서 들을 수 있게끔 하기 위함<br>- 강의의 필수적인 정보를 한 화면에서 나타낼 수 있도록 유저의 시인성을 확보<br>- 사이드바 활성 시에도 영상 재생이 끊기지 않아 몰입도를 방해하지 않음<br>- 좌측 상단 ‘강의 대시보드’ 버튼을 통해 시청 중인 클래스 상세 페이지로 이동할 수 있게 구현<br>- 언제든 클래스에 대한 정보에 접근하기 쉽게 하기 위함 → 클래스에 대한 리뷰를 작성할 수 있고, 커뮤니티에 접근할 수 있음 등등<br>**[FrontEnd]**<br>- 처음엔 영상 제목을 클릭하면 체크박스가 선택되어 해당 영상을 시청했음을 나타내고자 함<br>- 추후에는 영상 길이의 70%가 재생되면 자동으로 체크박스가 채워지게끔 구현하고자 함<br>- 단순 체크박스 선택이 아니라 유저가 해당 영상을 얼마나 시청했는지에 따라 시청률을 측정하고자 했음<br>**[BackEnd]**<br>- 유저가 호스팅 페이지에서 동영상을 업로드하는 순서대로 출력을 해서 프론트에서 분류하기 편하게 videoSequence 및 curriculumsSequence를 부여함<br>- FormData 형식으로 비디오 url를 데이터베이스에 보관 및 관리를 기획함<br>- 비디오 url 데이터는 OneOhOne 사이트의 핵심 자료라고 생각되어 본질적인 데이터 유실 가능성을 최소화하기 위함                                                                                                                                                                                                                                                                                                                                        |
| **5. 호스팅 페이지**          |  <br>  | **F유진님, B홍열님**<br>**[공통]**<br>- 미리보기 버튼을 통해 업로드 전 모습을 확인할 수 있게 함<br>- 실제 업로드 전 실수를 방지하기 위함 (검토 기능)<br>- 업로드의 피로감을 줄이기 위해 최대한 단순하고 간결한 UI를 구성함<br>- 각각의 input 창마다 ‘입력 정보’와 ‘편집’ 버튼 존재<br>- 필수 입력 정보 존재 - 커버 이미지, 클래스 제목, 카테고리, 클래스 소개, 크리에이터 소개<br>- 유저가 구독 및 결제를 결심하는데 있어서 최소한으로 필요한 필수 정보라고 분류<br>- 호스트가 모든 정보를 입력해야 할 피로도를 줄여줌<br>**[FrontEnd]**<br>- 각각의 입력값이 저장되게끔 만들어서 유저에게 편리함을 제공<br>- 많은 값들을 한번에 모두 입력해서 저장하는 방식은 입력하다가 중단할 경우 데이터가 날아갈 우려가 존재하기 때문에 각각 저장 기능을 부여<br>- 일부분을 수정하고 싶은 경우 수정하고 싶은 input 컴포넌트만 수정이 활성화 되게 구현<br>- 입력하고자 하는 항목의 Edit 버튼 클릭 시 입력창 부분 펼쳐지도록 구현<br>- 스크롤하는 양을 줄여서 유저가 찾고자 하는 부분을 조금 더 쉽게 찾게 하기 위함<br>- 취소하기 버튼 클릭 시 수정 이전 화면 렌더링<br>- 저장하기 버튼 클릭 시 입력한 값으로 화면 전환 및 toast 라이브러리를 통한 팝업 기능<br>- 이미지, 동영상 첨부 기능<br>- select(option) 조작을 통한 강의 카테고리 선택 기능<br>- React Quill을 활용한 클래스 소개 입력창 구현<br>- input을 활용한 클래스 제목 및 수강료 입력 기능<br>**[BackEnd]**<br>- 각각의 입력값이 저장되게끔 각각의 API를 생성하여 데이터 저장의 자율성을 제공<br>- 데이터를 따로 관리하기 때문에 데이터 분실 우려가 적어진다<br>- 데이터가 분산되어 저장되기 때문에 여러가지 기능 구현의 선택폭이 넓어진다 (예: 고객 분석 등)                                                                                                                                                                                                                                                                                                                   |
