<template>
  <div role="tablist">
    <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:id="`accordion-` + post.id" v-bind:title="post.title" v-bind:text="post.text"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'

export default {
  name: 'accordionpage',
  components: {
    BlogPost
  },
  data () {
    return {
      posts: [
        { id: '1', title: 'accordion 1', text: `accordion 1` },
        { id: '2', title: 'accordion 2', text: `accordion 2` },
        { id: '3', title: 'accordion 3', text: `accordion 3` }
      ]
    }
  }
}
</script>
