---
title: 'CyclicRotation - 코딜리티 Lesson 2'
date: 2020-02-01 19:21:00
summary: 코딜리티 Lesson 2 코딩테스트 연습, CyclicRotation 문제
tags: ['알고리즘', '코딩테스트', '코딜리티']
---

## 문제출처

[코딜리티 CyclicRotation 문제 바로가기](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)

## 문제요약

정수 `N`으로 이루어진 배열 `A`가 주어진다. 이 때 'K`만큼 회전했을 때 배열을 구하라.

예를 들어, `A = [3, 8, 9, 7, 6]`, `K = 3`일 경우, `[9, 7, 6, 3, 8]`을 리턴하면 된다.

------

## 풀이

```javascript
function solution(A, K) {
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}
```

위 처럼 풀었더니 87%가 나왔다. 결과를 보니 빈 배열이 들어왔을 때에 문제가 됐다. 그래서 빈 배열일 때의 조건을 추가해 주었다.

```javascript
function solution(A, K) {
  if (A.length < 1) return;

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}
```

이렇게 푸니 100%가 나왔습니다. 내가 푼 방법 말고 다른 분들의 풀이도 같이 적어놔야겠다. 역시 나는 수학적인 사고를 하는 능력이 부족한게 아닌가 싶다.

아래는 다른 분들의 풀이를 참고한 코드입니다.

```javascript
function solution(A, K) {
  const length = A.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    const target = (i + K) % length;
    result[target] = A[i];
  }

  return result;
}
```
