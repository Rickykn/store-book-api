const { DataTypes } = require("sequelize");

const BookTag = (sequelize) => {
  return sequelize.define("BookTag", {});
};

module.exports = BookTag;
