---
title: 'Level 1 연습문제 - 프로그래머스 코딩테스트 연습'
date: 2019-12-14 14:50:00
summary: 코딩테스트 연습 > 연습문제 Level1 문제들 정리
tags: ['알고리즘', '코딩테스트']
---

*Last Update: 2019-12-14*

프로그래머스의 Level1 문제들중 `연습문제`라는 카테고리의 문제들은 다른 문제들에 비해 쉬운 편이니 여러 글을 나눠 쓰지 않고 이번 글에 쭉 적어 볼 생각이다. 못 푼건 물론 안적음.

## 2016년

<details>
  <summary>문제 보기</summary>

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN, MON, TUE, WED, THU, FRI, SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

### 제한 조건

* 2016년은 윤년입니다.
* 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

### 입출력 예

a | b | result
--- | --- | ---
5 | 24 | TUE

</details>

### 풀이

```javascript

function solution(a, b) {
  var answer = '';
  var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  answer = days[new Date(2016, a - 1, b).getDay()];
  
  return answer;
}
```

제한 조건에 윤년이라는 조건때문에 혼란스러울 뻔 했으나, 그냥 구하면 됨.

---------

## 가운데 글자 가져오기

<details>
  <summary>문제 보기</summary>

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 제한사항

* s는 길이가 1 이상, 100이하인 스트링입니다.

### 입출력 예

s | return
--- | ---
abcde | c
qwer | we

</details>

### 풀이

```javascript

function solution(s) {
  var answer = '';
  var length = s.length;
  
  answer = s.substr(Math.ceil(length / 2) - 1, length % 2 === 0 ? 2 : 1);
  
  return answer;
}
```

---------