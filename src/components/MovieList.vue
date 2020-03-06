<template>
  <div id="movie-list">
    <div v-if="movieFilter.length">
      <movie-item v-for="movie in movieFilter" :key="movie" v-bind:movie="movie.movie"></movie-item>
    </div>
    <div v-else>
      <p>no result</p>
    </div>
  </div>
</template>

<script>
import movieItem from "./MovieItem.vue";
import genres from "../util/genres";
export default {
  props: ["genre", "time", "movies"],
  methods: {
    genreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        let movieGernes = movie.movie.Genre.split(", ");
        let matched = true;
        this.genre.forEach(genre => {
          if (movieGernes.indexOf(genre) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    }
  },
  computed: {
    movieFilter() {
      return this.movies.filter(this.genreFilter);
    }
  },
  components: {
    movieItem
  }
};
</script>
