const { Sequelize } = require("sequelize");
const mysqlConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

const Book = require("../models/book")(sequelize);
const Tag = require("../models/tag")(sequelize);
const BookTag = require("../models/book-tag")(sequelize);

Book.hasMany(BookTag, { foreignKey: "book_id" });
BookTag.belongsTo(Book, { foreignKey: "book_id" });
Tag.hasMany(BookTag, { foreignKey: "tag_id" });
BookTag.belongsTo(Tag, { foreignKey: "tag_id" });

module.exports = {
  sequelize,
  Book,
  Tag,
  BookTag,
};
