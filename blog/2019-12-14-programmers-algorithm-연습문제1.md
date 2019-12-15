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

## 같은 숫자는 싫어

<details>
  <summary>문제 보기</summary>

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

* arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
* arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

### 제한사항

* 배열 arr의 크기 : 1,000,000 이하의 자연수
* 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

### 입출력 예

arr | answer
--- | ---
[1,1,3,3,0,1,1] | [1,3,0,1]
[4,4,4,3,3] | [4,3]

</details>

### 풀이

```javascript
function solution(arr) {
  var answer = arr.filter((item, index) => {
      return item !== arr[index + 1]
  });
  
  return answer;
}
```

연속된 숫자만 제거하면 되므로, 다음 요소만 비교해나가면 됨

---------

## 나누어 떨어지는 숫자 배열

<details>
  <summary>문제 보기</summary>

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.  
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

### 제한사항

* arr은 자연수를 담은 배열입니다.
* 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
* divisor는 자연수입니다.
* array는 길이 1 이상인 배열입니다.

### 입출력 예

arr | divisor | return
--- | --- | ---
[5, 9, 7, 10] | 5 | [5, 10]
[2, 36, 1, 3] | 1 | [1, 2, 3, 36]
[3, 2, 6] | 10 | [-1]

### 입출력 예 설명

* 입출력 예#1  
  arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
* 입출력 예#2  
  arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
* 입출력 예#3  
  3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

</details>

### 풀이

```javascript
function solution(arr, divisor) {
    var divisorArray = arr.filter(item => item % divisor === 0);
    
    if (divisorArray.length > 0) {
        return divisorArray.sort((a, b) => a - b);
    }

    return [-1];
}
```

숫자정렬이 크기대로 이루어지지 않는다는 것만 유의하면 어렵지 않게 풀 수 있음.

---------

