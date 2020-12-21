const c1 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\templates\\project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-fan-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\templates\\fan.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-dynamic-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\templates\\dynamic.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-project-index-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\pages\\project\\index.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-fan-index-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\pages\\fan\\index.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-dynamic-index-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\pages\\dynamic\\index.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\alimi\\Desktop\\liweimin-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/:id/",
    component: c1
  },
  {
    path: "/fan/:id/",
    component: c2
  },
  {
    path: "/dynamic/:id/",
    component: c3
  },
  {
    path: "/project/",
    component: c4
  },
  {
    path: "/fan/",
    component: c5
  },
  {
    path: "/dynamic/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
