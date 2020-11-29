const { Author } = require('../models/author.models');


//C R U D
module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findSingleAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then(singleAuthor => res.json(singleAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
