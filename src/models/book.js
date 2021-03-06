const { DataTypes } = require("sequelize");

const Book = (sequelize) => {
  return sequelize.define("Book", {
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};

module.exports = Book;
