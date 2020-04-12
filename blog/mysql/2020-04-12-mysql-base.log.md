---
title: MySQL 기초 문법 정리
date: 2020-04-12 18:07:00
summary: MySQL의 정말 기본적이고 기초적인 문법을 정리해보자.
tags: ['MySQL', 'DB']
---

프론트엔드 개발을 하게되면서 백엔드는 거의 손놓고 있다가 최근 다시 백엔드를 하기 시작했다. 간단한 문법이나 개념이 혼동되기 시작해서 DB를 만들고 사용하는 정말 기본적인 문법만 정리를 해봤다.

> 해당 글은 생활코딩의 강의를 보며 정리했습니다.

> https://opentutorials.org/course/3161

**SQL 문법은 대소문자 구분을 하지 않는다.**

## 구조

- 데이터베이스 서버 > DB (스키마) > 표 (Table)

## 서버 접속

```bash
mysql -uroot -p
```

- -u: 계정
  - -uroot 는 root 계정을 사용한다는 뜻
  - -ukwan 이라면 kwan 계정을 사용
- -p: 비밀번호
  - -pabcd 이런식으로 붙여 쓸 수도 있지만 노출되기 때문에 -p만 적으면 뒤에 응답을 통해 입력 가능
- -h: 호스트
  - -h127.0.0.1 과 같이 쓸 수 있음. 로컬은 안써도 되고 원격지는 해당 주소를 입력해주면 됨

## 스키마 사용

### 데이터베이스(스키마) 생성

```sql
create database <데이터베이스 명>
```

### 스키마 삭제

```sql
drop database <데이터베이스 명>
```

### 스키마 확인

```sql
show databases;

show schemas;
```

### 스키마 사용(선택)

```sql
use <데이터베이스 명>
```

## 테이블

### 테이블 구조

열 = column

행 = row = record

### 테이블 확인

```sql
show tables;
```

### 테이블 생성

```sql
CREATE TABLE topic (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT NULL,
  created DATETIME NOT NULL,
  author VARCHAR(15) NULL,
  profile VARCHAR(200) NULL,
  PRIMARY KEY (id)
);
```

### 테이블 삭제

```sql
DROP TABLE <테이블 명>
```

### 테이블 구조 확인

```sql
desc topic;
```

## CRUD

### INSERT

```sql
INSERT INTO topic (
  title,
  description,
  created,
  author,
  profile
) VALUES (
  'MySQL',
  'MySQL is ....',
  now(),
  'kwan',
  'dev'
);
```

### SELECT

```sql
SELECT * FROM topic;

SELECT id, title, author FROM topic;

SELECT id, title, author FROM topic WHERE author = 'kwan';

SELECT id, title, author FROM topic WHERE author = 'kwan' ORDER BY id DESC;

SELECT id, title, author FROM topic WHERE author = 'kwan' ORDER BY id DESC LIMIT 2;
```

### UPDATE

```sql
UPDATE topic SET
  description = 'PostgreSQL is ....',
  author = '강감찬'
WHERE
  id = 3;
```

### DELETE

```sql
  DELETE FROM topic WHERE id = 5;
```

delete는 실제로는 잘 사용하지 않는다. 따로 아카이브, 삭제 여부 등의 컬럼을 두어 그 값을 업데이트 하는 경우로 사용하는 것이 좋다.
