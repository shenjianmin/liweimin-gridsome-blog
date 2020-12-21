// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Layout.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import 'mavon-editor/dist/markdown/github-markdown.min.css'
export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI)
  Vue.use(mavonEditor)
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
}
