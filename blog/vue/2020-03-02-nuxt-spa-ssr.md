---
title: Nuxt로 알아보는 SPA, SSR 그리고 Static Web
date: 2020-03-02 13:51:20
summary: 나는 지금까지 SSR과 Static Web을 혼동하고 있었다. Nuxt의 명령어를 살펴보며 SPA, SSR 그리고 Static Wen에 대해서 알아보자
tags: ["Vue", "Nuxt", "SPA", "SSR"]
---

# 😨 그동안의 오해

나는 그동안 Nuxt를 제대로 알고 있다고 생각했다. 흔히 말하는 SPA의 특징과 SSR의 특징을 이해하고 있다고 믿었고, 서비스의 특징과 필요에 따라 사용하면 된다고 알고 있었다. 그러나 사이드 프로젝트를 진행하면서 의문이 들어 나름의 조사를 해보니 SPA와 SSR의 큰 특징들만 알고 있었지, Nuxt를 제대로 아는 것이 아니었더라. SPA, SSR 그리고 Static Web의 차이를 제대로 알고 쓰도록 하자.

---

# 📱 SPA?

**단일 페이지 애플리케이션(Single Page Application, SPA)** SPA란 단일 페이지로 구성된 웹앱을 말한다. 기존의 서버 사이드 렌더링 방식과 비교할 때, 배포가 간단하며 상대적으로 유려한 UX를 제공한다는 장점이 있다. SSR과 비교를 해보겠지만 장단점을 알아보자.

## 장점

- SSR과는 다르게 페이지 이동 시 깜빡임이 없다. (유려한 UI/UX 제공)
- 정적 리소스(css / font / image 등)를 한 번만 다운로드하여 전체적인 트래픽을 감소시킬 수 있다.

## 단점

- 검색 엔진 최적화(SEO)에 불리하다.
  > 단일 페이지로 구성되어있고 화면 및 데이터를 비동기 통신을 이용해 그리기 때문이다.  
  > 브라우저에서 페이지 소스보기를 하면 내용이 보이지 않는다.
- 초기 로딩속도가 느리다.
  > 앱이 커질수록 js의 용량도 커지다 보니 초기 로딩 속도가 자연스레 느려진다.

---

# 🖥 SSR?

**서버 사이드 렌더링(Server Side Rendering)** SSR이란 SPA의 클라이언트 사이드 렌더링과는 반대로 유저가 화면을 요청하면 서버에서 미리 HTML을 그려 렌더링하는 방식이다. 장단점은 SPA(클라이언트 사이드 렌더링)과 대조된다.

## 장점

- 검색 엔진 최적화(SEO)에 유리하다.
- 초기 로딩 속도가 빠르다.

## 단점

- 링크 이동 시 화면이 깜빡인다.
- 전체 트래픽이 상대적으로 많다.

---

# ❔ vue-cli를 이용하면..

간단하게 SPA(클라이언트 사이드 렌더링)와 SSR(서버 사이드 렌더링)의 차이를 알아보았다. 그렇다면 대체 `vue-cli`가 있음에도 `Nuxt`는 왜 생겨났으며, 어떤 명령어를 통해서 어떻게 사용해야 할지 차근차근 알아보자.

## 1. vue-cli

일단 vue-cli로 프로젝트를 만들면 해당 프로젝트는 기본적으로 SPA 프로젝트이다. SSR을 이용할 방법이 없는 것은 아니다.

