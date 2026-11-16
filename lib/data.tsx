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
}

export interface Director {
  id: string;
  slug: string;
  name: string;
  shortBio: string;
  bio: string;
}


export const actors: Actor[] = [
  {
    id: "a1",
    slug: "leonardo-dicaprio",
    name: "Leonardo DiCaprio",
    shortBio: "Academy Award-winning actor known for his intense performances and collaborations with acclaimed filmmakers.",
    bio: "Leonardo DiCaprio is an American actor and producer celebrated for his versatility and commitment to complex characters. He rose to international fame with Titanic and went on to deliver acclaimed performances in The Departed, Inception, and The Wolf of Wall Street. His collaboration with director Martin Scorsese has produced some of the most memorable films of his career. He won the Academy Award for Best Actor for The Revenant and is also known for his environmental advocacy."
  },
  {
    id: "a2",
    slug: "joseph-gordon-levitt",
    name: "Joseph Gordon-Levitt",
    shortBio: "Versatile actor known for his charismatic performances in independent films and major Hollywood productions.",
    bio: "Joseph Gordon-Levitt is an American actor and filmmaker who began his career as a child performer. He gained recognition for his work in 3rd Rock from the Sun before establishing himself in films such as 500 Days of Summer, Inception, and Looper. His performances often combine emotional vulnerability with intelligence and understated humor. Beyond acting, he founded HitRecord, a collaborative creative platform."
  },
  {
    id: "a3",
    slug: "elliot-page",
    name: "Elliot Page",
    shortBio: "Acclaimed actor recognized for emotionally compelling performances in independent cinema and science fiction.",
    bio: "Elliot Page is a Canadian actor and producer who gained international recognition for his Academy Award-nominated performance in Juno. He has appeared in films including Hard Candy, Inception, and the X-Men franchise. Page is also widely known for portraying Viktor Hargreeves in the television series The Umbrella Academy. His career spans independent dramas, blockbuster productions, and television."
  },
  {
    id: "a4",
    slug: "matthew-mcconaughey",
    name: "Matthew McConaughey",
    shortBio: "Academy Award-winning actor celebrated for his distinctive screen presence and powerful dramatic roles.",
    bio: "Matthew McConaughey is an American actor who first attracted attention with Dazed and Confused. After years of starring in romantic comedies, he transitioned into critically acclaimed dramatic roles in films such as Mud, Dallas Buyers Club, and Interstellar. His performance in Dallas Buyers Club earned him the Academy Award for Best Actor. He is also recognized for his leading role in the first season of True Detective."
  },
  {
    id: "a5",
    slug: "anne-hathaway",
    name: "Anne Hathaway",
    shortBio: "Award-winning actress known for her versatility across musicals, dramas, comedies, and blockbuster films.",
    bio: "Anne Hathaway is an American actress who rose to prominence with The Princess Diaries before building a diverse career in film. She earned widespread acclaim for her performances in Rachel Getting Married, The Devil Wears Prada, and Les Misérables. Her role as Fantine in Les Misérables won her the Academy Award for Best Supporting Actress. She also appeared in Christopher Nolan's The Dark Knight Rises and Interstellar."
  },
  {
    id: "a6",
    slug: "jessica-chastain",
    name: "Jessica Chastain",
    shortBio: "Academy Award-winning actress admired for portraying intelligent, determined, and emotionally complex characters.",
    bio: "Jessica Chastain is an American actress and producer known for her commanding performances in film and television. She gained widespread recognition through The Help, Zero Dark Thirty, and The Tree of Life. Her filmography also includes Interstellar, Molly's Game, and The Martian. Chastain won the Academy Award for Best Actress for her portrayal of Tammy Faye Bakker in The Eyes of Tammy Faye."
  },
  {
    id: "a7",
    slug: "christian-bale",
    name: "Christian Bale",
    shortBio: "Academy Award-winning actor famous for his remarkable transformations and psychologically intense performances.",
    bio: "Christian Bale is a British actor renowned for his dedication to physically and emotionally demanding roles. He gained early recognition in Empire of the Sun and later starred in American Psycho and The Machinist. Bale portrayed Bruce Wayne in Christopher Nolan's acclaimed Dark Knight trilogy, bringing a grounded interpretation to the superhero. He won the Academy Award for Best Supporting Actor for The Fighter and received further acclaim for American Hustle and Vice."
  },
  {
    id: "a8",
    slug: "heath-ledger",
    name: "Heath Ledger",
    shortBio: "Acclaimed Australian actor remembered for his extraordinary performances, particularly as the Joker in The Dark Knight.",
    bio: "Heath Ledger was an Australian actor whose performances left a lasting influence on modern cinema. He gained recognition in 10 Things I Hate About You before demonstrating his dramatic range in Monster's Ball and Brokeback Mountain. His portrayal of the Joker in Christopher Nolan's The Dark Knight became one of the most celebrated performances in superhero cinema. Ledger received a posthumous Academy Award for Best Supporting Actor for the role in 2009."
  },
  {
    id: "a9",
    slug: "aaron-eckhart",
    name: "Aaron Eckhart",
    shortBio: "American actor recognized for his compelling portrayals of ambitious, conflicted, and morally complex characters.",
    bio: "Aaron Eckhart is an American actor who gained critical recognition for his performance in In the Company of Men. He later appeared in films such as Erin Brockovich, Thank You for Smoking, and The Dark Knight. His portrayal of Harvey Dent in The Dark Knight explored the transformation of an idealistic public figure into a tragic antagonist. Eckhart has continued working across dramas, thrillers, and action films."
  },
  {
    id: "a10",
    slug: "keanu-reeves",
    name: "Keanu Reeves",
    shortBio: "Internationally recognized actor and action star best known for The Matrix and John Wick franchises.",
    bio: "Keanu Reeves is a Canadian actor whose career spans action, science fiction, comedy, and drama. He gained popularity through Bill & Ted's Excellent Adventure, Point Break, and Speed before achieving iconic status as Neo in The Matrix. Reeves later revitalized his action career with the John Wick franchise, performing demanding stunt sequences and martial arts choreography. His understated acting style and enduring screen presence have made him a recognizable figure in popular cinema."
  },
  {
    id: "a11",
    slug: "laurence-fishburne",
    name: "Laurence Fishburne",
    shortBio: "Award-winning actor celebrated for his commanding presence and memorable roles in film, television, and theater.",
    bio: "Laurence Fishburne is an American actor and producer with a career spanning several decades. He appeared in Apocalypse Now as a teenager and later earned acclaim for his performances in Boyz n the Hood and What's Love Got to Do with It. Fishburne became internationally recognized for portraying Morpheus in The Matrix trilogy. His extensive work also includes television, theater, and a Tony Award-winning performance in Two Trains Running."
  },
  {
    id: "a12",
    slug: "carrie-anne-moss",
    name: "Carrie-Anne Moss",
    shortBio: "Canadian actress best known for portraying the fearless and iconic Trinity in The Matrix franchise.",
    bio: "Carrie-Anne Moss is a Canadian actress whose breakthrough role came as Trinity in the science-fiction film The Matrix. Her performance combined physical precision, emotional depth, and a distinctive screen presence. She subsequently appeared in acclaimed films such as Memento and Chocolat. Moss also portrayed Jeri Hogarth in Marvel television productions and returned to the role of Trinity in The Matrix Resurrections."
  },
  {
    id: "a13",
    slug: "brad-pitt",
    name: "Brad Pitt",
    shortBio: "Academy Award-winning actor and producer known for his charismatic performances and diverse filmography.",
    bio: "Brad Pitt is an American actor and film producer who became a major Hollywood star during the 1990s. His performances in Se7en, Fight Club, Twelve Monkeys, and The Curious Case of Benjamin Button established his reputation for taking on unconventional roles. He later appeared in Inglourious Basterds, Moneyball, and Once Upon a Time in Hollywood, winning the Academy Award for Best Supporting Actor for the latter. Through Plan B Entertainment, he has also produced numerous acclaimed films."
  },
  {
    id: "a14",
    slug: "edward-norton",
    name: "Edward Norton",
    shortBio: "Acclaimed actor and filmmaker recognized for portraying intelligent, unpredictable, and psychologically complex characters.",
    bio: "Edward Norton is an American actor, filmmaker, and producer who made an acclaimed debut in Primal Fear. He gained further recognition through American History X and Fight Club, demonstrating a remarkable ability to portray conflicted characters. His later work includes The Illusionist, Birdman, and Glass Onion: A Knives Out Mystery. Norton has also worked behind the camera as a director and screenwriter."
  },
  {
    id: "a15",
    slug: "helena-bonham-carter",
    name: "Helena Bonham Carter",
    shortBio: "British actress celebrated for her eccentric characters, distinctive style, and memorable dramatic performances.",
    bio: "Helena Bonham Carter is a British actress whose career includes period dramas, fantasy films, and unconventional contemporary roles. She gained early recognition in A Room with a View and later appeared in Fight Club, Sweeney Todd, and the Harry Potter franchise. Her collaborations with director Tim Burton became a defining feature of her filmography. She earned an Academy Award nomination for portraying Queen Elizabeth in The King's Speech and played Princess Margaret in The Crown."
  },
  {
    id: "a16",
    slug: "morgan-freeman",
    name: "Morgan Freeman",
    shortBio: "Academy Award-winning actor admired for his distinctive voice, calm authority, and powerful dramatic performances.",
    bio: "Morgan Freeman is an American actor, producer, and narrator with a career spanning film, television, and theater. He received widespread recognition for Street Smart, Driving Miss Daisy, and The Shawshank Redemption. Freeman won the Academy Award for Best Supporting Actor for Million Dollar Baby and portrayed Lucius Fox in Christopher Nolan's Dark Knight trilogy. His recognizable voice has also made him a prominent narrator of documentaries and films."
  },
  {
    id: "a17",
    slug: "gwyneth-paltrow",
    name: "Gwyneth Paltrow",
    shortBio: "Academy Award-winning actress known for her performances in romantic dramas, thrillers, and major film franchises.",
    bio: "Gwyneth Paltrow is an American actress who rose to prominence through films such as Se7en, Emma, and Sliding Doors. Her performance in Shakespeare in Love earned her the Academy Award for Best Actress. She later appeared in The Talented Mr. Ripley and The Royal Tenenbaums, demonstrating her range across different genres. Paltrow also became widely recognized for portraying Pepper Potts in the Marvel Cinematic Universe."
  },
  {
    id: "a18",
    slug: "john-travolta",
    name: "John Travolta",
    shortBio: "Hollywood actor known for his iconic performances in Saturday Night Fever, Grease, and Pulp Fiction.",
    bio: "John Travolta is an American actor and singer whose career began with the television series Welcome Back, Kotter. He became an international star through Saturday Night Fever and Grease, both of which showcased his dancing abilities and charismatic screen presence. His career experienced a major resurgence with Quentin Tarantino's Pulp Fiction, earning him an Academy Award nomination. Travolta has since appeared in films spanning comedy, drama, and action."
  },
  {
    id: "a19",
    slug: "samuel-l-jackson",
    name: "Samuel L. Jackson",
    shortBio: "Prolific actor recognized for his commanding delivery, unforgettable dialogue, and iconic cinematic characters.",
    bio: "Samuel L. Jackson is an American actor whose extensive filmography spans independent cinema and major Hollywood franchises. He gained widespread recognition through his collaborations with Spike Lee and Quentin Tarantino, particularly his performance as Jules Winnfield in Pulp Fiction. Jackson later appeared in films including Django Unchained, The Hateful Eight, and the Star Wars prequel trilogy. He is also widely known for portraying Nick Fury in the Marvel Cinematic Universe."
  },
  {
    id: "a20",
    slug: "uma-thurman",
    name: "Uma Thurman",
    shortBio: "Acclaimed actress celebrated for her striking performances in Pulp Fiction and the Kill Bill films.",
    bio: "Uma Thurman is an American actress whose career includes romantic dramas, thrillers, and action films. She gained recognition through Dangerous Liaisons before receiving an Academy Award nomination for her performance as Mia Wallace in Pulp Fiction. Her portrayal of the Bride in Quentin Tarantino's Kill Bill films became one of her most iconic roles. Thurman's performances are often noted for their combination of intensity, elegance, and dark humor."
  },
  {
    id: "a21",
    slug: "jamie-foxx",
    name: "Jamie Foxx",
    shortBio: "Academy Award-winning actor, comedian, and musician known for his versatility across drama, comedy, and action.",
    bio: "Jamie Foxx is an American actor, comedian, and singer who first gained popularity through television comedy. He earned widespread critical acclaim for portraying Ray Charles in the biographical film Ray, winning the Academy Award for Best Actor. His other notable performances include Collateral, Django Unchained, and Just Mercy. Foxx has also enjoyed a successful music career, demonstrating his talents across multiple entertainment industries."
  },
  {
    id: "a22",
    slug: "christoph-waltz",
    name: "Christoph Waltz",
    shortBio: "Two-time Academy Award winner renowned for his sophisticated, witty, and often unpredictable characters.",
    bio: "Christoph Waltz is an Austrian-German actor who achieved international recognition through his collaboration with Quentin Tarantino. His portrayal of Colonel Hans Landa in Inglourious Basterds earned him the Academy Award for Best Supporting Actor. He received a second Oscar in the same category for playing Dr. King Schultz in Django Unchained. Waltz has also appeared in films such as Big Eyes, Spectre, and Alita: Battle Angel."
  },
  {
    id: "a23",
    slug: "tim-robbins",
    name: "Tim Robbins",
    shortBio: "Academy Award-winning actor and filmmaker best known for his memorable performance in The Shawshank Redemption.",
    bio: "Tim Robbins is an American actor, director, and screenwriter whose work spans film, theater, and television. He gained recognition through Bull Durham and The Player before portraying Andy Dufresne in The Shawshank Redemption. His performance in Mystic River earned him the Academy Award for Best Supporting Actor. Robbins has also directed films including Dead Man Walking and remains active in theater and television."
  },
  {
    id: "a24",
    slug: "marlon-brando",
    name: "Marlon Brando",
    shortBio: "Legendary actor whose naturalistic performances transformed modern screen acting and influenced generations of performers.",
    bio: "Marlon Brando was an American actor widely regarded as one of the most influential performers in cinema history. He revolutionized screen acting through emotionally authentic performances in A Streetcar Named Desire and On the Waterfront, winning his first Academy Award for the latter. His portrayal of Vito Corleone in The Godfather became one of cinema's most iconic characters and earned him a second Oscar. Brando's approach to character development and naturalistic acting left a lasting impact on the film industry."
  },
  {
    id: "a25",
    slug: "al-pacino",
    name: "Al Pacino",
    shortBio: "Legendary Academy Award-winning actor celebrated for his intense performances in crime dramas and cinematic classics.",
    bio: "Al Pacino is an American actor whose career has produced some of the most memorable performances in modern cinema. He achieved international fame as Michael Corleone in The Godfather trilogy and later starred in Serpico, Dog Day Afternoon, and Scarface. His portrayal of a blind retired officer in Scent of a Woman earned him the Academy Award for Best Actor. Pacino is also highly respected for his extensive work in theater and his powerful, emotionally charged acting style."
  },
  {
    id: "a26",
    slug: "james-caan",
    name: "James Caan",
    shortBio: "Acclaimed American actor remembered for his charismatic and forceful performances in classic Hollywood films.",
    bio: "James Caan was an American actor best known for portraying Sonny Corleone in Francis Ford Coppola's The Godfather, a performance that earned him an Academy Award nomination. He also starred in films such as The Gambler, Rollerball, and Misery, demonstrating his range across crime dramas and psychological thrillers. Later audiences recognized him for his comedic role in Elf. His energetic screen presence and memorable characters established his place in American cinema."
  },
  {
    id: "a27",
    slug: "song-kang-ho",
    name: "Song Kang-ho",
    shortBio: "Celebrated South Korean actor known for his collaborations with Bong Joon-ho and powerful dramatic performances.",
    bio: "Song Kang-ho is a South Korean actor regarded as one of the leading figures in contemporary Korean cinema. He has collaborated frequently with director Bong Joon-ho, appearing in Memories of Murder, The Host, Snowpiercer, and Parasite. His performances often blend humor, realism, and emotional complexity. Song won the Best Actor award at the Cannes Film Festival for his role in Broker, further strengthening his international reputation."
  },
  {
    id: "a28",
    slug: "choi-woo-shik",
    name: "Choi Woo-shik",
    shortBio: "South Korean actor recognized for his natural performances in Parasite, Train to Busan, and contemporary dramas.",
    bio: "Choi Woo-shik is a South Korean actor who has built a career across film and television. He gained critical recognition for his leading performance in Set Me Free and appeared in the internationally successful films Train to Busan and Parasite. In Parasite, he portrayed Kim Ki-woo, a young man whose ambitions drive much of the story. Choi has also starred in popular television dramas including Our Beloved Summer."
  },
  {
    id: "a29",
    slug: "park-so-dam",
    name: "Park So-dam",
    shortBio: "South Korean actress known for her expressive performances in Parasite and a range of acclaimed films and dramas.",
    bio: "Park So-dam is a South Korean actress who gained recognition through independent cinema and acclaimed dramatic roles. She appeared in films such as The Silenced and The Priests before achieving international fame with Bong Joon-ho's Parasite. Her portrayal of Kim Ki-jung showcased her sharp comedic timing and confident screen presence. She has also starred in television productions including Record of Youth and Death's Game."
  },
  {
    id: "a30",
    slug: "miles-teller",
    name: "Miles Teller",
    shortBio: "American actor known for his emotionally intense performances in Whiplash and Top Gun: Maverick.",
    bio: "Miles Teller is an American actor who gained early recognition through Rabbit Hole and The Spectacular Now. His breakthrough performance came in Whiplash, where he portrayed an ambitious young jazz drummer struggling under an uncompromising instructor. He later appeared in films such as Bleed for This and Only the Brave. Teller reached a wider audience through his role as Bradley 'Rooster' Bradshaw in Top Gun: Maverick."
  },
  {
    id: "a31",
    slug: "j-k-simmons",
    name: "J. K. Simmons",
    shortBio: "Academy Award-winning character actor celebrated for his commanding performances and exceptional versatility.",
    bio: "J. K. Simmons is an American actor whose extensive career includes film, television, theater, and voice acting. He became widely recognized for portraying J. Jonah Jameson in the Spider-Man films and appeared in television series such as Oz and The Closer. His portrayal of the demanding music instructor Terence Fletcher in Whiplash earned him the Academy Award for Best Supporting Actor. Simmons has also lent his distinctive voice to numerous animated productions."
  },
  {
    id: "a32",
    slug: "melissa-benoist",
    name: "Melissa Benoist",
    shortBio: "American actress and singer recognized for her performances in Whiplash, Glee, and Supergirl.",
    bio: "Melissa Benoist is an American actress and singer who gained recognition through her role as Marley Rose in the musical television series Glee. She appeared in the critically acclaimed film Whiplash before becoming widely known for portraying Kara Danvers in the television series Supergirl. Her performances have combined musical talent, emotional warmth, and dramatic range. Benoist has also performed on Broadway, including a leading role in Beautiful: The Carole King Musical."
  }
];



