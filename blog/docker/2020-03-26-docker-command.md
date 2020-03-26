---
title: Docker 커맨드 정리
date: 2020-03-26 15:22:00
summary: Docker를 공부, 적용해보면서 접해보는 커맨드나 내용을 정리해보자
tags: ['Docker', 'Node', 'Express']
---

Docker를 처음 사용해보고 적용해보면서 만나는 기본적인 명령어나, 스니펫들을 정리해놓기로 했다.

지속적으로 업데이트하며 계속 들여다보도록 하자.

# 🛠 설정파일

## .dockerignore

docker 이미지를 만들 때에 제외할 파일이나 폴더를 설정해놓을 수 있다. gitignore를 생각하면 편하다.

```bash
node_modules/
```

## Dockerfile

이미지를 만들 때 사용되는 파일. `Dockerfile.ops`등 추가적인 텍스트를 이용해 환경에 따라 구분해서 사용할 수도 있다.

```bash
FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

# EXPOSE 3010

CMD ["npm", "run", "dev"]
```

# ✏ 명렁어

## 🖼 이미지

### 이미지 생성

```bash
$ docker build --tag node-nginx:test .
```

### 이미지 확인

```bash
$ docker images
```

### 이미지 삭제

```bash
$ docker rmi [image id]
```

### 컨테이너 강제 삭제 후 이미지 삭제

```bash
$ docker rmi -f [image id]
```

### 이미지 실행

이미지를 실행하면 해당 이미지 설정에 따른 컨테이너가 실행된다.

```bash
# docer run --name [생성할 컨테이너 명] -p [사용포트:기존포트] [도커이미지]

$ docker run --name node-nginx-instance -p 3000:3000 node-nginx:test
```

## 🖥 컨테이너

### 컨테이너 확인

```bash
$ docker ps
```

### 모든 컨테이너 확인

정지, 삭제된 컨테이너들까지 확인할 수 있다.

```bash
$ docker ps -a
```

### 컨테이너 삭제

```bash
# 1개 삭제
$ docker rm [container id]

# 복수개 삭제
$ docker rm [container id], [container id], ...
```

### 컨테이너 시작

```bash
$ docker start [container id]

$ docker restart [container id]
```
