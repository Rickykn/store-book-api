const res = require("express/lib/response");
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
  createNewBook: async (req, res) => {
    try {
      const { book_name, cover, stock, tags } = req.body;

      console.log(tags);
      console.log(book_name);
      console.log(cover);
      console.log(stock);

      const newBook = await Book.create({
        book_name,
        cover,
        stock,
      });

      const newBookTags = tags.split(",");

      await BookTag.bulkCreate(
        newBookTags.map((val) => {
          return { book_id: newBook.id, tag_id: val };
        })
      );

      return res.status(201).json({
        message: "book have been added",
        result: newBook,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  deleteBookById: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedBook = await Book.destroy({
        where: {
          id,
        },
      });

      return res.status(201).json({
        message: "Deleted Book",
      });
    } catch (error) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = bookControllers;
