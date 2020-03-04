---
title: JavaScript로 구현해보는 큐(Queue), 스택(Stack)
date: 2020-03-03 13:05:23
summary: JavaScript로 가장 기본적인 자료구조형인 큐(Queue)와 스택(Stack)을 구현해보자
tags: ['JavaScript', '자료구조', '알고리즘']
---

지난 면접 중 한 번은 큐와 스택을 화이트보드에 간단하게 구현해보라는 시간이 있었다.
평소에 전혀 신경을 쓰지도 않고 가볍게 넘어가던 부분이었어서 인지 얼추 코딩은 했지만 아쉬운 부분이 남아 다시 정리해본다.

큐와 스택은 가장 기본적인 자료구조형이면서 선형(linear)자료구조이다. 자바스크립트는 다른 언어와는 다르게 Array로 구현이 충분하기 때문에 각각 구현해보자.

자바스크립트의 class를 실무에서 사용해보질 않았는데 이런 때에라도 써봐야겠다.

## 큐 (Queue)

큐는 먼저 집어넣은 데이터가 먼저 나오는 선형자료구조이다. 이 특징을 줄여서 \**FIFO(First In First Out)*라고 부른다.

- 데이터를 집어넣는 **enqueue**
- 데이터를 추출하는 **dequeue**
- 현재 데이터의 길이 **length**
- 다음에 나올 데이터를 확인하는 **peek**
- 현재 큐가 비어있는지를 확인하는 **isEmpty**
- 현재 큐를 초기화하는 **clear**

위 6가지 정도 기능만 구현해보도록 하자.

```javascript
class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(value) {
    this.arr.push(value)
  }

  dequeue() {
    return this.arr.shift()
  }

  length() {
    return this.arr.length
  }

  peek() {
    return this.arr[0]
  }

  isEmpty() {
    return this.arr.length === 0
  }

  clear() {
    this.arr = []
  }
}

const queue = new Queue()

// 데이터 삽입
queue.enqueue(1) // arr: [1]
queue.enqueue(20) // arr: [1, 20]
queue.enqueue(300) // arr: [1, 20, 300]

// 데이터 추출
queue.dequeue() // 1

// 현재 큐 길이
queue.length() // 2

// 다음에 추출될 데이터
queue.peek() // 20

// 큐가 비어있는지 확인
queue.isEmpty() // false

// 큐 초기화
queue.clear()
```

간단하게 구현이 가능하다. 여기서 조금 더 신경을 쓴다면, `dequeue`나 `peek`같은 경우는 배열이 비어있을 경우에는 `undefined`를 리턴할텐데 그 부분을 특정한 데이터나 메시지로 변환하는 정도, 또는 비어있다고 에러메시지를 주는 정도로 튜닝이 가능하겠다.

---

# 스택 (Stack)

스택 나중에 집어넣은 데이터가 먼저 나오는 선형자료구조이다.
이 특징을 줄여서 \*_LIFO(Last In First Out_)\*라고 부른다.

- 데이터를 집어넣는 **push**
- 데이터를 추출하는 **pop**
- 현재 데이터의 길이 **length**
- 다음에 나올 데이터를 확인하는 **peek**
- 현재 스택이 비어있는지를 확인하는 **isEmpty**
- 현재 스택을 초기화하는 **clear**

큐와 같이, 위 6가지 정도 기능만 구현해보도록 하자.

```javascript
class Stack () {
  constructor () {
    this.arr = [];
  }

  push (value) {
    this.arr.push(value);
  }

  pop () {
    return this.arr.pop();
  }

  length () {
    return this.arr.length;
  }

  peek () {
    return this.arr[this.arr.length - 1];
  }

  isEmpty () {
    return this.arr.length === 0;
  }

  clear () {
    this.arr = [];
  }
}

const stack = new Stack();

// 데이터 삽입
stack.push(1); // arr: [1]
stack.push(20); // arr: [1, 20]
stack.push(300); // arr: [1, 20, 300]
stack.push(4000); // arr: [1, 20, 300, 4000]

// 데이터 추출
stack.pop(); // 4000

// 현재 스택 길이
stack.length(); // 3

// 다음에 추출될 데이터
stack.peek(); // 300

// 스택이 비어있는지 확인
stack.isEmpty(); // false

// 스택 초기화
stack.clear();
```

# 마무리

간단하게 구현해보았다. 절대 어렵지 않으며 이해하고 있으면 도움될 내용이다. 자바스크립트 이벤트 루프를 살펴보면 콜 스택, 태스크 큐 라는 용어가 등장하는데, 위 자료구조를 알고 있으면 이벤트 루프를 이해하기 수월할 것이다.
