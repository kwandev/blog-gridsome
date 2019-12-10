# khwan 블로그

[gridsome](https://gridsome.org/)을 이용해 제작한 블로그입니다.  
starter template을 이용했고, 일부 불필요한 화면은 제외하고 disqus나 google analytics만 추가로 붙인 상태입니다. 해당 기능 또한 gridsome 플러그인이 제곧되고 있으므로 어렵지 않게 붙일 수 있습니다.

아래 Feature 및 Installation은 스타터 템플릿에 적혀있는 그대로입니다.


## Demo URL

[https://blog.khwan.kr](https://blog.khwan.kr)

## Features

- Clean and minimal design
- [Tailwind CSS v1](https://tailwindcss.com) (with PurgeCSS)
- Scroll to sections using [vue-scrollto](https://github.com/rigor789/vue-scrollto)
- Blog with markdown content for posts
- Documentation type that shows how to use Vue components in Markdown (click Docs)
- Theme Switcher with Dark Mode
- Search posts with [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse)
- Tags for posts
- Basic pagination
- Syntax highlighting with [Shiki](https://shiki.matsu.io) (using [this gridsome plugin](https://gridsome.org/plugins/gridsome-plugin-remark-shiki))
- 404 Page
- RSS Feed
- Sitemap in XML

## Installation

1. Install Gridsome CLI tool if you don't have it: `npm install --global @gridsome/cli`
1. Clone the repo: `git clone https://github.com/drehimself/gridsome-portfolio-starter.git`
1. `cd gridsome-portfolio-starter`
1. `npm install`
1. `gridsome develop` to start a local dev server at `http://localhost:8080`
