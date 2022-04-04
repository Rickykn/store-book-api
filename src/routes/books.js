const router = require("express").Router();
const bookControllers = require("../controllers/books");

router.get("/", bookControllers.getAllBooks);
router.post("/", bookControllers.createNewBook);
router.delete("/:id", bookControllers.deleteBookById);

module.exports = router;
