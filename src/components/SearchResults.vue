<template>
  <div class="container container-results">
        <div class="results-logo">
            <router-link :to="{ name: 'Homepage' }">
            <img src="@/assets/ds_circle_logo.png" alt="">
            </router-link>
        </div>

        <div class="search-bar results-search-bar">
            <input type="text" :placeholder="searchPlaceholder" @keyup.enter="submitQuery">
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
                    <a v-for="postLink in post.post_links" :key="postLink" :href="postLink.link_url" target="_blank" class="result-post-link">{{ postLink.link_url }}</a>
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
      results: [],
      searchPlaceholder: `\uf002 Search DailySmarty`
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
@import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";

.container-results {
  margin-top: 2em;
}

.results-search-bar input {
  height: 5rem;
  margin-bottom: 1em;
  margin-top: 3em;
}

.results-posts-wrapper {
  grid-row: 3;
  grid-column: 1/-1;
  width: 66vw;
}

.post {
  margin-top: 3em;
  margin-bottom: 3em;
}

.category-name {
  color: #2660f3;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.category-name span {
  margin-right: 15px;
}

.result-post-title a {
  color: #535353;
  text-decoration: none;
  font-size: 1.8rem;
}

.result-post-links-wrapper {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 2rem;
}

.result-post-link {
  color: #535353;
  text-decoration: none;
  font-size: 1.4rem;
}

.result-post-link:hover {
  text-decoration: underline;
}

.results-logo {
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.results-logo img {
  width: 50px;
}
</style>