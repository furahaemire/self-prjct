import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




  const app = createApp(App);
  
  // Use Vue Router and Vue Meta plugins
  app.use(router);

  
  // Mount the app
  app.mount('#app');

  