import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs:[],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
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
        console.log(res.data);
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlog({ commit }, blogId) {
      try {
        let res = await api.get(`blogs/${blogId}`);
        console.log("getBlog",res.data);
        commit("setActiveBlog", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async createComment({ commit }, newComment) {
      try {
        let res = await api.post("comments/",newComment );
        console.log("createComment",res.data);
        //getBlog
        // or activeBlog.comment.push()
        this.dispatch("getBlog", newComment.blogId )

        //commit("setActiveBlog", res.data);
        // or activeBlog.comment.push()
      } catch (error) {
        console.error(error);
      }
    },

  },
});
