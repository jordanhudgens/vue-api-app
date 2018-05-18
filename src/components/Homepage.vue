<template>
   <div class="container container-homepage">
        <div class="homepage-logo">
            <img src="@/assets/ds_circle_logo.png" alt="">
        </div>

        <div class="search-bar homepage-search-bar">
            <input type="text" placeholder="&#xf002; Search DailySmarty" @keyup.enter="submitQuery">
            <p>Press return to search</p>
        </div>

        <div class="recent-posts-wrapper">
            <div class="recent-posts-heading">
                Recent Posts
            </div>

            <div class="recent-posts">
                <div v-for="post in recentPosts" :key="post.id" class="recent-post">
                    <div class="recent-post-title">
                        <a :href="post.url_for_post" target="_blank">
                        {{ post.title }}
                        </a>
                    </div>

                    <div class="recent-post-category">
                        {{ post.associated_topics[0] }}
                    </div>
                </div>
            </div>
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