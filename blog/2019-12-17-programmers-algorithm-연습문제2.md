---
title: 'Level 1 연습문제 (2) - 프로그래머스 코딩테스트 연습'
date: 2019-12-17 22:13:00
summary: 코딩테스트 연습 > 연습문제 Level1 문제들 정리
tags: ['알고리즘', '코딩테스트']
---

*Last Update: 2019-12-17*

1. [Level 1 연습문제 (1)](/blog/2019-12-14-programmers-algorithm-1)
2. Level 1 연습문제 (2)

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


