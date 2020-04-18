<template>
  <div class="blog border col-12" @click="selectBlog()">
    <p>Title: {{blog.title}}</p>
    <p>Email: {{blog.creatorEmail}}</p>
  </div>
</template>

<script>
export default {
  name: "blog",
  props: ["blog"],
  data() {
    return {};
  },
  methods: {
    selectBlog() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blog._id }
      });
    }
  }
};
</script>

<style>
.blog {
  outline: 1px solid black;
}
</style>