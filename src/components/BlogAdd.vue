<template>
  <div class="create-blog border col-12">
    <form @submit.prevent="createBlog()">
      <div class="form-group">
        <label for="title">title</label>
        <input type="text" name="title" id="" class="form-control" placeholder="enter title..." aria-describedby="helpId"
          v-model="newBlog.title" required>
      </div>
      <div class="form-group">
        <label for="body">body</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter body..." aria-describedby="helpId"
          v-model="newBlog.body" required>
      </div>
      <div class="form-group">
        <label for="img">Image</label>
        <input type="text" name="img" id="" class="form-control" placeholder="enter img..." aria-describedby="helpId"
          v-model="newBlog.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-success">Add Blog</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create-blog',
    data() {
      return {
        newBlog: {}
      }
    },
    methods: {
      createBlog() {
        //set it in the store
        //this.newComment.blogId = this.$route.params.blogId
        //this.newComment.creatorEmail = creatorEmail
        this.$store.dispatch('createBlog', this.newBlog)
        this.newBlog = {}
      }
    }
  }
</script>

<style>
  .comment {
    outline: 1px solid black;
  }
</style>