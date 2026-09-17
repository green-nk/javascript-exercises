const findTheOldest = function(people) {
    let greatestAge = Number.MIN_SAFE_INTEGER;
    let greatestAgeIdx = -1;

    for (let i = 0; i < people.length; i++) {
        const person = people[i];

        const birthyear = person.yearOfBirth;
        let deathyear = new Date().getFullYear();
        if ("yearOfDeath" in person) deathyear = person.yearOfDeath;

        const age = deathyear - birthyear;
        if (age > greatestAge) {
            greatestAge = age;
            greatestAgeIdx = i;
        }
    }

    return people[greatestAgeIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
