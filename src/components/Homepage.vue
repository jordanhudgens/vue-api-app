<template>
  <div>
    <h1>Homepage</h1>

    <input type="text" @keyup.enter="submitQuery">

    <div v-for="post in recentPosts" :key="post.id">
        {{ post.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Homepage",
  data() {
    return {
      recentPosts: []
    };
  },
  beforeMount() {
    this.getRecentPosts();
  },
  methods: {
    submitQuery(evt) {
      this.$router.push({
        name: "SearchResults",
        params: { query: evt.target.value }
      });
    },
    getRecentPosts() {
      axios
        .get("https://api.dailysmarty.com/posts")
        .then(response => {
          this.recentPosts.push(...response.data.posts.slice(0, 3));
          console.log(response.data.posts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>