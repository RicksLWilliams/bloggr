<template>
  <div class="home container-fluid">
    <h1>Welcome</h1>
    <!-- <create-car></create-car> create blog somewhere else -->
    <blogs>blogs go here</blogs>
  </div>
</template>

<script>
import Blogs from "./Blogs";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$auth);
    this.$store.dispatch("getBlogs");
  },
  computed: {
    blogs(){
      return this.$store.state.blogs
    }
  },
  methods: {},
  components: { Blogs }
};
</script>
