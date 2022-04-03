const { Book, Tag, BookTag } = require("../lib/sequelize");

const bookControllers = {
  getAllBooks: async (req, res) => {
    try {
      const findBooks = await Book.findAll({
        include: [
          {
            model: BookTag,
            include: Tag,
          },
        ],
      });

      res.status(200).json({
        message: "Find all book",
        result: findBooks,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = bookControllers;
