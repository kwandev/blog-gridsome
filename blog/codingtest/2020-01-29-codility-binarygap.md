---
title: 'Binary Gap - 코딜리티 Lesson 1'
date: 2020-01-29 18:52:33
summary: 코딜리티 Lesson1 코딩테스트 연습, Binary Gap 문제
tags: ['알고리즘', '코딩테스트', '코딜리티']
---

## 문제출처

[코딜리티 바로가기](https://app.codility.com/programmers/lessons/1-iterations/binary_gap/)

## 문제요약

주어진 양수 `N`을 이진표현으로 봤을 때, 가장 긴 이진간격을 구하라.

이진 간격이란, 양쪽이 `1`로 둘러쌓인 `0`의 길이를 말한다.

예를 들어, `N = 1041` 이라면 `10000010001` 이므로 `1`로 감싸진 `00000`과 `0000`중 가장 긴 수는 `00000`이므로 `5`가 반환되어야 한다.

`N = 32` 이라면, `100000` 이므로 `1`로 감싸진 수가 없기 때문에 `0`을 반환해야한다.

------

## 풀이

```javascript
function solution(N) {
  const binary = N.toString(2);
  const zeroArray = binary.split('1');
  let result = 0;

  for (let i = 0; i < zeroArray.length; i++) {
    const prev = zeroArray[i - 1] !== undefined;
    const next = zeroArray[i + 1] !== undefined;
    const current = zeroArray[i].indexOf('0') > -1;
    if (prev && current && next) {
      const thisLength = zeroArray[i].length;
      result = thisLength > result ? thisLength : result;
    }
  }

  return result;
}
```

처음 풀은 방법이다.
일단 이진수로 변환한 다음, 1로 스플릿하고 이전, 다음, 현재 요소를 각각 비교하여 풀었다.  
이렇게 하니 일단 답과 퍼포먼스 부분에서 100점을 받을수는 있었지만 뭔가 조잡한 느낌이 들어서 검색을 통해 다른 사람들의 풀이를 참고하여 아래와 같이 다시 한 번 풀어봤다.

```javascript
function solution(N) {
  const binary = N.toString(2);
  const gap = binary.substr(0, binary.lastIndexOf('1') + 1);
  const zeroArray = gap.split('1');
  
  let result = 0;
  for (let i = 0; i < zeroArray.length; i++) {
    result = Math.max(result, zeroArray[i].length);
  }

  // 이렇게도 가능
  // result = Math.max.apply(null, zeroArray.map(item => item.length));
  
  return result;
}
```

스플릿을 하기 전에 이진 스트링에서 미리 마지막 1을 구해서 문자열을 구해놓으면 처음 풀었던 것과 같이 일일히 전과 다음 요소를 비교해가며 순회할 필요가 없다.  
훨씬 깔끔하고 오히려 이해가 쉽다. 100점이라고 넘어가지 말고 더 나은 방법이 있나 항상 고민해보자.

주석친 부분과 같이 코드를 줄일 수도 있겠다.
