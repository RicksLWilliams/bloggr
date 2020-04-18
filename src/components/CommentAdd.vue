<template>
  <div class="create-comment border col-12">
    <form @submit.prevent="createComment()">
      <div class="form-group">
        <label for="comment">Make</label>
        <input type="text" name="comment" id="" class="form-control" placeholder="enter comment..." aria-describedby="helpId"
          v-model="newComment.body" required>
      </div>
      <button type="submit" class="btn btn-success"> Add Comment</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create-comment',
    data() {
      return {
        newComment: {}
      }
    },
    methods: {
      createComment() {
        //set it in the store
        this.newComment.blogId = this.$route.params.blogId
        //this.newComment.creatorEmail = creatorEmail
        this.$store.dispatch('createComment', this.newComment)
        this.newComment = {}
      }
    }
  }
</script>

<style>
  .comment {
    outline: 1px solid black;
  }
</style>