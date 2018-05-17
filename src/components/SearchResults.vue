<template>
  <div>
    <h1>Search results</h1>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  data() {
    return {
      query: null
    };
  },
  beforeMount() {
    this.query = this.$route.params.query;
    console.log("In the before mount");

    console.log(this.query);
  }
};
</script>

<style scoped>
</style>