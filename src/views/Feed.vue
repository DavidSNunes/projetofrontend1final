<template>
  <div class="about">
    <h1>Your Favourites</h1>
    <div v-for="movie in favorites" :key="movie.imdbID" class="movie-item">
      <div class="movie-poster"> 
        <img :src="movie.Poster" alt="Movie Poster" class="movie-favourite" />
      </div>
      <h2>{{ movie.Title }}</h2>
      <p>({{ movie.Year }})</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { inject } from 'vue';

const user = inject('user');
const favorites = ref([]);



onMounted(() => {
  if (user.value) {
    favorites.value = JSON.parse(localStorage.getItem(`favorites-${user.value.uid}`)) || [];
  }
});
</script>

<style>

.movie-item {
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:left;
}

.movie-poster {
  margin-left: 200px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  
}

.movie-favourite {
  width: 150px;
  height: auto;
}

</style>