---
title: 'Level 1 연습문제 (2) - 프로그래머스 코딩테스트 연습'
date: 2019-12-17 22:13:00
summary: 코딩테스트 연습 > 연습문제 Level1 문제들 정리
tags: ['알고리즘', '코딩테스트', '프로그래머스']
---

*Last Update: 2019-12-22*

1. [Level 1 연습문제 (1) 바로가기](/blog/codingtest/2019-12-14-programmers-algorithm-1)
2. Level 1 연습문제 (2)
3. [Level 1 연습문제 (3) 바로가기](/blog/codingtest/2019-12-20-programmers-algorithm-3)

프로그래머스의 Level1 문제들중 `연습문제`라는 카테고리의 문제들은 다른 문제들에 비해 쉬운 편이니 여러 글을 나눠 쓰지 않고 이번 글에 쭉 적어 볼 생각이다. 못 푼건 물론 안적음.

## 수박수박수박수박수박수?

<details>
  <summary>문제 보기</summary>

길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.  
예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

### 제한 조건

* n은 길이 10,000이하인 자연수입니다.

### 입출력 예

n | return
--- | ---
3 | 수박수
4 | 수박수박

</details>

### 풀이

```javascript
function solution(n) {
    var answer = '수박'.repeat(n);
    answer = answer.substr(0, answer.length / 2);
    return answer;
}
```

---------

## 문자열을 정수로 바꾸기

<details>
  <summary>문제 보기</summary>

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

### 제한 조건

* s의 길이는 1 이상 5이하입니다.
* s의 맨앞에는 부호(+, -)가 올 수 있습니다.
* s는 부호와 숫자로만 이루어져있습니다.
* s는 0으로 시작하지 않습니다.

### 입출력 예

예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

</details>

### 풀이

```javascript
function solution(s) {
    // return +s;
    // return s / 1;
    // return s * 1;
    return parseInt(s);
}
```

주석친 연산를 통해 정수형을 바꿀 수도 있겠지만, parseInt로 사용하는 것이 더 명확한 것 같아서 parseInt를 사용한다.

---------

## 시저 암호

<details>
  <summary>문제 보기</summary>

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

* 공백은 아무리 밀어도 공백입니다.
* s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
* s의 길이는 8000이하입니다.
* n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

s | n | result
--- | --- | ---
"AB" | 1 | "BC"
"z" | 1 | "a"
"a B z" | 4 | "e F d"

</details>

### 풀이

```javascript
function solution(s, n) {
    var answer = s.split('').map(item => {
        if (item === ' ') {
            return item;
        }
        
        var charCode = item.charCodeAt();
        var result = charCode + n;
        
        if (
            (charCode <= 90 && result > 90) ||
            (charCode >= 97 && result > 122)
        ) {
            result -= 26;
        }
        
        return String.fromCharCode(result);
        
    }).join('');
    
    return answer;
}
```

charCode를 n만큼 증가시키면 된다. 다만 z는 a로 Z는 A로 돌아가야 하기 때문에 if문을 이용해 변할 charCode와 결과값을 비교해 알파뱃 개수인 26만큼 빼주는 로직을 추가해 주었다. charCode를 다시 문자로 치환하는 함수는 String의 메소드인 fromCharCode이다. 외워두도록 해야겠다.

---------

## 약수의 합

<details>
  <summary>문제 보기</summary>

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

* n은 0 이상 3000이하인 정수입니다.

### 입출력 예

n | return
--- | ---
12 | 28
5 | 6

### 입출력 예 설명

* 입출력 예 #1  
  12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
* 입출력 예 #2  
  5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

</details>

### 풀이

```javascript
function solution(n) {
    var answer = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}
```

n을 1부터 나누어 나머지가 0인 수 = 약수를 찾아 더해준다.

---------

## 이상한 문자 만들기

<details>
  <summary>문제 보기</summary>

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

### 제한 조건

* 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
* 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

### 입출력 예

s | return
--- | ---
"try hello world" | "TrY HeLlO WoRlD"

### 입출력 예 설명

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

</details>

### 풀이

```javascript
function solution(s) {
    return s.split(' ').map(word => {
        return word.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}
```

---------

## 자릿수 더하기

<details>
  <summary>문제 보기</summary>

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.  
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

### 제한 조건

