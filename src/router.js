import Vue from "vue";
import Router from "vue-router";

import List from "./components/List.vue";
import TaskNew from "./components/TaskNew.vue";
import Task from "./components/Task.vue";
import NotFound from "./components/404";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/task-new",
      name: "taskNew",
      component: TaskNew
    },
    {
      path: "/task/:id",
      name: "task",
      component: Task
    },
    { path: '*', component:NotFound },
  ]
});
