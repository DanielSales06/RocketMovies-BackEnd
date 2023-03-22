const { Router } = require("express");

const TagsMovies = require("../controllers/TagsMovies")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const tagsRoutes = Router();

const tagsMovies = new TagsMovies();

tagsRoutes.get("/", ensureAuthenticated ,tagsMovies.index);

module.exports = tagsRoutes;