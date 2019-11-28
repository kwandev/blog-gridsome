<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Front-end Developer</div>
        <div class="leading-tight"><strong class="text-green-600">이경환</strong>입니다</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Front-end 개발자 이경환입니다.<br>
        FE, BE 모두에 흥미를 가지고 있으며, FE를 메인으로 하여 최종적으로는 풀스택개발자를 지향합니다.
        새로운 기술에 거부감 없이 흥미를 가지고 배우려는 편입니다. 최근에는 알고리즘, 자료구조, NodeJS, Python에 관심을 갖고 있습니다.
      </p>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div id="skill-stack" class="container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6">기술스택</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="mb-6">
            <div>🚀 언어/기술</div>
            <div class="pl-8 text-lg text-gray-600">HTML / CSS / Sass / JavaScript / ES6+</div>
          </li>
          <li class="mb-6">
            <div>🛠 프레임워크/라이브러리</div>
            <div class="pl-8 text-lg text-gray-600">Vue / jQuery / Bootstrap / Semantic UI</div>
          </li>
          <li class="mb-6">
            <div>💻 서버/DevOps</div>
            <div class="pl-8 text-lg text-gray-600">Webpack / ESLint / npm / yarn / git / svn</div>
          </li>
          <li class="mb-6">
            <div>📈 Tools/기타</div>
            <div class="pl-8 text-lg text-gray-600">VSCode / JetBrains / SourceTree / git-fork / RESTful API</div>
          </li>
        </ul>
      </div> <!-- end skill stack -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>

        <div class="responsive-container">
          <iframe class="responsive-iframe w-full h-full top-0 left-0 border-0" src="https://www.youtube.com/embed/uHo6o1TNQeE" style="border:0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div> <!-- end get-to-know me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