export const directors: Director[] = [
  {
    id: "d1",
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    shortBio: "Academy Award-winning filmmaker celebrated for his complex narratives, stunning visuals, and thought-provoking science fiction.",
    bio: "Christopher Nolan is a British-American filmmaker renowned for his ambitious storytelling and innovative approach to cinema. He gained recognition with Memento before achieving worldwide success with The Dark Knight trilogy, Inception, and Interstellar. His films frequently explore themes of time, memory, identity, and the nature of reality, often incorporating nonlinear narratives and practical effects. Nolan also directed Dunkirk and Oppenheimer, winning the Academy Award for Best Director for the latter. His distinctive filmmaking style has made him one of the most influential directors of contemporary cinema."
  },
  {
    id: "d2",
    slug: "the-wachowskis",
    name: "The Wachowskis",
    shortBio: "Visionary filmmaking duo known for revolutionizing science-fiction cinema with The Matrix and its groundbreaking visual effects.",
    bio: "Lana and Lilly Wachowski are American filmmakers best known for creating The Matrix, one of the most influential science-fiction films of modern cinema. Their work combines philosophical ideas, innovative action choreography, and groundbreaking visual effects. Following the success of The Matrix, they directed its original sequels and collaborated on ambitious projects including Speed Racer, Cloud Atlas, and Jupiter Ascending. They also co-created the television series Sense8, which explored identity, empathy, and human connection. Their storytelling frequently challenges conventional ideas about reality, freedom, and individuality."
  },
  {
    id: "d3",
    slug: "david-fincher",
    name: "David Fincher",
    shortBio: "Acclaimed filmmaker recognized for his dark psychological thrillers, meticulous direction, and distinctive visual atmosphere.",
    bio: "David Fincher is an American film director and producer celebrated for his precise visual style and psychologically complex storytelling. He gained widespread recognition with Se7en and Fight Club, films that established his reputation for exploring obsession, morality, and the darker aspects of human behavior. His later work includes Zodiac, The Social Network, Gone Girl, and The Girl with the Dragon Tattoo. Fincher is known for his controlled cinematography, atmospheric lighting, and attention to detail. He has also directed and produced television projects, including Mindhunter and House of Cards."
  },
  {
    id: "d4",
    slug: "quentin-tarantino",
    name: "Quentin Tarantino",
    shortBio: "Academy Award-winning filmmaker famous for his sharp dialogue, nonlinear storytelling, and distinctive blend of genres.",
    bio: "Quentin Tarantino is an American filmmaker, screenwriter, and producer known for his unconventional narratives and unmistakable cinematic style. He made his directorial debut with Reservoir Dogs before achieving international recognition with Pulp Fiction, which won the Academy Award for Best Original Screenplay. His filmography includes Kill Bill, Inglourious Basterds, Django Unchained, and Once Upon a Time in Hollywood. Tarantino frequently combines dark humor, stylized action, memorable dialogue, and references to classic cinema. His distinctive approach to storytelling has had a significant influence on contemporary filmmaking."
  },
  {
    id: "d5",
    slug: "frank-darabont",
    name: "Frank Darabont",
    shortBio: "Acclaimed filmmaker best known for emotionally powerful adaptations of Stephen King's stories, including The Shawshank Redemption.",
    bio: "Frank Darabont is an American filmmaker and screenwriter recognized for his emotionally resonant storytelling and memorable character-driven dramas. He made his feature directorial debut with The Shawshank Redemption, an adaptation of Stephen King's novella that became one of the most beloved films in cinema history. He later directed The Green Mile and The Mist, further demonstrating his ability to adapt King's work across different genres. Darabont also developed the television series The Walking Dead and served as its original showrunner. His films frequently explore hope, resilience, morality, and human relationships."
  },
  {
    id: "d6",
    slug: "francis-ford-coppola",
    name: "Francis Ford Coppola",
    shortBio: "Legendary filmmaker behind The Godfather trilogy and Apocalypse Now, widely regarded as a pioneer of New Hollywood cinema.",
    bio: "Francis Ford Coppola is an American filmmaker, screenwriter, and producer who played a central role in the New Hollywood movement of the 1970s. He achieved international acclaim with The Godfather and The Godfather Part II, both of which won the Academy Award for Best Picture. His other celebrated films include The Conversation and Apocalypse Now, which demonstrated his ambitious visual storytelling and exploration of power, morality, and human conflict. Coppola has received multiple Academy Awards throughout his career and has influenced generations of filmmakers. His contributions have established him as one of the defining directors in American cinema."
  },
  {
    id: "d7",
    slug: "bong-joon-ho",
    name: "Bong Joon-ho",
    shortBio: "Academy Award-winning South Korean filmmaker known for blending social commentary, dark humor, and genre-defying storytelling.",
    bio: "Bong Joon-ho is a South Korean filmmaker celebrated for combining compelling entertainment with sharp social criticism. He gained international recognition through films such as Memories of Murder, The Host, Snowpiercer, and Okja. His 2019 film Parasite became a global phenomenon, winning the Palme d'Or at Cannes and four Academy Awards, including Best Picture and Best Director. Bong frequently explores class inequality, institutional power, and social tensions through suspense, satire, and unexpected shifts in tone. His distinctive approach has made him one of the most internationally recognized filmmakers in contemporary Korean cinema."
  },
  {
    id: "d8",
    slug: "damien-chazelle",
    name: "Damien Chazelle",
    shortBio: "Academy Award-winning director known for visually dynamic films exploring ambition, artistic passion, and personal sacrifice.",
    bio: "Damien Chazelle is an American filmmaker and screenwriter recognized for his energetic visual storytelling and fascination with music and artistic ambition. He gained critical acclaim with Whiplash, a psychological drama examining the demanding relationship between a young drummer and his instructor. His next film, La La Land, earned widespread recognition and made him the youngest recipient of the Academy Award for Best Director. Chazelle later directed First Man and Babylon, exploring historical achievement and the changing world of cinema. His films often examine the tension between personal relationships, creative ambition, and the pursuit of excellence."
  }
];



