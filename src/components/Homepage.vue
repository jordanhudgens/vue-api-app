<template>
   <div class="container container-homepage">
        <div class="homepage-logo">
            <img src="@/assets/ds_circle_logo.png" alt="">
        </div>

        <div class="search-bar homepage-search-bar">
            <input type="text" :placeholder="searchPlaceholder" @keyup.enter="submitQuery">
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
      recentPosts: [],
      searchPlaceholder: `\uf002 Search DailySmarty`
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
@import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";

.container-homepage {
  margin-top: 5em;
  align-items: center;
  height: 100vh;
}

.homepage-logo {
  grid-column: 2;
  grid-row: 1;
}

.homepage-logo img {
  width: 10.5rem;
}

.homepage-search-bar input {
  height: 11.8rem;
}

.recent-posts-wrapper {
  grid-column: 1/-1;
  grid-row: 3;
}

.recent-posts-heading {
  color: #2660f3;
  margin-bottom: 3rem;
  font-size: 1.4rem;
}

.recent-posts {
  display: grid;
  width: 66vw;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2.5rem;
}

.recent-post-title a {
  color: #535353;
  font-size: 1.4rem;
  text-decoration: none;
}

.recent-post-category {
  color: #999999;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>