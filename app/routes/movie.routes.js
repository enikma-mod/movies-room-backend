module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Movie
    router.post("/", movies.create);
  
    // Retrieve all moviess
    router.get("/", movies.findAll);
  
    // Retrieve all published moviess
    router.get("/published", movies.findAllPublished);
  
    // Retrieve a single movies with id
    router.get("/:id", movies.findOne);
  
    // Update a movies with id
    router.put("/:id", movies.update);
  
    // Delete a movies with id
    router.delete("/:id", movies.delete);
  
    // Delete all moviess
    router.delete("/", movies.deleteAll);
  
    app.use('/api/movies', router);
};
  