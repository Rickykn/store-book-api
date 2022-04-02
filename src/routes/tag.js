const router = require("express").Router();
const tagConstrollers = require("../controllers/tags");

router.get("/", tagConstrollers.getAllTags);
router.post("/", tagConstrollers.createNewTag);
router.patch("/");
router.delete("/");

module.exports = router;
