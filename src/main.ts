import { createApp } from 'vue'
// 登录组件
import { createLogto, type LogtoConfig } from '@logto/vue';
import router from './router'
import App from './App.vue'
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 登录组件
const config: LogtoConfig = {
    endpoint: 'https://3a4cuw.logto.app/',
    appId: '7lmtns1dsjk26hm01raxa',
};

const app = createApp(App);
app.use(ElementPlus)

app.use(createLogto, config);
app.use(router)

app.mount("#app");
