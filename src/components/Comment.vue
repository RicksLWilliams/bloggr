<template>
<div>

  <div>
    <button type="button" class="close text-danger" @click="deleteComment()">
      <span >&times;</span>
    </button>
    <p>Body: {{commentData.body}}</p>
    <p>Email: {{commentData.creatorEmail}}</p>
  </div>


</div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {};
  },
  methods: {
    deleteComment() {
      console.log("deleteComment", this.commentData)
      this.$store.dispatch("deleteComment", this.commentData);
    }
    //selectBlog() {
    //  this.$store.commit("setActiveBlog", {});
    //  this.$router.push({
    //    name: "BlogDetails",
    //    params: { blogId: this.blog._id }
    //  });
    //}
  }
};
</script>

<style>
.blog {
  outline: 1px solid black;
}
</style>