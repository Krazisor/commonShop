import { createApp } from 'vue'
// 登录组件
import { createLogto, type LogtoConfig } from '@logto/vue';
import './style.css'
import router from './router'
import App from './App.vue'

// 登录组件
const config: LogtoConfig = {
    endpoint: 'https://3a4cuw.logto.app/',
    appId: 'b6pe6dxrzi65o6ugw1wdc',
};

const app = createApp(App);

app.use(createLogto, config);
app.use(router)

app.mount("#app");
