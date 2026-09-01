// I believe this only effectively works for finding the last round. It likely can be easily extended to solve the entire problem, but I have not succeeded in this.

const allPeople = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const rounds = [
    [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P']
    ],
    // Add other rounds here...
];
const hasNotMet = {};
for (const person of allPeople) {
    hasNotMet[person] = allPeople.filter(person1 => (person1 !== person) && !rounds.flatMap(round => round.filter(group => group.includes(person)).flatMap(group => group.filter(person1 => person1 !== person))).includes(person1));
};
console.log(hasNotMet);