---
title: '[Level 1] 체육복 - 프로그래머스 코딩테스트 연습'
date: 2019-12-13 14:31:00
summary: 코딩테스트 연습 > 탐욕법(Greedy) > 체육복
tags: ['알고리즘', '코딩테스트']
---

[체육복](https://programmers.co.kr/learn/courses/30/lessons/42862) 문제 풀이

## 문제

<details>
  <summary>문제 열어보기</summary>

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

* 전체 학생의 수는 2명 이상 30명 이하입니다.
* 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
* 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
* 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
* 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

### 입출력 예

n | lost | reserve | return
--- | --- | --- | ---
5 | [2, 4] | [1, 3, 5] | 5
5 | [2, 4] | [3] | 4
3 | [3] | [1] | 2
5 | [2, 4] | [2] | 4

### 입출력 예 설명

#### 입출력 예 #1

1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

#### 입출력 예 #2

3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

#### 입출력 예 #3

생략

#### 입출력 예 #4

`khwan 추가 테스트 케이스`
체육복을 잃어버린 학생이 여분을 갖고있는 케이스가 있으므로 테스트 케이스를 추가해주었습니다.  
2번학생이 잃어버렸지만 여분 또한 가지고 있으므로 4번 학생만 체육복이 없는 결과를 갖고, 총 4명만 수업을 들을 수 있습니다.

</details>

------

## 풀이

```javascript
// javascript

function solution(n, lost, reserve) {
  // 수업이 가능한 학생 = 전체학생수 - 잃어버린 학생
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 잃어버린 사람이 여분을 갖고 있는 경우
      if (lost[i] === reserve[j]) {
        // 각각 배열에서 제외
        lost.splice(i, 1);
        reserve.splice(j, 1);
        // 수업 가능한 학생 수 증가
        answer++;
        // 배열을 삭제해줬기 때문에 로직을 검증없이 넘어가는 index가 있을 수 있으므로 i를 빼줌
        i--;
        break;
      }
    };
  }

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 잃어버린 학생의 앞, 뒷번호의 학생이 여분을 갖고 있다면
      if (lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
        // 각각 배열에서 제외
        lost.splice(i, 1);
        reserve.splice(j, 1);
        // 수업 가능한 학생 수 증가
        answer++;
        // 배열을 삭제해줬기 때문에 검증없이 넘어가는 index가 있을 수 있으므로 i를 빼줌
        i--;
        break;
      }
    }
  }

  return answer;
}
```

위 처럼 문제를 풀었는데, 다른 사람들의 풀이를 보고 반성하게 됐다. 다른 사람의 풀이 중 가장 짧은 풀이와, 내가 보기에 가장 이해가 쉬운 풀이를 첨부해본다. 참고하면서 공부를 많이 해야겠다.

## 다른 사람의 풀이

### 가장 짧은 코드

```javascript
function solution(n, lost, reserve) {      
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r-a) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}
```

### 내 기준 가장 이해가 쉬운 코드
```javascript
function solution(n, lost, reserve) {
    var answer = new Array(n).fill(1);

    lost.forEach(val => answer[val - 1]--);
    reserve.forEach(val => answer[val - 1]++);

    for(let i = 0; i < answer.length; i++) {
        var clothLength = answer[i];

        if(clothLength === 2) {
            if(answer[i + 1] === 0 || answer[i - 1] === 0) {
                answer[i]--;
                answer[i + ( answer[i + 1] === 0 ? 1 : -1 ) ]++;
            };
        };
    };

    return answer.filter(x => x >= 1).length;
}
```