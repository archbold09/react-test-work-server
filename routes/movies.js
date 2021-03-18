const MovieService = require("../services/movies");
const express = require("express");
function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const MoviesService = new MovieService();

  router.post("/", async (req, res) => {
    const auth = req.body.akelab;
    const token = 123456789;

    if (auth != token)
      res.status(401).json({
        data: [],
        mensaje: "No tienes permisos para acceder a la información.",
      });

    if (req.body.akelab == token)
      try {
        const movies = await MoviesService.getAllMovies();
        res.status(200).json({
          data: movies,
          mensaje: "Datos cargados correctamente."
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
  });
}
module.exports = moviesApi;
