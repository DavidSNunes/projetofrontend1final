<template>
  <div class="container">
    <div class="search-bar">
      <input class="search-input" type="text" v-model="searchTerm" placeholder="Search for Movies or TVshows">
      <button class="search-button" @click="searchMovies">Search</button>
    </div>
    <div v-if="selectedMovie" class="movie-details-container">
      <!-- <img :src="getCleanPosterUrl(selectedMovie.Poster)" alt="Movie Poster" class="selected-movie-poster" /> -->
      <div class="movie-poster-after">
        
        <img :src="getCleanPosterUrl(selectedMovie.Poster)" alt="Movie Poster" class="selected-movie-poster" />
        <button v-if="user" class="favourite-button" @click="favoriteMovie">{{ isFavorited ? 'Unfavorite' : 'Favorite' }}</button>
      </div>
      <div class="movie-details">
        <h2>{{ selectedMovie.Title }}</h2>
        <p>{{ selectedMovie.Year }}</p>
        <p>Directed by {{ selectedMovie.Director }}</p>
        <p>Genre: {{ selectedMovie.Genre }}</p>
        <div class="plot">
          <p>Plot: {{ selectedMovie.Plot }}</p>
        </div>
        <p>Runtime: {{ selectedMovie.Runtime }}</p>
        <p>Writer: {{ selectedMovie.Writer }}</p>
        <p>Cast: {{ selectedMovie.Actors }}</p>
        <p>Language: {{ selectedMovie.Language }}</p>
        <p>Country: {{ selectedMovie.Country }}</p>
        <p>Rated: {{ selectedMovie.Rated }}</p>
        <p>Awards: {{ selectedMovie.Awards }}</p>
        
      </div>
    </div>
    <div v-else>
      <div v-if="!loading && searched && movies.length === 0" class="no-results">
        There were no matches for your search term.
      </div>
      <div class="movie-container" v-else>
        <div v-for="movie in movies" :key="movie.imdbID" class="movie-item">
          <div class="movie-poster" @click="selectMovie(movie)"> 
            <img :src="getCleanPosterUrl(movie.Poster)" alt="Movie Poster" />
          </div>
          <h2  @click="selectMovie(movie)">{{ movie.Title }} ({{ movie.Year }})</h2>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { inject } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';

const user = inject('user');

const searched = ref(false);

const loading = ref(false);

const isFavorited = computed(() => {
  if (!user.value) return false;
  const favorites = JSON.parse(localStorage.getItem(`favorites-${user.value.uid}`)) || [];
  return favorites.some(movie => movie.imdbID === selectedMovie.value.imdbID);
});

const searchTerm = ref('');
const movies = ref([]);
const selectedMovie = ref(null);


const searchMovies = async () => {
  try {
    loading.value = true;
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '7fc53213',
        s: searchTerm.value,
      },
    });
    movies.value = Array.isArray(response.data.Search) ? response.data.Search : [];
    selectedMovie.value = null;
    
    
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    searched.value = true;
  }
};

const selectMovie = async (movie) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '7fc53213',
        i: movie.imdbID,
      },
    });
    selectedMovie.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const getCleanPosterUrl = (url) => {
  return url.split("@.")[0] + "@.";
};


const favoriteMovie = () => {
  if (!user.value) return;
  let favorites = JSON.parse(localStorage.getItem(`favorites-${user.value.uid}`)) || [];
  if (isFavorited.value) {
    favorites = favorites.filter(movie => movie.imdbID !== selectedMovie.value.imdbID);
  } else {
    favorites.push(selectedMovie.value);
  }
  localStorage.setItem(`favorites-${user.value.uid}`, JSON.stringify(favorites));
};


</script>

<style scoped>



.error {
  text-align: center;
  margin-top: 50px;
  margin-left: -140px;
}

.favourite-button {
  display: flex;
  align-items: center;
  background-color: #f88f05;
  color: #147deb;
  font-weight: bold;
  border-radius: 20px;
}

.favourite-button:hover {
  transform: scale(1.1);
}

.movie-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem;
  transition: transform 0.3s ease;
  padding-left: 5rem;
  
}
.movie-details-container {
  display: flex;
  flex-direction: row;
  justify-content: center; 
  width: 100%;
}
  
.movie-poster-after {
  margin-top: 20px;
  flex-direction: column;
  justify-content: center; 
  margin-left: 200px;
  
}

.plot {
  justify-content: left;
  margin-left:0%;
  text-align: left;
}

.movie-poster {
  flex: 1;
  align-items: flex-start; 
}

.movie-details {
  flex: 3; 
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  margin-left: 40px;
  gap: 10px;
}

.movie-item:hover {
  transform: scale(1.3);
}

.no-poster-details {
  display: flex;
  flex-direction: row;
  align-items: center; 
  margin-left: 20px;
  gap: 10px;
}


.movie-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding-left: 6rem;
}

.selected-movie-poster {
  width: 200px; 
  height: auto; 
  
}


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



.search-bar {
  display: flex;
  gap: 10px; 
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  width: 300px;
  border: 2px solid #000000;
}

.search-button {
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #000000;
}

.search-button:hover {
  transform: scale(1.1);
}
</style>