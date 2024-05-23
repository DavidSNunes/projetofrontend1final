<template>
  <div>
    <h1 class="welcome" v-if="user">Welcome back, {{ user.email }}!</h1>
    <div class="login-message" v-else>Get access to the Favorites page by logging in! </div>
    <div class="movies">
      <div class="message">POPULAR THIS WEEK</div>
      <div v-for="movie in popularMovies" :key="movie.title" class="movie">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster-home">
        <h2>{{ movie.title }}</h2>
        
      </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export default {
  data() {
    return {
      user: null,
      popularMovies: [
        { title: 'Sausage Party', poster: 'https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@.' },
        { title: 'The Dark Knight', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.' },
        { title: 'The Truman Show', poster: 'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@.' },
        { title: 'Shutter Island', poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@' },
        
      ],
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      this.user = currentUser;
    });
  },
};
</script>

<style scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: flex-start; 
  height: 800px; 
  align-content: center;
  position: relative;
}

.movies::before {
  content: ""; 
  position: absolute; 
  top: 230px; 
  left: 241px; 
  right: 241px; 
  height: 2px; 
  background: #f88f05; 
}

.movie {
  width: 200px;
  margin: 30px;
  margin-top: 120px;
  
}

.movie-poster-home {
  width: 200px; 
  height: auto; 
  
}

.message {
  position: absolute;
  top: 200px; 
  left: 0;
  right: 813px;
  text-align: center; 
  color: #f88f05;
}

.welcome {
  position: absolute;
  top: 170px; 
  left: 0;
  right: 0;
  text-align: center; 
}

.login-message {
  font-size: 24px; 
}
</style>