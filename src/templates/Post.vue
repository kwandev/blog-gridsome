<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />

      <div class="mb-20">
        <a href="#" class="font-bold uppercase" @click="backToPage">&larr; Back</a>
      </div>

      <vue-disqus shortname="leekyeonghwanblog" :identifier="$page.post.title"></vue-disqus>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    summary
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.$page.post.summary },
        { vmid: 'keywords', name: 'keywords', content: this.$page.post.tags.map(item => item.title).join(', ') },
      ],
    }
  },
  methods: {
    backToPage () {
      this.$router.back()
    }
  }
}
</script>

<style src="../css/github-markdown.css" />

