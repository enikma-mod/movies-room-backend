module.exports = mongoose => {
    const Movie = mongoose.model(
      "movie",
      mongoose.Schema(
        {
          title: String,
          description: String,
          genre: String,
          release_date: String,
          duration: String,
          image_url: String,
        },
      )
    );
  
    return Movie;
};