  
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
        <div class="comment" v-for="comment in blogComents" :commentData="comment" :key="comment._id">
          <button type="button" class="close text-danger" @click="deleteComment('{{comment.id}}')">
            <span >&times;</span>
          </button>
          <p>Title: {{comment.body}}</p>
          <p>Email: {{comment.creatorEmail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CommentAdd from "../components/CommentAdd";
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
      this.$router.push({ name: "Blogs" });
      this.$store.dispatch("deleteBlog", this.blog._id);
    },
    deleteComment(commentid) {
      //this.$router.push({ name: "Blogs" });
      console.log(commentid)
      console.log("deleteComment", this.$commentid)
      //this.$store.dispatch("deleteComment", this.comment._id);
    }
  },
  components: {CommentAdd}
};
</script>


<style scoped>
</style>