<template>
  <header>
    <nav>
      <router-link to="/" class="logo-link"> <img :src="LogoImage" alt="logosite"  /></router-link> 
      <router-link to="/"> HOMEPAGE </router-link>
      <router-link to="/about"> SEARCH </router-link>
      <router-link to="/feed"> FAVORITES </router-link>
      <router-link to="/register" v-if="!isLoggedIn"> REGISTER </router-link>
      <router-link to="/sign-in" v-if="!isLoggedIn"> LOGIN </router-link>
      <button class="sign-out-button" @click="handleSignOut" v-if="isLoggedIn">LOGOUT</button>
      <DarkMode/>

  </nav>
  </header>
  
  <router-view/>
</template>

<script setup>
import { onMounted, ref, provide } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import DarkMode from "./components/DarkMode.vue";
import LogoImage from '/src/assets/Logo_FrontEnd.png';



const router = useRouter();
const isLoggedIn = ref(false);

const user = ref(null);
const authentication = getAuth();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }

  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};


onAuthStateChanged(authentication, (currentUser) => {
  user.value = currentUser;
});

provide('user', user);

</script>

<style >
html {
  overflow-y: scroll;
}

img {
  width: 80px; 
  height: auto;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

nav > * {
  margin-right: 100px;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f88f05;
  text-decoration: none;
  
}

nav a:hover {
  transform: scale(1.3);
}

.logo-link:hover {
  transform: none;
}


nav a.router-link-exact-active {
  color: #147deb;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sign-out-button {
  background-color: #f88f05;
  color: #147deb;
  font-weight: bold;
  border-radius: 20px;
}

.sign-out-button:hover {
  transform: scale(1.1);
}



</style>
