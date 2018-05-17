import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import SearchResults from "@/components/SearchResults";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/search-results",
      name: "SearchResults",
      component: SearchResults
    }
  ]
});