> [https://kr.vuejs.org/v2/guide/ssr.html](https://kr.vuejs.org/v2/guide/ssr.html)  
> [https://ssr.vuejs.org/](https://ssr.vuejs.org/)

두 링크를 참고하면 SSR 또는 Pre-Rendering이 가능하다.

## 2. 프로젝트 생성

vue-cli를 이용해 프로젝트를 만들어보자.

```bash
vue create <app-name>
```

명령어를 이용하여 프로젝트를 생성한다.

![vue-cli-프로젝트-생성](https://user-images.githubusercontent.com/54297322/75431149-c2b41a80-598f-11ea-86c1-11a068992019.png)

![vue-cli-프로젝트-구조](https://user-images.githubusercontent.com/54297322/75431307-0444c580-5990-11ea-8dc5-161a442f5531.png)

## 3. 프로젝트 빌드

`package.json`에는 스크립트가 작성되어 있는데, `serve`는 개발용 앱을 실행시킬 때, `lint`는 코드 스타일링과 관련한 스크립트이니 `build` 명령어를 실행해보자.

```bash
yarn build
```

빌드를 마치면 프로젝트 폴더에는 `dist` 폴더가 생겨있고 폴더 안에는 빌드된 웹의 내용물이 들어있을 것이다.

![vue-cli-build](https://user-images.githubusercontent.com/54297322/75431870-d90ea600-5990-11ea-901a-0b512c935f9a.png)

저 결과물을 서버에 업로드하면 SPA는 배포되고 바로 접속할 수 있다. 이런 과정을 통해 SPA는 배포가 간단하다는 장점이 있을 수 있는 것이다.

빌드된 앱을 실행시켜보자.

```bash
// 프로젝트 루트에서 명령어 사용
npx serve dist
```

> `npx serve` 명령어는 간단한 웹서버를 설정 없이 바로 실행할 수 있게 도와준다. npx와 serve는 따로 찾아보거나 일단 넘어가도록 하자.

## 4. 결과 화면

![vue-cli-view](https://user-images.githubusercontent.com/54297322/75432458-c648a100-5991-11ea-89ec-87d54248a1bb.png)

`npx serve dist`를 통해 웹앱을 실행시키고 해당 주소로 들어가면 웹이 실행된 걸 확인할 수 있다. 또한, 크롬 콘솔(이미지는 네이버 웨일)을 통해 검사를 하면 body 태그 안에 화면을 구성하는 태그들이 있음을 알 수 있다.

이번엔 브라우저 화면을 마우스 우클릭 하여 *페이지 소스보기*를 통해 살펴보자.

![vue-cli-view-source](https://user-images.githubusercontent.com/54297322/75432771-47079d00-5992-11ea-998f-0723778dedfd.png)

위의 화면은 페이지 소스 보기를 통해 본 화면이다. 이미지의 오른쪽 아래 `<div id="app"></div>`부분을 살펴보면 크롬 콘솔로 본 결과와는 다르게 내용이 비어있는 것을 확인할 수 있다.

이처럼 SPA를 이용한 웹은 화면을 미리 그려놓지 않기 때문에 앞서 나열한 장단점을 갖게 되는 것이다. 그렇다면 Nuxt는 어떨까??

---

# ✅ Nuxt를 이용하면..

Nuxt를 이용하여 프로젝트를 만들면 SSR을 사용할 수 있다고 하였다. 또 공식홈페이지를 살펴보면 Nuxt는 SPA 또한 구현이 가능하다. 어떤 명령어를 사용하고 배포해야 이 일이 가능한지 알아보자.

> 명령어와 모드에 따른 차이를 작성하는 것이기 때문에 자세한 설명은 생략한다.

## 1. 프로젝트 생성

일단 Nuxt를 이용한 프로젝트를 생성해보자.

```bash
npx create-nuxt-app <app-name>
```

[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)이라는 오픈 소스를 통해 Nuxt 프로젝트를 만들어보았다. create-nuxt-app은 SSR을 사용할 서버를 선택할 수 있는데 기본 제공되는 Nuxt 프레임워크를 선택했다.

![nuxt-create-project](https://user-images.githubusercontent.com/54297322/75513507-678a3280-5a38-11ea-9750-cef441d23d00.png)

## 2. 모드

Nuxt에는 두 가지 프로젝트 모드를 제공한다.

1. spa
2. universal

위 두 가지 모드를 통해 Nuxt는 SPA와 SSR 그리고 Static Web을 구현할 수 있다. 모드는 프로젝트의 `nuxt.config.js`에서 값을 바꿔줘도 되고 스크립트를 실행할 때 `<명령어> --spa`라는 옵션을 붙여줌으로써도 실행이 가능하다.

![nuxt-create-config](https://user-images.githubusercontent.com/54297322/75513690-eda67900-5a38-11ea-9223-a306f8e43e27.png)

`package.json`을 살펴보면 아래와 같이 기본적인 구성이 되어있고, 앞으로 `spa`와 `universal` 모드를 비교해가며 각 스크립트를 실행해 보겠습니다.

```json
{
  "name": "nuxt-test",
  "version": "1.0.0",
  "description": "My ace Nuxt.js project",
  "author": "khwan",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
  },
  "dependencies": {
    "nuxt": "^2.0.0"
  },
  "devDependencies": {}
}
```

## 3. 명령어

### 3.1. dev

`dev` 명령어는 로컬에서 개발목적으로 Nuxt를 실행시키는 명령어이다.

공식 홈페이지에서는 이렇게 설명하고 있다.

> 개발서버를 핫 리로딩 상태로 localhost:3000에 시작합니다.

#### 3.1.1. 모드 universal

먼저 `universal` 모드로 `dev` 명렁어를 실행해보자.

```json
// package.json
module.exports = {
  mode: "universal",
  ...
}

```

```bash
yarn dev
```

![nuxt-create-dev-universal](https://user-images.githubusercontent.com/54297322/75514071-e59b0900-5a39-11ea-8843-5bcf1acb59d2.png)

`dev` 명렁어를 실행시키기 전과의 차이는 프로젝트에 `.nuxt`라는 폴더가 생겼다는 것이다. `vue-cli`의 `dist`와 같은 역할을 하는 것. 일단 서버가 띄워졌으니 접속해보자. (http://localhost:3000)

![nuxt-create-dev-universal-view](https://user-images.githubusercontent.com/54297322/75513977-b1bfe380-5a39-11ea-9369-4263162b4d7c.png)

![nuxt-create-dev-universal-view-source](https://user-images.githubusercontent.com/54297322/75513982-b2f11080-5a39-11ea-82b7-4a52beeeee48.png)

위 두 이미지를 보면 차이를 알겠지만, 이전 `vue-cli`를 이용했을 때와는 다르게 페이지 소스 보기에도 미리 작성된 코드들이 보이는 것을 알 수 있다.

그렇다면 SSR이 적용되었다는 것을 알 수 있고, 이어서 미리 추가해둔 다른 페이지(http://localhost:3000/sub)도 같은지 확인해보자.

![nuxt-create-dev-universal-view-2](https://user-images.githubusercontent.com/54297322/75435890-05c5bc00-5997-11ea-88fb-8408d739ad46.png)

![nuxt-create-dev-universal-view-source-2](https://user-images.githubusercontent.com/54297322/75435893-078f7f80-5997-11ea-8987-f3ccf51f4e14.png)

다른 route(URL)를 가진 페이지도 마찬가지인 결과를 확인할 수 있다.

#### 3.1.2. 모드 spa

이번엔 `spa` 모드로 `dev` 명령어를 실행해보자.

```json
// package.json
module.exports = {
  mode: "spa",
  ...
}

```

```bash
yarn dev
// 또는
yarn dev --spa
```

![nuxt-create-dev-spa-view](https://user-images.githubusercontent.com/54297322/75514838-ce5d1b00-5a3b-11ea-991b-15e5536741b2.png)

![nuxt-create-dev-spa-view-source](https://user-images.githubusercontent.com/54297322/75514839-cf8e4800-5a3b-11ea-9057-2365a3d89671.png)

`spa` 모드로 실행을 시켰더니, 보여지는 view는 같지만 페이지 소스 보기에서 `universal` 모드와의 차이를 느낄 수 있다.

#### 3.1.3. 정리

프로젝트 모드를 `universal`과 `spa`중 어떤 모드를 선택하느냐에 따라 개발서버를 실행했을 때에 결과가 달랐음을 알 수 있다.

### 4. build & start

`build`와 `start` 명령어는 묶어서 확인해보자. `vue-cli`의 `build`와 같은 역할을 할 텐데 다만 `build`한 결과물을 `start` 명령어로 실행을 시킬 수 있다. production(배포) 용 임을 인지하자.

`build`와 `start` 명령어를 공식홈페이지에서는 이렇게 설명하고 있다.

> 1. build  
>    Webpack을 통해 어플리케이션을 빌드하며, CSS와 JS를 최소화하는 작업을 진행합니다.(프로덕션 용으로)
> 2. start  
>    프로덕션 모드로 서버를 시작합니다.（nuxt build를 실행한 후에）

`build`와 `start` 명령어도 모드 별 차이를 확인해보자.

#### 4.1.1. 모드 universal

```json
// package.json
module.exports = {
  mode: "universal",
  ...
}

```

```bash
yarn build
```

![nuxt-build-universal](https://user-images.githubusercontent.com/54297322/75515567-b71f2d00-5a3d-11ea-9c10-ec22f6190988.png)

`dev` 명렁어를 사용했을 때와는 다르게, `.nuxt`폴더 안에 `dist`폴더가 추가로 생겼다. 해당 파일들을 이용해 서버를 띄운다는 것 정도만 알고 넘어가자. (사실 잘 모른다.) 이어서 `start`를 보자.

```bash
yarn start
```

![nuxt-start-universal](https://user-images.githubusercontent.com/54297322/75516082-eb471d80-5a3e-11ea-8a47-6b8a6c8f97ba.png)

터미널을 보면 `production` 모드로 서버가 올라갔다는 것을 확인할 수 있다.

![nuxt-start-universal-view](https://user-images.githubusercontent.com/54297322/75516225-437e1f80-5a3f-11ea-8c8b-e5b1c89c7f6d.png)

![nuxt-start-universal-view-2](https://user-images.githubusercontent.com/54297322/75516227-4416b600-5a3f-11ea-93c9-c41fc111fb79.png)

위 이미지를 살펴보면 `dev` 명령어를 `universal` 모드로 켰을 때와 비슷하지만, 다른 면이 보인다.
페이지 소스 보기를 보면, html 내용이 보이는 것이 확인된다. 즉 SSR이 되었다는 의미.
그러나 윗부분의 style 코드가 `dev` 모드에 비하면 상당히 압축되어있다. production(배포) 용으로 빌드가 됐기 때문에 js 및 css 관련 코드들이 압축이 된 것이다.

바로 지금 이 상태가 **SSR을 이용해 배포한 상태**입니다.

**SSR은 초기 진입 페이지를 서버에서 불러와 페이지를 렌더링한다. 즉 페이지를 그려주기 위한 서버가 필요하다.**

이전 `vue-cli`를 보면 `build`의 결과물이 정적파일들만 있었고, 그 정적파일을 웹서버(nginx, github pages, netlify, amazon S3 등)에 올려서 접근만 하면 사용이 가능했다. SPA가 배포가 간단한 것은 정제된 정적파일을 올리기만 하면 된다는 점이고, SSR을 하기 위해선 이처럼 화면을 그려줄 서버가 추가로 필요하여서 비용(과정, 난이도, 시간 등)이 더 들게 된다.

그렇다면 SSR을 이용하면 SPA 장점을 잃게 되는 것일까? Nuxt는 초기진입만 서버를 이용하고 그 뒤론 SPA의 흐름을 따른다. 아래의 이미지를 확인해보자.

![nuxt-universal-url](https://user-images.githubusercontent.com/54297322/75517570-56deba00-5a42-11ea-80f1-eba5265f6318.gif)

먼저 URL로 접근을 시도하면 화면이 깜빡거리며 다시 그려지는 것을 콘솔을 통해 확인할 수 있다.

![nuxt-universal-link](https://user-images.githubusercontent.com/54297322/75517786-e4220e80-5a42-11ea-96f5-696e3b723be8.gif)

그러나 초기 진입 이후에 앱 내 링크를 통해 이동하면 바뀐 화면 부분만 렌더링이 되는 것을 확인할 수 있다.

결과적으로 모든 페이지가 SSR이 되는 장점도, 그 이후에는 SPA의 장점 또한 가질 수 있다.

적절한 방법을 선택하는 것이 좋겠다.

#### 4.1.2. 모드 spa

```json
// package.json
module.exports = {
  mode: "spa",
  ...
}

```

```bash
yarn build
// 또는
yarn build --spa
```

![nuxt-build-spa](https://user-images.githubusercontent.com/54297322/75518197-b1c4e100-5a43-11ea-9dcc-88fd939878e3.png)

`universal` 모드와는 다르게, server폴더의 구성이 좀 다른 것이 보인다. 이번에도 `start`를 통해 확인해보자.

```bash
yarn start
// 또는
yarn start --spa
```

> mode를 `spa`로 바꾸지 않았다면 `--spa`옵션을 꼭 붙여주어야 함. 그렇지 않으면 실행이 되지 않는다!

![nuxt-start-spa-view](https://user-images.githubusercontent.com/54297322/75518695-dec5c380-5a44-11ea-9fe5-9e8f3b718ec4.png)

![nuxt-start-spa-view-2](https://user-images.githubusercontent.com/54297322/75518697-dff6f080-5a44-11ea-9498-2f9c2d1b1830.png)

`spa` 모드로 실행이 됐다. `dev` 명렁어를 이용했을 때와 큰 차이는 없어보인다. 다만 프로젝트가 production(배포) 용으로 올라갔을 것이고, 그 차이(코드 압축, 환경설정 변수 등)가 있겠다.

하지만 `spa` 모드를 사용하는데도 `start` 명령어를 이용해서 서버를 켜야한다면, `vue-cli`에 비해 뭐가 나은지 모르겠다. 그 점을 기억하고 마지막 명령어인 `generate`를 확인해보러 가자.

### 5. nuxt generate

`gnerate` 명령어는 앱을 빌드하고 정적파일을 생성한다. 공식홈페이지의 설명을 확인해보도록 하자.

> 어플리케이션을 빌드하고 모든 라우트를 HTML 파일로 생성합니다. (정적 호스팅에 사용됩니다.)

곧바로 모드별 차이를 확인해보면 확실히 알수 있을 것.

#### 5.1.1. 모드 universal

```json
// package.json
module.exports = {
  mode: "universal",
  ...
}
```

```bash
yarn generate
```

![nuxt-generate-universal](https://user-images.githubusercontent.com/54297322/75520518-13d41500-5a49-11ea-9ab5-bd9ec217685e.png)

`generate`한 결과물을 보니 `vue-cli`의 `build` 명령어처럼 `dist` 폴더가 생겼다. 살펴보니 내가 미리 만들어둔 링크(index, main, sub)별로 폴더와 html 파일이 생겼고 해당 html 파일을 열어보면 안에 내용이 차있는 걸 확인할 수 있다. 이 정적 파일들을 웹서버에 올리면 접근할 수 있어진다.

그러나 `build` 했을 때와는 차이가 있다. html에 이미 내용이 그려져 있다는 것이다. 이것을 **Pre-Rendering**이라고 한다. 서버를 띄워놓지 않고 미리 렌더링한 결과를 만들어 놓음으로써 SEO에 유리한 환경을 만들 수 있다.

`spa` 모드도 이어서 확인해보자.

#### 5.1.2. 모드 spa

```json
// package.json
module.exports = {
  mode: "spa",
  ...
}
```

```bash
yarn generate
// 또는
yarn generate --spa
```

![nuxt-generate-spa](https://user-images.githubusercontent.com/54297322/75523964-577e4d00-5a50-11ea-997d-24efd8249f42.png)

`universal` 모드와는 다르게 html에 내용이 채워져있지 않다. SPA의 특징이다. 하지만 dist 폴더를 보면 route 별로 index 파일이 생겨있다.

사실 `build` 명령을 사용할 때 `spa` 모드를 사용하면 `generate` 한 것과 같이 dist가 생기는데, 사실 둘 사이의 차이를 모르겠다. 나중에 알아봐야겠다.

## 4. 요약

| 구분            | SPA                                                       | Universal                                              | Static Web                                                         |
| --------------- | --------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| mode            | spa                                                       | universal                                              | spa<br>universal                                                   |
| 명령어          | nuxt build --spa<br>nuxt generate --spa                   | nuxt build                                             | nuxt generate --spa<br>nuxt generate                               |
| 특징            | Nuxt는 html이 1개가 아니다. 진입점이 다름                 | SSR을 위한 서버가 필요함                               | pre-rendering된 결과를 얻을 수 있음                                |
| 동작            | 최초 view(내용이 빈 html) 접근 후 SPA방법으로 동작        | 최초 진입점을 서버에서 렌더링 후 이후에는 SPA처럼 동작 | 최초 진입점을 미리 렌더링된 페이지로 접근 후 이후에는 SPA처럼 동작 |
| 페이지 소스보기 | 안보임                                                    | 보임                                                   | spa 모드: 안보임<br>universal 모드: 보임                           |
| 서버            | start 명령어를 사용하면 필요<br>정적 파일 호스팅은 불필요 | 필요                                                   | 불필요                                                             |
| SEO             | 불리                                                      | 유리                                                   | spa 모드: 불리<br>universal 모드: 유리                             |

> 위의 서버는 호스팅을 위한 서버를 얘기하는 것이 아니라 SSR을 위한 서버를 의미합니다

- 모든 페이지가 SEO에 유리해야 하는 쇼핑몰, 블로그, SNS, 게시판과 같은 서비스라면 universal 모드로 build & start를 이용하면 될 것이다.
- 일부 페이지만 SEO가 필요하다거나 또는 프로모션, 기업소개 홈페이지 등 페이지 수가 적당한 경우에는 generate로 pre-rendering을 이용하는 게 좋겠다.
- 내부용 서비스, 로그인이 필수로 필요한 경우, SEO가 필요없는 경우에는 SPA를 이용하면 되겠다. 단, Nuxt의 SPA는 라우트별로 html이 생기기 때문에 vue-cli를 사용하는게 더 적절할 수 있기 때문에 잘 고려해서 쓰자.

---

# 📑 정리

Nuxt의 명령어를 하나씩 살펴보며 알아보았다. 나는 단순히 SPA와 SSR의 차이만 알고 있었을 뿐, 실제로 Nuxt가 어떤 방식을 제공하고 있는지는 몰랐다.
Pre-Rendering이란 뭔지, SSR에 서버가 필요할 때는 언제인지, SPA는 언제 사용하면 좋을지에 대해서 잘 이해하고 있어야 한다.
그래야 구현하려는 서비스의 특징에 맞게 적절한 방법을 고를 수 있겠다.
