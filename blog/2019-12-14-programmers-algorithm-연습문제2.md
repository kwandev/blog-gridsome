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

