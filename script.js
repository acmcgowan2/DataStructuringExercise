const mcuShows =[
    `Loki`,
    `Moon Knight`
];

const starWarsShows =[
    `The Mandalorian`,
    `The Book of Boba Fett`
];

const disneyPlusShows =[
    ...mcuShows,
    ...starWarsShows,
    `The Beetles: Get Back`
];

console.log(disneyPlusShows);

const netflixMovies ={
    action: `Extraction`,
    crime: `The Irishman`
};

const amazonPrimeMovies ={
    action: `The Tomorow War`,
    drama: `One Night in Miami`
};

const streamingMovies ={
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: `Hamilton`
};

console.log(streamingMovies);

const disneyJunior =[
    `Mickey Mouse Clubhouse`,
    `Spidey and His Amazing Friends`
];

const [mickey, spidey]= disneyJunior;

console.log(mickey, spidey);

const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};

const {warMachine, theHulk} = avengers;

console.log(warMachine, theHulk);

const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};

const{blackWidow: nat, ...others} = moreAvengers;

console.log(nat, others);

// Bonus!!!
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};

const {first, second, third} = bonus;
const all = [...first, ...second, ...third];
console.log(all);

const [one, two, three, four, five, six, seven, eight, nine] = all;