* N의 범위 : 100,000,000 이하의 자연수

### 입출력 예

N | answer
--- | ---
123 | 6
987 | 24

### 입출력 예 설명

* 입출력 예 #1  
  문제의 예시와 같습니다.
* 입출력 예 #2  
  9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
</details>

### 풀이

```javascript
function solution(n) {
    return ('' + n).split('').reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0);
}
```

처음엔 위처럼 문자로 치환해서 한 글자씩 더해주는 풀이를 했는데 아래와 같은 방법도 있다고 해서 적어둔다. 무조건 문자로 쪼개서 푸는 것보단 수학적인 접근을 하는 방법을 항상 생각해야겠다.

```javascript
function solution(n) {
    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10)
    }
    return sum;
}
```

---------

## 자연수 뒤집어 배열로 만들기

<details>
  <summary>문제 보기</summary>

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

### 제한 조건

* n은 10,000,000,000이하인 자연수입니다.

### 입출력 예

n | return
--- | ---
12345 | [5,4,3,2,1]
</details>

### 풀이

```javascript
function solution(n) {
    return ('' + n).split('').reverse().map(item => +item);
}
```

설명이 딱히 필요없을만큼 간단한다. 다른 방법이 있다면, 바로 전 "자릿수 더하기"문제에서 처럼 1의 자리수를 구해 새로운 배열에 push해주는 방법 또한 있을 것 같다.

---------

## 정수 내림차순으로 배치하기

<details>
  <summary>문제 보기</summary>

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

### 제한 조건

* n은 1이상 8000000000 이하인 자연수입니다.

### 입출력 예

n | return
--- | ---
118372 | 873211

</details>

### 풀이

```javascript
function solution(n) {
    return parseInt(('' + n).split('').sort((a, b) => b - a).join(''));
}
```

문자열 치환 > 배열 > 내림차순 정렬 > 문자열 합치기 > 정수형 치환

---------

## 정수 제곱근 판별

<details>
  <summary>문제 보기</summary>

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.  
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

### 제한 조건

* n은 1이상, 50000000000000 이하인 양의 정수입니다.

### 입출력 예

n | return
--- | ---
121 | 144
3 | -1

### 입출력 예 설명

* 입출력 예#1  
  121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
* 입출력 예#2  
  3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

</details>

### 풀이

```javascript
function solution(n) {
  var sqrt = Math.sqrt(n);
  
  if (sqrt === parseInt(sqrt)) {
      return (sqrt + 1) ** 2;
  }
  
  return -1;
}
```

주어진 수의 제곱근이 양의 정수 x와 같으면 되기 때문에 간단하게 해결 가능하다.
`sqrt ** 2 === n` 으로도 비교가 가능하다.

---------

## 문자열 내 마음대로 정렬하기

<details>
  <summary>문제 보기</summary>

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

### 제한 조건

* strings는 길이 1 이상, 50이하인 배열입니다.
* strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
* strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
* 모든 strings의 원소의 길이는 n보다 큽니다.
* 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

### 입출력 예

strings | n | return
--- | ---
["sun", "bed", "car"] | 1 | ["car", "bed", "sun"]
["abce", "abcd", "cdx"] | 2 | ["abcd", "abce", "cdx"]

### 입출력 예 설명

* 입출력 예 1  
  "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.
* 입출력 예 2  
  "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

</details>

### 풀이

```javascript
function solution(strings, n) {
  var answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }

    return a[n].localeCompare(b[n]);
  });
  
  return answer;
}
```

인덱스 값으로 정렬하라는 말을 처음엔 이해하지 못했는데, 뜻을 알고나니 간단했다. *입출력 예 1*을 기준으로 설명하면, u, e, a 를 기준으로 정렬하면 알파벳 순서대로 a, e, u가 되니 각 인덱스 값이 a, e, u인 car, bed, sun 순서가 되는 것이다.

추가 제한 조건으로는 인덱스 값이 같을 경우는 인덱스 값 순서가 아닌 사전 순 정렬을 하게 되면 된다.

`localeCompare`는 문자열을 비교하는 함수이다. 사전순으로 비교하기 때문에 문제에 아주 적합한 함수이다.

```javascript
'a'.localeCompare('a') // 0
'A'.localeCompare('B') // -1
'B'.localeCompare('A') // 1

```


---------
