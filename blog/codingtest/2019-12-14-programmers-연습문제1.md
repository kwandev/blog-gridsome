---
title: 'Level 1 연습문제 (1) - 프로그래머스 코딩테스트 연습'
date: 2019-12-14 14:50:00
summary: 코딩테스트 연습 > 연습문제 Level1 문제들 정리
tags: ['알고리즘', '코딩테스트', '프로그래머스']
---

*Last Update: 2019-12-17*

1. Level 1 연습문제 (1)
2. [Level 1 연습문제 (2) 바로가기](/blog/codingtest/2019-12-17-programmers-algorithm-2)
3. [Level 1 연습문제 (3) 바로가기](/blog/codingtest/2019-12-20-programmers-algorithm-3)

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

## 두 정수 사이의 합

<details>
  <summary>문제 보기</summary>

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

### 제한사항

* a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
* a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
* a와 b의 대소관계는 정해져있지 않습니다.

### 입출력 예

a | b | return
--- | --- | ---
3 | 5 | 12
3 | 3 | 3
5 | 3 | 12

</details>

### 풀이

```javascript
function solution(a, b) {
    var start = a > b ? b : a;
    var end = a > b ? a : b;
    
    return (start + end) * (end - start + 1) / 2;
}
```

처음에는 reduce 함수를 이용해 반복하려 했으나, 제한조건을 보면 -천만 ~ 천만 까지의 큰 수이기 때문에 굉장히 비효율적이라고 생각하며 못풀고 있었다. 찾아보니 가우스가 등차수열의 합을 구한 식이 있다고 한다. 두 수의 합과 두수의 차 + 1 을 곱한 뒤 2로 나누면 된다고 한다.

---------

## 문자열 내 p와 y의 개수

<details>
  <summary>문제 보기</summary>

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

### 제한사항

* 문자열 s의 길이 : 50 이하의 자연수
* 문자열 s는 알파벳으로만 이루어져 있습니다.

### 입출력 예

s | answer
--- | ---
pPoooyY | true
Pyy | false

### 입출력 예 설명

* 입출력 예 #1  
  'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
* 입출력 예 #2  
  'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

</details>

### 풀이

```javascript
function solution(s){
  var stringArr = s.split('');
  var p = stringArr.filter(item => ['p', 'P'].includes(item));
  var y = stringArr.filter(item => ['y', 'Y'].includes(item));

  return p.length === y.length;
}
```

처음엔 위처럼 풀었으나, 다른 사람의 풀이를 보니 훨씬 간단한 방법이 있어 그 답변도 적는다. 정규식은 확실히 알아둘수록 개발할 때 도움이 많이 될 것 같다.

```javascript
function solution(s){
  var p = s.match(/p/gi) || [];
  var y = s.match(/y/gi) || [];

  return p.length === y.length;
}
```

`match` 함수는 값이 없을경우 `null`을 반환하기 때문에 빈 배열을 기본값으로 추가해두었음.

---------


## 문자열 내림차순으로 배치하기

<details>
  <summary>문제 보기</summary>

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.  
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한사항

* str은 길이 1 이상인 문자열입니다.

### 입출력 예

s | return
--- | ---
Zbcdefg | gfedcbZ

</details>

### 풀이

```javascript
function solution(s) {
    return s.split('').sort().reverse().join('');
}
```

문자 sort시에는 대문자 -> 소문자순의 오름차순 정렬이니 이를 뒤집어주면 되겠다.

---------


## 문자열 다루기 기본

<details>
  <summary>문제 보기</summary>

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

### 제한사항

* `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

### 입출력 예

s | return
--- | ---
"a234" | false
"1234" | true

</details>

### 풀이

```javascript
function solution(s) {
    return [4, 6].includes((parseInt(s) + '').length)
}
```

위처럼 풀면, 문자가 껴있는 경우 `paserInt`시에 `NaN`이 나올것이고 `NaN`은 문자열로 치환하고 길이를 구해도 3이기 때문에 문제는 해결된다. 하지만 조금 더 명확하게 처리를 하려면 `parseInt` 전에 `isNaN` 함수나 정규식을 이용해 숫자인지 여부를 체크하는 방법도 있겠다.

---------

## 서울에서 김서방 찾기

<details>
  <summary>문제 보기</summary>

String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### 제한사항

* seoul은 길이 1 이상, 1000 이하인 배열입니다.
* seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
* Kim은 반드시 seoul 안에 포함되어 있습니다.

### 입출력 예

seoul | return
--- | ---
["Jane", "Kim"] | "김서방은 1에 있다"

</details>

### 풀이

```javascript
function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}
```

---------


## 소수찾기

<details>
  <summary>문제 보기</summary>

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.  
(1은 소수가 아닙니다.)

### 제한사항

* n은 2이상 1000000이하의 자연수입니다.

### 입출력 예

n | result
--- | ---
10 | 4
5 | 3

### 입출력 예 설명

* 입출력 예 #1  
  1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
* 입출력 예 #2  
  1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
</details>

### 풀이

```javascript
function solution(n) {
  // true인 값은 소수라고 가정, 0번 index를 정수 0이라고 생각하고 풀기 위해 n + 1개 만큼 배열 생성
  let arr = Array(n + 1).fill(true);
  
  // 이미 소수라고 가정했으니 제곱부터 로직을 시작함
  for (let i = 2; i ** 2 <= n; i++) {
    if (arr[i]) {
      // 해당 수의 배수는 모두 소수가 아님으로 false 처리
      for (let j = i ** 2; j <= n; j += i) {
          arr[j] = false;
      }
    }
  }
  
  // 0과 1은 제외
  arr = arr.slice(2).filter(item => item);
  
  return arr.length;
}
```

해당 문제는 무식하게 일일히 계산하여 풀려고 했으나 테스트는 통과해도 채점에서 실패가 됐다. 일일히 계산을 하다보니 자연스레 성능부분에서 탈락이 됐는데, 인터넷을 찾아보니 소수를 구하는 식 중에서 에라토스테네스의 체라는 식을 발견했고, 그 식을 적용하고 풀 수 있었다. 에라토스테네스의 체는 자기 자신을 제외한 배수의 값을 제외해 나간다는 점이 핵심이다.

level 1 문제들 중에선 가장 어려운 편에 속하지 않았나싶다.

#### 참고
* [위키백과](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)
* [https://junkim.netlify.com/posts/programmers0807](https://junkim.netlify.com/posts/programmers0807)
---------

