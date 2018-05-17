<template>
  <div>
    <h1>Search results</h1>

    <input type="text" @keyup.enter="submitQuery">

    <div v-for="result in results" :key="result.id">
        {{ result.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchResults",
  data() {
    return {
      query: null,
      results: []
    };
  },
  beforeMount() {
    this.query = this.$route.params.query;
    this.getResults(this.query);
  },
  methods: {
    getResults(q) {
      this.results = [];

      axios
        .get("https://api.dailysmarty.com/search", { params: { q } })
        .then(response => {
          this.results.push(...response.data.posts);
          console.log(response.data.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    submitQuery(evt) {
      this.query = evt.target.value;
      this.getResults(this.query);
    }
  }
};
</script>

<style scoped>
</style>