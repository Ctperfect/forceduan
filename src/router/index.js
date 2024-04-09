import VueRouter from "vue-router";
import Vue from "vue";
import admincenter from "@/components/admincenter.vue";
import chapterscenter from "@/components/chapterscenter.vue";
import coursecenter from "@/components/coursecenter.vue";
import coursetaskscenter from "@/components/coursetaskscenter.vue";
import learningrecords from "@/components/learningrecords.vue";
import usermanager from "@/components/usermanager.vue";
import userscorescenter from "@/components/userscorescenter.vue";
import managersmain from "@/components/managersmain.vue";
import denglu from "@/components/denglu.vue";

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'Denglu', component: denglu },
  {
    path: '/managersmain',
    component: managersmain,
    children: [
      { path: 'admincenter', component: admincenter },
      { path: 'chapterscenter', component: chapterscenter },
      { path: 'coursecenter', component: coursecenter },
      { path: 'coursetaskscenter', component: coursetaskscenter },
      { path: 'learningrecords', component: learningrecords },
      { path: 'usermanager', component: usermanager },
      { path: 'userscorescenter', component: userscorescenter }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
