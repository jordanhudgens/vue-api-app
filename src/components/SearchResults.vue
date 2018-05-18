<template>
  <div class="container container-results">
        <div class="results-logo">
            <img src="@/assets/ds_circle_logo.png" alt="">
        </div>

        <div class="search-bar results-search-bar">
            <input type="text" placeholder="&#xf002; Search DailySmarty" @keyup.enter="submitQuery">
        </div>

        <div class="results-posts-wrapper">

            <div v-for="post in results" :key="post.id" class="post">
                <div class="category-name">
                    <span v-for="topic in post.associated_topics" :key="topic">{{ topic }}</span>
                </div>

                <div class="result-post-title">
                    <a :href="post.url_for_post" target="_blank">
                    {{ post.title }}
                    </a>
                </div>

                <div class="result-post-links-wrapper">
                    <a href="#" class="result-post-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    <a href="#" class="result-post-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    <a href="#" class="result-post-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    <a href="#" class="result-post-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                </div>
            </div>
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