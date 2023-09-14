const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const mediaFiles = require("../models/mediaFiles");


exports.uploadMedia = async (req, res) => {
  try {
    upload(req, res, async (error) => {
        const {} = req.body;

    })
    const { nickname, real_name } = req.body;

    const newHero = new mediaFiles({
      nickname,
      real_name,
    });
    await newHero.save();
    console.log(newHero);
    return res.status(200).json({ message: "complete create" });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

exports.deleteMedia = async (req, res) => {
  // Реалізація видалення супергероя
};
