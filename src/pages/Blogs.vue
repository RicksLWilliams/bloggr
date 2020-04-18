<template>
  <div class="blogs">
    <!-- i will build a bunch of blog components for each blog -->
    <div class="row">
      <!-- <create-car></create-car> create blog somewhere else -->
      <blog v-for="blog in blogs" :blog="blog" :key="blog._id"></blog>
      <!-- blog details go here -->
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";
//import CreateBlog from "../components/CreateBlog";  //create goes somewhere else
export default {
  name: "blogs",
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs 
      //.sort((a, b) => a.make.charCodeAt(0) - b.make.charCodeAt(0));
    }
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
  methods: {},
  components: {
    Blog
    //,CreateBlog  // create goes somewhere else
  }
};
</script>

<style>
.blogs {
  outline: 1px solid black;
}
</style>