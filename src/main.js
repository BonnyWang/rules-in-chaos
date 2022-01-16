import { createApp } from 'vue'
import App from './App.vue'
import initializeScene  from './backScene';
import { createWebHistory, createRouter } from "vue-router";

import Gallery from './components/Gallery.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import SpacePersona from './components/Projects/SpacePersona.vue'
import GravityGame from './components/Projects/GravityGame.vue'

const routes = [
    { path: '/Gallery', component: Gallery },
    { path: '/', component: AboutMe }, 
    { path: '/Projects', component: Projects }, 
    { path: '/Projects/SpacePersona', component: SpacePersona }, 
    { path: '/Projects/GravityGame', component: GravityGame }, 
    { path: '/AboutMe', component: AboutMe },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

// TODO, pass the pointer of the variable to controll
initializeScene();


const mapp = createApp(App).use(router).mount('#app');


export default mapp;
