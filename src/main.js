import { createApp } from 'vue'
import App from './App.vue'
import initializeScene  from './backScene';

const mapp = createApp(App).mount('#app');


// TODO, pass the pointer of the variable to controll
initializeScene();
export default mapp;