export const movies: Movie[] = [
  { "id": "m1", "slug": "inception", "title": "Inception", "shortDescription": "A skilled thief enters dreams to plant an idea in a target’s mind.", "description": "Dom Cobb is a skilled thief who specializes in extracting valuable secrets from people's subconscious minds while they dream. When he is offered a chance to reclaim his former life, he must accomplish an almost impossible task: planting an idea in someone's mind instead of stealing one. As Cobb and his team navigate increasingly complex layers of dreams, the boundaries between reality and imagination begin to blur.", "releaseYear": 2010, "durationMinutes": 148, "genres": ["Sci-Fi", "Action", "Thriller"], "directorSlug": "christopher-nolan", "actorSlugs": ["leonardo-dicaprio", "joseph-gordon-levitt", "elliot-page"], "rating": 8.8, "posterUrl": "/images/movies/inception-poster.png", "backdropUrl": "/images/movies/inception-backdrop.png" },
  { "id": "m2", "slug": "interstellar", "title": "Interstellar", "shortDescription": "A team of explorers travels beyond Earth in search of humanity’s future.", "description": "In a future where Earth is becoming increasingly uninhabitable, former NASA pilot Cooper is recruited for a daring mission beyond the solar system. Alongside a team of scientists, he travels through a mysterious wormhole in search of a new home for humanity. As the explorers confront the mysteries of space and time, Cooper must balance his responsibility to the mission with his desire to return to his family.", "releaseYear": 2014, "durationMinutes": 169, "genres": ["Sci-Fi", "Drama", "Adventure"], "directorSlug": "christopher-nolan", "actorSlugs": ["matthew-mcconaughey", "anne-hathaway", "jessica-chastain"], "rating": 8.7, "posterUrl": "/images/movies/interstellar-poster.png", "backdropUrl": "/images/movies/interstellar-backdrop.png" },
  { "id": "m3", "slug": "the-dark-knight", "title": "The Dark Knight", "shortDescription": "Batman faces a criminal mastermind who throws Gotham into chaos.", "description": "As Batman continues his fight against organized crime in Gotham City, a mysterious criminal known as the Joker emerges with a plan to spread chaos and undermine everything Batman stands for. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman attempts to restore order to the city. However, the Joker's unpredictable actions force him to confront difficult moral choices and question the limits of justice.", "releaseYear": 2008, "durationMinutes": 152, "genres": ["Action", "Crime", "Drama"], "directorSlug": "christopher-nolan", "actorSlugs": ["christian-bale", "heath-ledger", "aaron-eckhart"], "rating": 9.0, "posterUrl": "/images/movies/the-dark-knight-poster.png", "backdropUrl": "/images/movies/the-dark-knight-backdrop.png" },
  { "id": "m4", "slug": "the-matrix", "title": "The Matrix", "shortDescription": "A hacker discovers that the world he knows is a simulation.", "description": "Thomas Anderson, a computer programmer who secretly operates as the hacker Neo, begins to question the true nature of his reality. After meeting the mysterious Morpheus, he discovers that the world around him is an elaborate simulation created to control humanity. Neo joins a group of rebels fighting to free humanity, while struggling to understand his role in a conflict that could change the future of the human race.", "releaseYear": 1999, "durationMinutes": 136, "genres": ["Sci-Fi", "Action"], "directorSlug": "the-wachowskis", "actorSlugs": ["keanu-reeves", "laurence-fishburne", "carrie-anne-moss"], "rating": 8.7, "posterUrl": "/images/movies/the-matrix-poster.png", "backdropUrl": "/images/movies/the-matrix-backdrop.png" },
  { "id": "m5", "slug": "fight-club", "title": "Fight Club", "shortDescription": "An office worker becomes entangled in an underground fight club.", "description": "An unnamed office worker struggles with insomnia, dissatisfaction, and the emptiness of his consumer-driven lifestyle. His life takes an unexpected turn when he meets the charismatic and rebellious Tyler Durden, with whom he establishes an underground fight club. What begins as an escape from everyday frustrations gradually evolves into something far more dangerous, challenging his understanding of identity, freedom, and control.", "releaseYear": 1999, "durationMinutes": 139, "genres": ["Drama", "Thriller"], "directorSlug": "david-fincher", "actorSlugs": ["brad-pitt", "edward-norton", "helena-bonham-carter"], "rating": 8.8, "posterUrl": "/images/movies/fight-club-poster.png", "backdropUrl": "/images/movies/fight-club-backdrop.png" },
  { "id": "m6", "slug": "se7en", "title": "Se7en", "shortDescription": "Two detectives investigate a series of disturbing crimes.", "description": "Veteran detective William Somerset and his ambitious new partner David Mills investigate a series of murders inspired by the seven deadly sins. As they follow a trail of carefully planned crimes, the detectives become increasingly involved in the killer's disturbing vision of morality and punishment. Their investigation leads them through a dark and unforgiving city, where every discovery brings them closer to a confrontation neither could have anticipated.", "releaseYear": 1995, "durationMinutes": 127, "genres": ["Crime", "Mystery", "Thriller"], "directorSlug": "david-fincher", "actorSlugs": ["brad-pitt", "morgan-freeman", "gwyneth-paltrow"], "rating": 8.6, "posterUrl": "/images/movies/se7en-poster.png", "backdropUrl": "/images/movies/se7en-backdrop.png" },
  { "id": "m7", "slug": "pulp-fiction", "title": "Pulp Fiction", "shortDescription": "Interconnected stories unfold across the Los Angeles underworld.", "description": "Set in the criminal underworld of Los Angeles, Pulp Fiction follows several interconnected stories involving hitmen, a boxer, a crime boss, and a pair of small-time robbers. Through unexpected encounters, sharp dialogue, and a nonlinear narrative, the characters find their lives crossing in surprising ways. The film explores themes of chance, loyalty, violence, and redemption while blending dark humor with unforgettable moments.", "releaseYear": 1994, "durationMinutes": 154, "genres": ["Crime", "Drama"], "directorSlug": "quentin-tarantino", "actorSlugs": ["john-travolta", "samuel-l-jackson", "uma-thurman"], "rating": 8.9, "posterUrl": "/images/movies/pulp-fiction-poster.png", "backdropUrl": "/images/movies/pulp-fiction-backdrop.png" },
  { "id": "m8", "slug": "django-unchained", "title": "Django Unchained", "shortDescription": "A freed man and a bounty hunter journey across the American South.", "description": "Set in the American South before the Civil War, Django Unchained follows a formerly enslaved man who gains his freedom with the help of German bounty hunter Dr. King Schultz. The two form an unlikely partnership, traveling across the country while pursuing dangerous criminals. As Django develops his skills and confidence, he becomes determined to rescue his wife from a ruthless plantation owner, setting the stage for a dangerous confrontation.", "releaseYear": 2012, "durationMinutes": 165, "genres": ["Western", "Drama"], "directorSlug": "quentin-tarantino", "actorSlugs": ["jamie-foxx", "christoph-waltz", "leonardo-dicaprio"], "rating": 8.5, "posterUrl": "/images/movies/django-unchained-poster.png", "backdropUrl": "/images/movies/django-unchained-backdrop.png" },
  { "id": "m9", "slug": "the-shawshank-redemption", "title": "The Shawshank Redemption", "shortDescription": "Two prisoners form a lasting friendship and hold on to hope.", "description": "After being convicted of a crime he insists he did not commit, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Inside the prison, he develops an enduring friendship with fellow inmate Ellis Boyd 'Red' Redding and gradually finds ways to bring purpose and dignity to an otherwise harsh environment. Spanning several decades, the story explores friendship, perseverance, and the extraordinary power of hope.", "releaseYear": 1994, "durationMinutes": 142, "genres": ["Drama"], "directorSlug": "frank-darabont", "actorSlugs": ["tim-robbins", "morgan-freeman"], "rating": 9.3, "posterUrl": "/images/movies/the-shawshank-redemption-poster.png", "backdropUrl": "/images/movies/the-shawshank-redemption-backdrop.png" },
  { "id": "m10", "slug": "the-godfather", "title": "The Godfather", "shortDescription": "A powerful family navigates loyalty and succession in organized crime.", "description": "The Godfather tells the story of the powerful Corleone crime family, led by the respected and feared patriarch Vito Corleone. As rival families threaten their influence, Vito's youngest son Michael becomes increasingly drawn into a world he once hoped to avoid. Against a backdrop of loyalty, betrayal, and shifting power, the family faces difficult decisions that will shape its future for generations.", "releaseYear": 1972, "durationMinutes": 175, "genres": ["Crime", "Drama"], "directorSlug": "francis-ford-coppola", "actorSlugs": ["marlon-brando", "al-pacino", "james-caan"], "rating": 9.2, "posterUrl": "/images/movies/the-godfather-poster.png", "backdropUrl": "/images/movies/the-godfather-backdrop.png" },
  { "id": "m11", "slug": "parasite", "title": "Parasite", "shortDescription": "Two families from different social classes become unexpectedly connected.", "description": "The Kim family lives in a cramped basement apartment in Seoul, struggling to make ends meet through temporary jobs and small opportunities. When their son secures a tutoring position with the wealthy Park family, the Kims gradually find ways to become involved in the household. What begins as a clever plan to improve their circumstances develops into a tense and unpredictable story about social inequality, ambition, and the hidden divisions between classes.", "releaseYear": 2019, "durationMinutes": 132, "genres": ["Thriller", "Drama"], "directorSlug": "bong-joon-ho", "actorSlugs": ["song-kang-ho", "choi-woo-shik", "park-so-dam"], "rating": 8.5, "posterUrl": "/images/movies/parasite-poster.png", "backdropUrl": "/images/movies/parasite-backdrop.png" },
  { "id": "m12", "slug": "whiplash", "title": "Whiplash", "shortDescription": "A young jazz drummer trains under a demanding instructor.", "description": "Andrew Neiman is an ambitious young jazz drummer determined to become one of the greatest musicians of his generation. After joining an elite conservatory ensemble, he comes under the instruction of Terence Fletcher, a brilliant but relentlessly demanding music teacher. As Andrew pushes himself to meet increasingly impossible expectations, his pursuit of excellence begins to test his relationships, confidence, and personal limits.", "releaseYear": 2014, "durationMinutes": 107, "genres": ["Drama", "Music"], "directorSlug": "damien-chazelle", "actorSlugs": ["miles-teller", "j-k-simmons", "melissa-benoist"], "rating": 8.5, "posterUrl": "/images/movies/whiplash-poster.png", "backdropUrl": "/images/movies/whiplash-backdrop.png" },
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
