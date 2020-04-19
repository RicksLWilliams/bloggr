  
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <img class="img-fluid" :src="blogDetails.imgUrl" alt srcset />
        <h5>{{blogDetails.title}}</h5>
        <h5>{{blogDetails.body}}</h5>
        <p>{{blogDetails.tags}}</p>
        <p>{{blogDetails.published}}</p>
        <p>{{blogDetails.creatorEmail}}</p>

        <div v-if="this.$auth.userInfo.email == this.blogDetails.creator.email"> 
          <button v-if="$auth.isAuthenticated" type="button" class="close text-danger" @click="deleteBlog()">
              <span >&times;</span>
          </button>
          <form @submit.prevent="changeBlog()">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" name="title" id="" class="form-control" placeholder="enter title..." aria-describedby="helpId" v-model="blogDetails.title" required>
            </div>
            <div class="form-group">
              <label for="body">Body</label>
              <input type="text" name="body" id="" class="form-control" placeholder="enter body..."   aria-describedby="helpId" v-model="blogDetails.body" required>
            </div>
            <button type="submit" class="btn btn-success">Save</button>
          </form>
        </div>

      </div>
    </div> 
    <div class="row">
      <div class="col-11">
        <CommentAdd v-if="$auth.isAuthenticated"> </CommentAdd>
        <small class="text-danger" v-else>You must log in to leave a comment.</small>
      </div>
    </div>
    <div class="row">
      <div class="col-11">
        <comment class="comment" v-for="comment in blogComents" :commentData="comment" :key="comment._id"></comment>
      </div>
    </div>
  </div>

</template>


<script>
import CommentAdd from "../components/CommentAdd";
import Comment from "../components/Comment";
export default {
  name: "blogDetails",
  data() {
    return {};
  },
  created() {
    //console.log("created",this.$route.params.blogId )
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },
  computed: {
    blogDetails() {
      return this.$store.state.activeBlog.blog;
    },
    blogComents() {
      return this.$store.state.activeBlog.comments;
    },
  },
  methods: {
    deleteBlog() {
      //console.log("deleteBlog", this.blogDetails.id)
      //console.log("deleteBlog", this.blogDetails.id)
      this.$router.push({ name: "Home" });
      this.$store.dispatch("deleteBlog", this.blogDetails._id);
    },
    changeBlog() {
      console.log("changeBlog",this.$auth.userInfo.email )
      console.log(this.blogDetails.creator.email)
      //console.log("changeBlog", this.blogDetails)
      //this.$router.push({ name: "Home" });
      this.$store.dispatch("changeBlog", this.blogDetails);
    },
    //deleteComment(commentid) {
      //this.$router.push({ name: "Blogs" });
      //console.log(commentid)
      //console.log("deleteComment", this.$commentid)
      //this.$store.dispatch("deleteComment", this.comment._id);
    //}
  },
  components: {CommentAdd, Comment}
};
</script>


<style scoped>
</style>