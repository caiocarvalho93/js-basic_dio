const heroes = [
    { name: "Caitrippie", xp: 8500 },
    { name: "Caitfitness", xp: 7500 },
    { name: "Caihacks", xp: 500 },
    { name: "Caioimaflirt", xp: 12000 },
];


for (let i = 0; i < heroes.length; i++) {
    let heroName = heroes[i].name;
    let heroXp = heroes[i].xp;
    let heroLevel;

    if (heroXp < 1000) {
        heroLevel = "Iron";
    } else if (heroXp >= 1001 && heroXp <= 2000) {
        heroLevel = "Bronze";
    } else if (heroXp >= 2001 && heroXp <= 5000) {
        heroLevel = "Silver";
    } else if (heroXp >= 5001 && heroXp <= 7000) {
        heroLevel = "Gold";
    } else if (heroXp >= 7001 && heroXp <= 8000) {
        heroLevel = "Platinum";
    } else if (heroXp >= 8001 && heroXp <= 9000) {
        heroLevel = "Ascending";
    } else if (heroXp >= 9001 && heroXp <= 10000) {
        heroLevel = "Immortal";
    } else if (heroXp >= 10001) {
        heroLevel = "Radiant";
    }


    console.log(`The hero named ${heroName} is at the ${heroLevel} level.`);
}