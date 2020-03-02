---
title: vue-cli 사용시 PowerShell 에러
date: 2019-11-09 15:45:41
summary: PowerShell script 에러가 발견됐을 때,
tags: ["Vue", "PowerShell"]
---

최근 vue cli를 이용하는데 있어, 제대로 실행이 되지 않는 문제가 있어서 원인을 제대로 파악하지 못하고 있었는데, powershell에서 스크립트 실행하는 권한에 대한 정책 때문인 것을 알게 되었다.

![vue스크립트에러](https://user-images.githubusercontent.com/54297322/68524255-f6e3cc80-0307-11ea-82ea-cf21654d8379.png)

위와 같이 에러가 날텐데, 간단하게 해결하는 방법은

```bash
// error
vue create <project-name>

// success
vue.cmd create <project-name>
```

위처럼 `.cmd`를 붙여 사용하면 된다고 한다.

혹은 아예 그냥 git bash나 다른 터미널을 이용하면 된다.

- 참고 사이트
  [MS powershell docs](https://docs.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6)
