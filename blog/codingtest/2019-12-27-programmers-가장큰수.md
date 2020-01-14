---
title: '[Level 2] 가장 큰 수 - 프로그래머스 코딩테스트 연습'
date: 2019-12-27 18:10:00
summary: 코딩테스트 연습 > 정렬 > 가장 큰 수
tags: ['알고리즘', '코딩테스트', '프로그래머스']
---

[가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746) 문제 풀이

## 문제

<details>
  <summary>문제 열어보기</summary>

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

### 제한사항

* numbers의 길이는 1 이상 100,000 이하입니다.
* numbers의 원소는 0 이상 1,000 이하입니다.
* 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

### 입출력 예

numbers | return
--- | ---
[6, 10, 2] | 6210
[3, 30, 34, 5, 9] | 9534330

</details>

------

## 풀이

```javascript
function solution(numbers) {
  var sortNumbers = numbers.sort(sorted);
  var answer = '';
  
  for (var i = 0; i < sortNumbers.length; i++) {
    if (answer === '0') {
        continue;
    }
    
    answer += sortNumbers[i];
  }
  
  return answer;
}

function sorted (a, b) {
  var caseA = '' + a + b;
  var caseB = '' + b + a;
  
  if (caseA > caseB) {
    return -1;
  }
  return 1;
}
```

처음엔 단순히 내림차순 정렬을 한 뒤 각 수를 문자열로 이어붙이면 되는줄 알았지만, [6, 1]을 비교했을땐 61 이 16보다 큰 수이기 때문에 가능하다. 하지만 [6, 10]일 경우에는 106보다 610이 크게된다. 즉 십의 자리, 백의 자리 수가 생길수록 단순한 내림차순 정렬로는 구분을 할 수 없게된다.

각각의 두 수를 앞 뒤로 이어 붙여 비교한 뒤, 더 큰 수를 기준으로 정렬하면 해결이 가능하다.
