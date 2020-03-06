import Vue from "vue";
import "./style.scss";
import Overview from "./components/Overview.vue";

import VueResource from "vue-resource";
Vue.use(VueResource);

import { checkFilter } from "./util/bus.js";
const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus;
  }
});
new Vue({
  el: "#app",
  data: {
    genre: [],
    time: [],
    movies: [],
    bus
  },

  components: {
    Overview
  },
  created() {
    this.$http.get("/api").then(response => {
      this.movies = response.data;
    });
    this.$bus.$on("check-filter", checkFilter);
  }
});
