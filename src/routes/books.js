const router = require("express").Router();
const bookControllers = require("../controllers/books");

router.get("/", bookControllers.getAllBooks);
router.post("/");

module.exports = router;
