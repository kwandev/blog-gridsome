---
title: JavaScript this 정리
date: 2019-10-09 13:05:23
summary: JavaScript this 바인딩에 대하여 정리해놓기
tags: ["JavaScript"]
---

자바스크립트에서 `this`는 호출되는 방식에 따라 달라지기 때문에 이해하기 너무 어려운 관계로 아예 대표적인 몇 가지를 그냥 외워버리기로 함.

### 1. 자유함수 호출

가장 기본적인 경우, 별다른 조건이 없을 때에 *this*는 전역객체를 바라본다.

```javascript
console.log(this === window); // true
console.log(toString.call(this)); // [object Window]

function freeFunction() {
  console.log(this === window); // true
}
freeFunction();
```

> browser의 전역객체는 window  
> node의 전역객체는 global

### 2. 생성자 호출

_new_ 키워드를 이용한 생성자 호출시에 함수 내부 *this*는 새로운 객체를 바라본다.

```javascript
function NewFunction() {
  this.name = "이름";

  console.log(this); // NewFunction
  console.log(toString.call(this)); // [object Object]
  console.log(this.name); // 이름
}

/* 생성자 호출 */
let fun = new NewFunction();
console.log(fun.name); // 이름

/* 일반함수 호출 */
let fun2 = NewFunction();
console.log(fun2.name); // Uncaught TypeError: Cannot read property 'name' of undefined
```

### 3. Object의 Method 호출

Object의 Method를 호출했을 때엔 *this*는 Object를 가리킨다.

```javascript
let car = {
  name: "myCar",
  color: "red",
  /* Method */
  getName: function() {
    console.log(this); // car {name: 'myColor', color: 'red', getName () ... }
    console.log(this.name); // myCar
  },
  /* Method 축약형 */
  getColor() {
    console.log(this); // car {name: 'myColor', color: 'red', getName () ... }
    console.log(this.color); // red
  },
  /* arrow function의 경우 다른 규칙이 적용된다. 4번 참고 */
  getArrow: () => {
    console.log(this); // Window
    console.log(this.name); // undefined
    console.log(this.color); // undefined
  }
};

car.getColor();
car.getName();
car.getArrow();
```

### 4. Arrow Function 호출

ES6에서 추가된 Arrow Function의 경우, 생성된 시점의 주변 스코프의 *this*를 갖게된다

```javascript
let office = {
  pencil: 4,
  getArrow: () => {
    /*
      getArrow가 생성될 때의 주변 스코프인 office 객체,
      office 객체의 this는 Window객체이므로 getArrow의 this는 Window를 바라본다
    */
    console.log(this); // Window
    console.log(this.pencil); // undefined
  },
  getPencil() {
    /* getPencil은 일반적인 method이므로 위의 3번 규칙을 따라 this는 office 객체를 바라본다 */
    console.log(this.pencil); // 4

    let getPpencilFun = function() {
      /* 1번규칙인 일반 함수 호출에 의해 Window를 바라본다 */
      console.log(this.pencil); // undefined
    };
    getPpencilFun();

    let getPencilArrow = () => {
      /*
        getPencilArrow arrow function 규칙에 의해
        getPencil method가 생성될 때의 this인 office 객체를 바라본다
      */
      console.log(this.pencil); // 4
    };
    getPencilArrow();
  }
};

office.getArrow();
office.getPencil();
```

### 5. call, apply, bind로 함수 호출

각각 함수를 호출하고, 정의하는 Function의 메소드이다. 첫번째 인자를 통해 this를 변경할 수 있다.

```javascript
let office = {
  paper: 100,
  getPaper() {
    console.log(this.paper);
  }
};

let home = {
  paper: 10
};

office.getPaper(); // 100: 일반함수 메소드 호출
office.getPaper.call(home); // 10: 해당함수의 this를 home객체로 변경
office.getPaper.call(this); // undefined: this가 Window로 변경
office.getPaper.call(null); // undefined: this가 지정이 안되어 있으므로, 기본 함수의 this인 Window를 봄
office.getPaper.call(); // undefined: 상동

office.getPaper.apply(home); // 10: 해당함수의 this를 home객체로 변경

let bind = office.getPaper.bind(home);
bind(); // 10
```
