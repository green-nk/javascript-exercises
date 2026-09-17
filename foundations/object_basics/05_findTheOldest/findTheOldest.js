const findTheOldest = function(people) {
    let greatestAge = Number.MIN_SAFE_INTEGER;
    let greatestAgeIdx = -1;

    for (let i = 0; i < people.length; i++) {
        const age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > greatestAge) {
            greatestAge = age;
            greatestAgeIdx = i;
        }
    }

    return people[greatestAgeIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
