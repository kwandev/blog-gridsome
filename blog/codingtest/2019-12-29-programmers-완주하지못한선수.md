---
title: '[Level 1] 완주하지 못한 선수 - 프로그래머스 코딩테스트 연습'
date: 2019-12-29 14:54:00
summary: 코딩테스트 연습 > 해시 > 완주하지 못한 선수
tags: ['알고리즘', '코딩테스트', '프로그래머스']
---

[완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576) 문제 풀이

## 문제

<details>
  <summary>문제 열어보기</summary>

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

* 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
* completion의 길이는 participant의 길이보다 1 작습니다.
* 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
* 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

participant | completion | return
--- | --- | ---
[leo, kiki, eden] | [eden, kiki] | leo
[marina, josipa, nikola, vinko, filipa] | [josipa, filipa, marina, nikola] | vinko
[mislav, stanko, mislav, ana] | [stanko, ana, mislav] | mislav

### 입출력 예 설명

* 예제 #1  
  leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
* 예제 #2  
  vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
* 예제 #3  
  mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

</details>

------

## 풀이

```javascript
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

참여자와 완주자를 정렬한 뒤에 두 값이 서로 다른 때의 참여자가 완주하지 못 한 선수가 된다.

문제 풀이는 간단한데 프로그래머스에서 이 문제의 주제를 정렬이 아닌 해시로 해놓은 이유가 뭘까 생각해봤다. 참여자의 배열을 키로 가진 오브젝트를 만들고 그 오브젝트를 완주자 명단과 비교해가며 푸는게 주제가 아닐까? 하는 생각을 했지만 아무리 생각해도 정렬을 이용해 푸는게 더 간단한 방법인 것 같다.
