<template>
  <div>
    <h1>Homepage</h1>

    <input type="text" @keyup.enter="submitQuery">
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  methods: {
    submitQuery(evt) {
      this.$router.push({
        name: "SearchResults",
        params: { query: evt.target.value }
      });
    }
  }
};
</script>

<style scoped>
</style>