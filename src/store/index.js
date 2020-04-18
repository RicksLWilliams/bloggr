import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs:[],
    myBlogs:[],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setMyBlogs(state, blogs) {
      state.myBlogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        //console.log(res.data);
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getMyBlogs({ commit }) {
      try {
        let res = await api.get("profile/blogs");
        //console.log(res.data);
        //console.log("getMyBlogs")
        commit("setMyBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlog({ commit }, blogId) {
      try {
        let res = await api.get(`blogs/${blogId}`);
        //console.log("getBlog",res.data);
        commit("setActiveBlog", res.data);
      } catch (error) {
        console.error(error);
      }
    },


    async createBlog({ commit }, newBlog) {
      try {
        let res = await api.post("blogs/",newBlog );
        //console.log("createBlog",res.data);
        this.dispatch("getMyBlogs" )
      } catch (error) {
        console.error(error);
      }
    },

    async createComment({ commit }, newComment) {
      try {
        let res = await api.post("comments/",newComment );
        //console.log("createComment",res.data);
        this.dispatch("getBlog", newComment.blogId )
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({ commit }, blogid) {
      try {
        //console.log("deleteBlog", blogid)
        let res = await api.delete("blogs/"+blogid );
        this.dispatch("getBlogs" )
      } catch (error) {
        console.error(error);
      }
    },

    async changeBlog({ commit }, blog) {
      try {
        let res = await api.put("blogs/"+blog.id, blog  );
        this.dispatch("getBlogs" )
      } catch (error) {
        console.error(error);
      }
    },

    async deleteComment({ commit }, commentData) {
      try {
        let res = await api.delete("comments/" + commentData.id );
        this.dispatch("getBlog" , commentData.blogId )
      } catch (error) {
        console.error(error);
      }
    },

  },
});
