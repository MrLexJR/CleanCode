(() => {

  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActors(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie(movie: Movie) {
    const { title, description, rating, cast } = movie
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthDate: Date): boolean {

    console.log('Crear actor', { fullName, birthDate });
    return true;

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  }

})();
