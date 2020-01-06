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
  head.meta.push({
    vmid: 'keywords',
    name: 'keywords',
    content: 'gridsome, front-end, html, css, javascript, vue'
  })
  head.meta.push({
    vmid: 'description',
    name: 'description',
    content: 'Khwan\'s Blog'
  })
  head.meta.push({
    name: 'author',
    content: 'khwan'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}
