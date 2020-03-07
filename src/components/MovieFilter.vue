<template>
  <div id="movie-filter">
    <h2>filter result</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :key="genre" v-bind:title="genre" category="genre"></check-filter>
    </div>
  </div>
</template>

<script>
import genres from "../util/genres";
import checkFilter from "./CheckFilter.vue";
export default {
  data() {
    return {
      genres
    };
  },

  components: {
    checkFilter
  }
};
</script>