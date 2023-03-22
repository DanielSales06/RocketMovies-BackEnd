const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersMovies = require("../controllers/UsersMovies")
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersMovies = new UsersMovies();
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersMovies.create);
usersRoutes.put("/", ensureAuthenticated,usersMovies.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;