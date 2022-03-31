const tagConstrollers = {
  getAllTags: (req, res) => {
    try {
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = tagConstrollers;
