const mockMovies = require("../mockData/MockMovies");

class MovieService {
  async getAllMovies() {
    try {
      if (mockMovies.moviesData.results.length != 0) return mockMovies.moviesData;
    } catch (error) {
      console.log(`Error: ${error}`);
      return [];
    }
  }
}

module.exports = MovieService;
