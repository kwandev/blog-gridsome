// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })
  Vue.use(VueFuse)
  Vue.use(VueDisqus)

  head.htmlAttrs = { lang: 'ko' }
  head.bodyAttrs = { class: 'padding-top-0' }

  head.meta.push({
    key: 'keywords',
    name: 'keywords',
    content: 'gridsome, javascript, html, css, vue, 프론트엔드, khwan'
  })
  head.meta.push({
    key: 'description',
    name: 'description',
    content: '프론트엔드 개발자 khwan입니다. 프론트엔드와 저에 대한 얘기들을 이것저것 기록합니다.'
  })
  head.meta.push({
    key: 'author',
    name: 'author',
    content: 'khwan'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
  head.style.push({
    type: 'text/css',
    cssText: '.padding-top-0 { padding-top: 0 !important }'
  })
  // head.script.push({
  //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   async: true,
  //   'data-ad-client': 'ca-pub-1057562095822051'
  // })
}
