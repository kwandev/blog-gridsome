---
title: Nuxt에서 svg-sprite-loader 사용하기
date: 2020-05-31 23:11:11
summary: Nuxt에서 기본 내장된 loader가 아닌 다른 svg-loader를 사용할 때 설정을 해보자
tags: ['Vue', 'Nuxt', '']
---

최근 회사에서 Nuxt를 사용할 일이 있었는데, Nuxt에 기본 내장된 loader가 아닌 다른 loader를 선택해서 사용할때 겪었던 문제를 기록해두려한다.

## 문제

- create-nuxt-app을 이용해서 앱을 만들면 내장된 url-loader에 svg loader가 내장되어있다.
- 새로운 svg loader를 추가하면 기존 loader와 충돌해서 작동하지 않는다.

## 해결

- 기존 loader를 제거하고
- 새로운 loader를 추가하자

## nuxt.config.js

Nuxt의 설정파일에서 아래와 같이 설정해 주면 된다. 코드는 어렵지 않기 때문에 보면서 이해할 수 있을 것 같다.

```javascript
build: {
  extend (config, ctx) {
    // svg를 사용중인 loader를 찾고 삭제
    const rule = config.module.rules.find(r => r.test.toString().indexOf('svg') !== -1)
    config.module.rules.splice(config.module.rules.indexOf(rule), 1)

    // 삭제한 loader에서 svg만 빼주고 다시 기본 laoder 추가
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[path][name].[ext]'
          }
        }
      ]
    })

    // 새로운 svg-loader 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            ...someOptions'
          }
        }
      ]
    })
  }
}
```

더 좋은 방법이 있으면 댓글로 알려주세요~
