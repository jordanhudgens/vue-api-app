<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html {
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.container {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.search-bar {
  grid-column: 1/-1;
  grid-row: 2;
}

.search-bar input {
  width: 66vw;
  padding-left: 0.75em;
}

.search-bar input[type="text"] {
  font-size: 2.5em;
  font-family: "Font Awesome\ 5 Free", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #585858;
  box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.1);
  border: 0px solid transparent;
  border-radius: 0.5rem;
}

.search-bar input[type="text"]::placeholer {
  font-family: "Font Awesome\ 5 Free", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #a4a4a4;
}

.search-bar input[type="text"]:focus {
  outline: none;
  box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.3);
}

.search-bar p {
  color: #b3b3b3;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-top: 2.3rem;
  text-align: right;
}
</style>
