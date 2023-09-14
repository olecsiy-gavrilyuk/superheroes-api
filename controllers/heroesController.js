
const superHero = require("../models/superHero");

// Додавання нового супергероя
exports.createSuperHero = async (req, res) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const newHero = new superHero({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });
    await newHero.save()
    console.log(newHero);
    return res.status(200).json({message: 'complete create'});

  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

// Отримання списку всіх супергероїв
exports.getAllSuperHeroes = async (req, res) => {
  try {
    const {
      limit = 5,
      page = 1,
    } = req.query;

    const superHeroes = await superHero.find().skip(limit * (page - 1)).limit(limit);
    const totalSuperHeroes = await superHero.countDocuments();

    return res.status(200).json({ data: superHeroes, limit, page, totalSuperHeroes,totalPages: Math.ceil(totalSuperHeroes / limit)})
  } catch (error) {

  }
};


// Оновлення інформації про супергероя за ID
exports.updateSuperHero = async (req, res) => {
  // Реалізація оновлення інформації про супергероя
};

// Видалення супергероя за ID
exports.deleteSuperHero = async (req, res) => {
  // Реалізація видалення супергероя
};
