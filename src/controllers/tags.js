const { Tag } = require("../lib/sequelize");
const tagConstrollers = {
  getAllTags: async (req, res) => {
    try {
      const result = await Tag.findAll();

      res.status(200).json({
        message: "find all tags",
        result,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  createNewTag: async (req, res) => {
    const { tag_name } = req.body;

    const newTag = await Tag.create({
      tag_name: tag_name,
    });

    res.status(201).json({
      message: "Success add new tag",
      result: newTag,
    });

    try {
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  deleteTagById: async (req, res) => {
    try {
      const id = req.params.id;

      await Tag.destroy({
        where: {
          id: id,
        },
      });

      return res.status(200).json({
        message: "tags deleted",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = tagConstrollers;
