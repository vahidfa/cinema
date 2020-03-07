import Vue from "vue";
import "./style.scss";

import VueResource from "vue-resource";
Vue.use(VueResource);

import { checkFilter } from "./util/bus.js";
const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus;
  }
});
import routes from "./util/routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({ routes });
new Vue({
  el: "#app",
  data: {
    genre: [],
    time: [],
    movies: [],
    bus
  },

  created() {
    this.$http.get("/api").then(response => {
      this.movies = response.data;
    });
    this.$bus.$on("check-filter", checkFilter.bind(this));
  },
  router
});
