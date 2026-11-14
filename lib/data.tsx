export type MovieGenre = "Action" | "Adventure" | "Crime" | "Drama" | "Music" | "Mystery" | "Sci-Fi" | "Thriller" | "Western";

export interface Movie {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  releaseYear: number;
  durationMinutes: number;
  genres: MovieGenre[];
  directorSlug: string;
  actorSlugs: string[];
  rating: number;
  posterUrl: string;
  backdropUrl: string;
}

export interface Actor {
  id: string;
  slug: string;
  name: string;
  shortBio: string;
  bio: string;
  photoUrl: string;
}

export interface Director {
  id: string;
  slug: string;
  name: string;
  shortBio: string;
  bio: string;
  photoUrl: string;
}

export const actors: Actor[] = [
  {"id": "a1", "slug": "leonardo-dicaprio", "name": "Leonardo DiCaprio", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Leonardo DiCaprio.", "photoUrl": "/images/actors/leonardo-dicaprio.jpg"},
  {"id": "a2", "slug": "joseph-gordon-levitt", "name": "Joseph Gordon-Levitt", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Joseph Gordon-Levitt.", "photoUrl": "/images/actors/joseph-gordon-levitt.jpg"},
  {"id": "a3", "slug": "elliot-page", "name": "Elliot Page", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Elliot Page.", "photoUrl": "/images/actors/elliot-page.jpg"},
  {"id": "a4", "slug": "matthew-mcconaughey", "name": "Matthew McConaughey", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Matthew McConaughey.", "photoUrl": "/images/actors/matthew-mcconaughey.jpg"},
  {"id": "a5", "slug": "anne-hathaway", "name": "Anne Hathaway", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Anne Hathaway.", "photoUrl": "/images/actors/anne-hathaway.jpg"},
  {"id": "a6", "slug": "jessica-chastain", "name": "Jessica Chastain", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Jessica Chastain.", "photoUrl": "/images/actors/jessica-chastain.jpg"},
  {"id": "a7", "slug": "christian-bale", "name": "Christian Bale", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Christian Bale.", "photoUrl": "/images/actors/christian-bale.jpg"},
  {"id": "a8", "slug": "heath-ledger", "name": "Heath Ledger", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Heath Ledger.", "photoUrl": "/images/actors/heath-ledger.jpg"},
  {"id": "a9", "slug": "aaron-eckhart", "name": "Aaron Eckhart", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Aaron Eckhart.", "photoUrl": "/images/actors/aaron-eckhart.jpg"},
  {"id": "a10", "slug": "keanu-reeves", "name": "Keanu Reeves", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Keanu Reeves.", "photoUrl": "/images/actors/keanu-reeves.jpg"},
  {"id": "a11", "slug": "laurence-fishburne", "name": "Laurence Fishburne", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Laurence Fishburne.", "photoUrl": "/images/actors/laurence-fishburne.jpg"},
  {"id": "a12", "slug": "carrie-anne-moss", "name": "Carrie-Anne Moss", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Carrie-Anne Moss.", "photoUrl": "/images/actors/carrie-anne-moss.jpg"},
  {"id": "a13", "slug": "brad-pitt", "name": "Brad Pitt", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Brad Pitt.", "photoUrl": "/images/actors/brad-pitt.jpg"},
  {"id": "a14", "slug": "edward-norton", "name": "Edward Norton", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Edward Norton.", "photoUrl": "/images/actors/edward-norton.jpg"},
  {"id": "a15", "slug": "helena-bonham-carter", "name": "Helena Bonham Carter", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Helena Bonham Carter.", "photoUrl": "/images/actors/helena-bonham-carter.jpg"},
  {"id": "a16", "slug": "morgan-freeman", "name": "Morgan Freeman", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Morgan Freeman.", "photoUrl": "/images/actors/morgan-freeman.jpg"},
  {"id": "a17", "slug": "gwyneth-paltrow", "name": "Gwyneth Paltrow", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Gwyneth Paltrow.", "photoUrl": "/images/actors/gwyneth-paltrow.jpg"},
  {"id": "a18", "slug": "john-travolta", "name": "John Travolta", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring John Travolta.", "photoUrl": "/images/actors/john-travolta.jpg"},
  {"id": "a19", "slug": "samuel-l-jackson", "name": "Samuel L. Jackson", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Samuel L. Jackson.", "photoUrl": "/images/actors/samuel-l-jackson.jpg"},
  {"id": "a20", "slug": "uma-thurman", "name": "Uma Thurman", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Uma Thurman.", "photoUrl": "/images/actors/uma-thurman.jpg"},
  {"id": "a21", "slug": "jamie-foxx", "name": "Jamie Foxx", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Jamie Foxx.", "photoUrl": "/images/actors/jamie-foxx.jpg"},
  {"id": "a22", "slug": "christoph-waltz", "name": "Christoph Waltz", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Christoph Waltz.", "photoUrl": "/images/actors/christoph-waltz.jpg"},
  {"id": "a23", "slug": "tim-robbins", "name": "Tim Robbins", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Tim Robbins.", "photoUrl": "/images/actors/tim-robbins.jpg"},
  {"id": "a24", "slug": "marlon-brando", "name": "Marlon Brando", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Marlon Brando.", "photoUrl": "/images/actors/marlon-brando.jpg"},
  {"id": "a25", "slug": "al-pacino", "name": "Al Pacino", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Al Pacino.", "photoUrl": "/images/actors/al-pacino.jpg"},
  {"id": "a26", "slug": "james-caan", "name": "James Caan", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring James Caan.", "photoUrl": "/images/actors/james-caan.jpg"},
  {"id": "a27", "slug": "song-kang-ho", "name": "Song Kang-ho", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Song Kang-ho.", "photoUrl": "/images/actors/song-kang-ho.jpg"},
  {"id": "a28", "slug": "choi-woo-shik", "name": "Choi Woo-shik", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Choi Woo-shik.", "photoUrl": "/images/actors/choi-woo-shik.jpg"},
  {"id": "a29", "slug": "park-so-dam", "name": "Park So-dam", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Park So-dam.", "photoUrl": "/images/actors/park-so-dam.jpg"},
  {"id": "a30", "slug": "miles-teller", "name": "Miles Teller", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Miles Teller.", "photoUrl": "/images/actors/miles-teller.jpg"},
  {"id": "a31", "slug": "j-k-simmons", "name": "J. K. Simmons", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring J. K. Simmons.", "photoUrl": "/images/actors/j-k-simmons.jpg"},
  {"id": "a32", "slug": "melissa-benoist", "name": "Melissa Benoist", "shortBio": "Actor appearing in the movie catalog.", "bio": "Explore movies featuring Melissa Benoist.", "photoUrl": "/images/actors/melissa-benoist.jpg"},
];

export const directors: Director[] = [
  {"id": "d1", "slug": "christopher-nolan", "name": "Christopher Nolan", "shortBio": "Film director.", "bio": "Explore films directed by Christopher Nolan.", "photoUrl": "/images/directors/christopher-nolan.jpg"},
  {"id": "d2", "slug": "lana-wachowski--lilly-wachowski", "name": "Lana Wachowski & Lilly Wachowski", "shortBio": "Film director.", "bio": "Explore films directed by Lana Wachowski & Lilly Wachowski.", "photoUrl": "/images/directors/lana-wachowski--lilly-wachowski.jpg"},
  {"id": "d3", "slug": "david-fincher", "name": "David Fincher", "shortBio": "Film director.", "bio": "Explore films directed by David Fincher.", "photoUrl": "/images/directors/david-fincher.jpg"},
  {"id": "d4", "slug": "quentin-tarantino", "name": "Quentin Tarantino", "shortBio": "Film director.", "bio": "Explore films directed by Quentin Tarantino.", "photoUrl": "/images/directors/quentin-tarantino.jpg"},
  {"id": "d5", "slug": "frank-darabont", "name": "Frank Darabont", "shortBio": "Film director.", "bio": "Explore films directed by Frank Darabont.", "photoUrl": "/images/directors/frank-darabont.jpg"},
  {"id": "d6", "slug": "francis-ford-coppola", "name": "Francis Ford Coppola", "shortBio": "Film director.", "bio": "Explore films directed by Francis Ford Coppola.", "photoUrl": "/images/directors/francis-ford-coppola.jpg"},
  {"id": "d7", "slug": "bong-joon-ho", "name": "Bong Joon-ho", "shortBio": "Film director.", "bio": "Explore films directed by Bong Joon-ho.", "photoUrl": "/images/directors/bong-joon-ho.jpg"},
  {"id": "d8", "slug": "damien-chazelle", "name": "Damien Chazelle", "shortBio": "Film director.", "bio": "Explore films directed by Damien Chazelle.", "photoUrl": "/images/directors/damien-chazelle.jpg"},
];

export const movies: Movie[] = [
  {"id": "m1", "slug": "inception", "title": "Inception", "shortDescription": "A skilled thief enters dreams to plant an idea in a target’s mind.", "description": "A skilled thief enters dreams to plant an idea in a target’s mind.", "releaseYear": 2010, "durationMinutes": 148, "genres": ["Sci-Fi", "Action", "Thriller"], "directorSlug": "christopher-nolan", "actorSlugs": ["leonardo-dicaprio", "joseph-gordon-levitt", "elliot-page"], "rating": 8.8, "posterUrl": "/images/movies/inception-poster.png", "backdropUrl": "/images/movies/inception-backdrop.jpg"},
  {"id": "m2", "slug": "interstellar", "title": "Interstellar", "shortDescription": "A team of explorers travels beyond Earth in search of humanity’s future.", "description": "A team of explorers travels beyond Earth in search of humanity’s future.", "releaseYear": 2014, "durationMinutes": 169, "genres": ["Sci-Fi", "Drama", "Adventure"], "directorSlug": "christopher-nolan", "actorSlugs": ["matthew-mcconaughey", "anne-hathaway", "jessica-chastain"], "rating": 8.7, "posterUrl": "/images/movies/interstellar-poster.png", "backdropUrl": "/images/movies/interstellar-backdrop.jpg"},
  {"id": "m3", "slug": "the-dark-knight", "title": "The Dark Knight", "shortDescription": "Batman faces a criminal mastermind who throws Gotham into chaos.", "description": "Batman faces a criminal mastermind who throws Gotham into chaos.", "releaseYear": 2008, "durationMinutes": 152, "genres": ["Action", "Crime", "Drama"], "directorSlug": "christopher-nolan", "actorSlugs": ["christian-bale", "heath-ledger", "aaron-eckhart"], "rating": 9.0, "posterUrl": "/images/movies/the-dark-knight-poster.png", "backdropUrl": "/images/movies/the-dark-knight-backdrop.jpg"},
  {"id": "m4", "slug": "the-matrix", "title": "The Matrix", "shortDescription": "A hacker discovers that the world he knows is a simulation.", "description": "A hacker discovers that the world he knows is a simulation.", "releaseYear": 1999, "durationMinutes": 136, "genres": ["Sci-Fi", "Action"], "directorSlug": "lana-wachowski--lilly-wachowski", "actorSlugs": ["keanu-reeves", "laurence-fishburne", "carrie-anne-moss"], "rating": 8.7, "posterUrl": "/images/movies/the-matrix-poster.png", "backdropUrl": "/images/movies/the-matrix-backdrop.jpg"},
  {"id": "m5", "slug": "fight-club", "title": "Fight Club", "shortDescription": "An office worker becomes entangled in an underground fight club.", "description": "An office worker becomes entangled in an underground fight club.", "releaseYear": 1999, "durationMinutes": 139, "genres": ["Drama", "Thriller"], "directorSlug": "david-fincher", "actorSlugs": ["brad-pitt", "edward-norton", "helena-bonham-carter"], "rating": 8.8, "posterUrl": "/images/movies/fight-club-poster.png", "backdropUrl": "/images/movies/fight-club-backdrop.jpg"},
  {"id": "m6", "slug": "se7en", "title": "Se7en", "shortDescription": "Two detectives investigate a series of disturbing crimes.", "description": "Two detectives investigate a series of disturbing crimes.", "releaseYear": 1995, "durationMinutes": 127, "genres": ["Crime", "Mystery", "Thriller"], "directorSlug": "david-fincher", "actorSlugs": ["brad-pitt", "morgan-freeman", "gwyneth-paltrow"], "rating": 8.6, "posterUrl": "/images/movies/se7en-poster.png", "backdropUrl": "/images/movies/se7en-backdrop.jpg"},
  {"id": "m7", "slug": "pulp-fiction", "title": "Pulp Fiction", "shortDescription": "Interconnected stories unfold across the Los Angeles underworld.", "description": "Interconnected stories unfold across the Los Angeles underworld.", "releaseYear": 1994, "durationMinutes": 154, "genres": ["Crime", "Drama"], "directorSlug": "quentin-tarantino", "actorSlugs": ["john-travolta", "samuel-l-jackson", "uma-thurman"], "rating": 8.9, "posterUrl": "/images/movies/pulp-fiction-poster.png", "backdropUrl": "/images/movies/pulp-fiction-backdrop.jpg"},
  {"id": "m8", "slug": "django-unchained", "title": "Django Unchained", "shortDescription": "A freed man and a bounty hunter journey across the American South.", "description": "A freed man and a bounty hunter journey across the American South.", "releaseYear": 2012, "durationMinutes": 165, "genres": ["Western", "Drama"], "directorSlug": "quentin-tarantino", "actorSlugs": ["jamie-foxx", "christoph-waltz", "leonardo-dicaprio"], "rating": 8.5, "posterUrl": "/images/movies/django-unchained-poster.png", "backdropUrl": "/images/movies/django-unchained-backdrop.jpg"},
  {"id": "m9", "slug": "the-shawshank-redemption", "title": "The Shawshank Redemption", "shortDescription": "Two prisoners form a lasting friendship and hold on to hope.", "description": "Two prisoners form a lasting friendship and hold on to hope.", "releaseYear": 1994, "durationMinutes": 142, "genres": ["Drama"], "directorSlug": "frank-darabont", "actorSlugs": ["tim-robbins", "morgan-freeman"], "rating": 9.3, "posterUrl": "/images/movies/the-shawshank-redemption-poster.png", "backdropUrl": "/images/movies/the-shawshank-redemption-backdrop.jpg"},
  {"id": "m10", "slug": "the-godfather", "title": "The Godfather", "shortDescription": "A powerful family navigates loyalty and succession in organized crime.", "description": "A powerful family navigates loyalty and succession in organized crime.", "releaseYear": 1972, "durationMinutes": 175, "genres": ["Crime", "Drama"], "directorSlug": "francis-ford-coppola", "actorSlugs": ["marlon-brando", "al-pacino", "james-caan"], "rating": 9.2, "posterUrl": "/images/movies/the-godfather-poster.png", "backdropUrl": "/images/movies/the-godfather-backdrop.jpg"},
  {"id": "m11", "slug": "parasite", "title": "Parasite", "shortDescription": "Two families from different social classes become unexpectedly connected.", "description": "Two families from different social classes become unexpectedly connected.", "releaseYear": 2019, "durationMinutes": 132, "genres": ["Thriller", "Drama"], "directorSlug": "bong-joon-ho", "actorSlugs": ["song-kang-ho", "choi-woo-shik", "park-so-dam"], "rating": 8.5, "posterUrl": "/images/movies/parasite-poster.png", "backdropUrl": "/images/movies/parasite-backdrop.jpg"},
  {"id": "m12", "slug": "whiplash", "title": "Whiplash", "shortDescription": "A young jazz drummer trains under a demanding instructor.", "description": "A young jazz drummer trains under a demanding instructor.", "releaseYear": 2014, "durationMinutes": 107, "genres": ["Drama", "Music"], "directorSlug": "damien-chazelle", "actorSlugs": ["miles-teller", "j-k-simmons", "melissa-benoist"], "rating": 8.5, "posterUrl": "/images/movies/whiplash-poster.png", "backdropUrl": "/images/movies/whiplash-backdrop.jpg"},
];

export const getAllMovies = (): Movie[] => movies;
export const getMovieBySlug = (slug: string): Movie | undefined => movies.find(movie => movie.slug === slug);
export const getAllActors = (): Actor[] => actors;
export const getActorBySlug = (slug: string): Actor | undefined => actors.find(actor => actor.slug === slug);
export const getAllDirectors = (): Director[] => directors;
export const getDirectorBySlug = (slug: string): Director | undefined => directors.find(director => director.slug === slug);
export const getMoviesByActor = (actorSlug: string): Movie[] => movies.filter(movie => movie.actorSlugs.includes(actorSlug));
export const getMoviesByDirector = (directorSlug: string): Movie[] => movies.filter(movie => movie.directorSlug === directorSlug);
export const getMoviesByGenre = (genre: MovieGenre): Movie[] => movies.filter(movie => movie.genres.includes(genre));
export const getMovieGenres = (): MovieGenre[] => Array.from(new Set(movies.flatMap(movie => movie.genres))).sort();
export const searchMovies = (query: string): Movie[] => movies.filter(movie => movie.title.toLowerCase().includes(query.trim().toLowerCase()));
