<template>
<div>

  <div>
    <button type="button" class="close text-danger" @click="deleteComment()">
      <span >&times;</span>
    </button>
    <p>Body: {{commentData.body}}</p>
    <p>Email: {{commentData.creatorEmail}}</p>

        <form @submit.prevent="changeComment()">
          <div class="form-group">
            <label for="body">Comment</label>
            <input type="text" name="body" id="" class="form-control" placeholder="enter Comment..." aria-describedby="helpId" v-model="commentData.body" required>
          </div>

          <button type="submit" class="btn btn-success">Save Comment</button>
        </form>
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
    },
    changeComment() {
      //console.log("changeBlog", this.blogDetails)
      //this.$router.push({ name: "Home" });
      this.$store.dispatch("changeComment", this.commentData);
    },
  }
};
</script>

<style>
.blog {
  outline: 1px solid black;
}
</style>