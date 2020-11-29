const AuthorController = require("../controllers/author.controller");

module.exports = app => {
  app.get("/api/authors/", AuthorController.findAllAuthors);
  app.get("/api/authors/:id", AuthorController.findSingleAuthor);
  app.put("/api/authors/:id", AuthorController.updateExistingAuthor);
  app.post("/api/authors/new", AuthorController.createNewAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};


