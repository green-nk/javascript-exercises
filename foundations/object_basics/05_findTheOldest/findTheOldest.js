const findTheOldest = function(people) {
    return people.reduce(
        (personWithGreatestAge, person) => {
            const age = getAge(person);
            const greatestAge = getAge(personWithGreatestAge);

            if (age > greatestAge) personWithGreatestAge = person;
            return personWithGreatestAge;
    });
};

function getAge(person) {
    const birthyear = person.yearOfBirth;

    let deathyear = new Date().getFullYear();
    if ("yearOfDeath" in person) deathyear = person.yearOfDeath;

    return deathyear - birthyear;
};

// Do not edit below this line
module.exports = findTheOldest;
