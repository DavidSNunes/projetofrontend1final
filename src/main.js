import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


 



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeV5QPlnLg99JtuujzKAHjqTdr47Ce4ns",
  authDomain: "projetofrontend1final.firebaseapp.com",
  projectId: "projetofrontend1final",
  storageBucket: "projetofrontend1final.appspot.com",
  messagingSenderId: "893497113933",
  appId: "1:893497113933:web:0029c092fff505c6a84b04"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

