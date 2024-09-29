import { createApp } from 'vue'
import App from './App.vue'
import initializeScene  from './backScene';
import { createRouter, createWebHashHistory} from "vue-router";

import Gallery from './components/Gallery.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Pub from './components/Pub.vue'
import CV from './components/CV.vue';
import SpacePersona from './components/Projects/SpacePersona.vue'
import GravityGame from './components/Projects/GravityGame.vue'
import ChinesePoem from './components/Projects/ChinesePoem.vue'
import SpaceObserver from './components/Projects/SpaceObserver.vue'
import VoidsResearch from './components/Projects/VoidsResearch.vue'
import VRVoids from './components/Projects/VRVoids.vue'
import catHome from './components/Projects/catHome'
import photonLab from './components/Projects/photonLab.vue'
import smartContract from './components/Projects/smartContract.vue'
import DLD from './components/Projects/DLD.vue'
import purpleVerse from './components/Projects/purpleVerse.vue'
import GNN from './components/Projects/GNN.vue'
import rubiks from './components/Projects/rubiks.vue'
import BeeCareful from './components/Projects/BeeCareful.vue'
import Bubble from './components/Projects/Bubble.vue'
import Horror from './components/Projects/Horror.vue'

const routes = [
    { path: "/:catchAll(.*)", component: AboutMe }, 
    { path: '/Gallery', component: Gallery },
    { path: '/', component: AboutMe }, 
    { path: '/Projects', component: Projects }, 
    { path: '/Pub', component: Pub }, 
    { path: '/CV', component: CV },
    { path: '/Projects/SpacePersona', component: SpacePersona }, 
    { path: '/Projects/GravityGame', component: GravityGame }, 
    { path: '/Projects/ChinesePoem', component: ChinesePoem }, 
    { path: '/Projects/SpaceObserver', component: SpaceObserver }, 
    { path: '/Projects/VoidsResearch', component: VoidsResearch }, 
    // { path: '/Projects/VRVoids', component: VRVoids }, 
    { path: '/Projects/catHome', component: catHome }, 
    { path: '/Projects/photonLab', component: photonLab }, 
    { path: '/Projects/smartContract', component: smartContract }, 
    { path: '/Projects/DLD', component: DLD }, 
    { path: '/Projects/PurpleVerse', component: purpleVerse }, 
    { path: '/Projects/GNN', component: GNN }, 
    { path: '/Projects/rubiks', component: rubiks }, 
    { path: '/Projects/BeeCareful', component: BeeCareful }, 
    { path: '/Projects/Bubble', component: Bubble }, 
    { path: '/Projects/Horror', component: Horror }, 
    { path: '/AboutMe', component: AboutMe },
    { path: '/arXivMLVoid', beforeEnter(to, from, next) {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("https://iopscience.iop.org/article/10.3847/1538-4357/aceaf6")
      } 
    },
    { path: '/arXivVoidGalaxy', beforeEnter(to, from, next) {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("https://arxiv.org/abs/2405.04447")
      } 
    },
    { path: '/DREAMS', beforeEnter(to, from, next) {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("https://www.dreams-project.org")
      } 
    },
    { path: '/Projects/VRVoids', beforeEnter(to, from, next) {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("https://www.scientificamerican.com/article/how-analyzing-cosmic-nothing-might-explain-everything/")
      } 
    },
    { path: '/Moonsters', beforeEnter(to, from, next) {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("https://projects.etc.cmu.edu/moonsters/")
      } 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

// TODO, pass the pointer of the variable to controll
initializeScene();


const mapp = createApp(App).use(router).mount('#app');


export default mapp;
