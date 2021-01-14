import Vue from "vue";
import Router from "vue-router";
import Week from "./views/WeekOrganization.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "weekOrganization",
      components: { default: Week, header: MainNavbar, footer: MainFooter},
      props: {
        header: { class: 'd-none'},
        footer: { backgroundColor: "white" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
