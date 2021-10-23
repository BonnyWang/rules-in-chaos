import { createApp } from 'vue'
import App from './App.vue'
import initialzeScene from './backScene';

const mapp = createApp(App).mount('#app');


// TODO, pass the pointer of the variable to controll
initialzeScene();
export default mapp;
