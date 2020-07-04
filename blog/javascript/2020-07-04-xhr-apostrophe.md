---
title: Axios Header에 특수문자가 있을경우 에러처리
date: 2020-07-04 15:00:00
summary: axios를 사용할 때 아퍼스트로피(apostrophe)가 포함되어 있을 경우 에러처리를 어떻게 해야할까
tags: ["JavaScript", "axios"]
---

# 👀 원인

axios를 이용해서 API 통신을 하던 도중, 전혀 통신이 되지 않거나 에러가 나는 경우를 발견했다.

문제는 axios header에 정보를 넘길 때, 의도치않게 특수문자 아퍼스트로피(’)가 포함되어 있을 경우 에러나 응답이 통신이 안되는 문제.

> 아퍼스트로피 (’)와 홑따옴표 (')는 다르다

# 예시

## 😁 기대하던 상황

```javascript

axios.defaults.headers.common['header-sample'] = 'header-sample'

axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res => {
    
}).catch(error => {

})
```

![sucess](https://user-images.githubusercontent.com/54297322/86505822-51d0b380-be04-11ea-8b7f-b4aa8dab8ce0.PNG)

위 이미지처럼 헤더 샘플이 들어가 있는 상황을 기대 했다.

## 😢 실패한 상황

```javascript

axios.defaults.headers.common['header-sample'] = 'hea’der-sample'

axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res => {
    
}).catch(error => {

})
```

![fail](https://user-images.githubusercontent.com/54297322/86505823-539a7700-be04-11ea-9b5b-698c63ebae6b.PNG)

아퍼스트로피가 포함되면 위 이미지처럼 아예 통신 자체가 안되는 경우도 있거나 에러가 나는 경우가 생길 수 있다.

# ✅ 해결방법

웹사이트를 여기저기 검색해본 결과, 해당 문제는

- 반드시 header에 사용했을 때 일어나는 문제가 아님
- 아퍼스트로피라는 특수문자만의 문제는 아님. 다른 특수문자도 에러가 생길 수 있음

특수문자로 인해 나타나는 에러는 개발을 하다보면 흔히 겪는 문제이며, axios만의 문제가 아니라 xhr을 이용하다보면 언제든지 겪을수 있는 문제다.

가장 간단한 해법은 해당 특수문자를 다른 문자로 replace해주는 방법이다.

```javascript
let header = 'hea’der-sample'
header = header.replace('’', 'other')

axios.defaults.headers.common['header-sample'] = header

axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
  
}).catch(error => {

})
```

![sucess2](https://user-images.githubusercontent.com/54297322/86505902-0965c580-be05-11ea-8080-9ffe9a774d11.PNG)

위 이미지처럼 다른 문자로 치환해서 사용하면 간단하게 해결이 가능하며, 다른 기타 방법으로는

`encodeURIComponent`를 이용해서 문자를 이스케이프 하는 방법이 있다. 사실 둘다 같은 맥락.

> 참고

> [https://stackoverflow.com/questions/18251399/why-doesnt-encodeuricomponent-encode-single-quotes-apostrophes](https://stackoverflow.com/questions/18251399/why-doesnt-encodeuricomponent-encode-single-quotes-apostrophes)
