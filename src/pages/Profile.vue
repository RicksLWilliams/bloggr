<template>
<div class="home container-fluid">

  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>

    <div class="row">
      <div class="col-11">
        <BlogAdd> </BlogAdd>
      </div>
    </div>

  <div class="row">
    <!-- <create-car></create-car> create blog somewhere else -->
    <blog v-for="blog in blogs" :blog="blog" :key="blog._id"></blog>
    <!-- blog details go here -->
  </div>


</div>
</template>

<script>
import Blog from "../components/Blog";
import BlogAdd from "../components/BlogAdd";
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.myBlogs 
      //.sort((a, b) => a.make.charCodeAt(0) - b.make.charCodeAt(0));
    }, 
  },
  created() {
    //this.$store.dispatch("getBlogs");
    this.$store.dispatch("getMyBlogs");
  },
  components: {
    Blog
    ,BlogAdd
    //,CreateBlog  // create goes somewhere else
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
