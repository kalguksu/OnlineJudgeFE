

## 특징

+ 웹팩3(Webkpack3)를 활용한 다중 페이지
+ 쉽게 사용할 수 있는 코드 에디터
+ E-Charts를 활용한 시각화 모듈
+ 사용자 친화적인 명령어 기능

## 설치 방법

노드 JS **v6.11** 버전이 설치가 되어 있어야 합니다.

```
# NPM을 이용해 인스톨을 수행합니다.
sudo npm install

# 웹팩3 DLL 레퍼런스를 이용해 빌드 시간을 절약합니다.
# 기본적으로 이 명령어는 build/webpack.dll.conf.js 내부의 패키지를 업그레이드하지 않았다면 한 번만 수행하면 됩니다. (매 번 실행할 필요가 없음.)
NODE_ENV=development sudo npm run build:dll

# 개발 서버에서 백 엔드 서버에 프록시 테이블을 설정합니다.
export TARGET=http://Your-backend

# 기본적으로 8080 포트에서 프론트 서버가 생성됩니다.
npm run dev
```

실행 이후의 Host의 80번 포트 혹은 443번 포트와 본 서버의 8080 포트와 포트 포워딩을 해주어야 합니다.

## 오픈소스 라이센스

[MIT](http://opensource.org/licenses/MIT)
