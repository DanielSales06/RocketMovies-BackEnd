const { Router } = require("express");

const MoviesController = require("../controllers/MoviesController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const notesRoutes = Router();

const moviesController = new MoviesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", moviesController.index);
notesRoutes.post("/", moviesController.create);
notesRoutes.get("/:id", moviesController.show);
notesRoutes.delete("/:id", moviesController.delete);

module.exports = notesRoutes;