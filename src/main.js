import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme)
createApp(App)
.use(store)
.use(router)
.use(VueAxios,axios)
.use(VueMarkdownEditor)
.use(ElementPlus)
.mount('#app')
