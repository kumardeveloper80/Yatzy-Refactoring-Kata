
class Yatzy {
    constructor(d1, d2, d3, d4, d5) {
        this.dice = [];
        this.dice[0] = d1;
        this.dice[1] = d2;
        this.dice[2] = d3;
        this.dice[3] = d4;
        this.dice[4] = d5;
    }
    ones = () => { return getSumOfDice(this.dice, 1) }
    twos = () => { return getSumOfDice(this.dice, 2) }
    threes = () => { return getSumOfDice(this.dice, 3) }
    fours = () => { return getSumOfDice(this.dice, 4) }
    fives = () => { return getSumOfDice(this.dice, 5) }
    sixes = () => { return getSumOfDice(this.dice, 6) }

    chance = () => { return getTotalSum(this.dice) }
    yatzy = () => { return yatzy()}

    score_pair = () => { return scorePair(this.dice) }
    two_pair = () => { return twoPair(this.dice) }

    three_of_a_kind = () => { return number_of_a_kind(this.dice, 3) }
    four_of_a_kind = () => { return number_of_a_kind(this.dice, 4) }

    smallStraight = () => { return setStraight(this.dice, 15) }
    largeStraight = () => { return setStraight(this.dice, 20) }

    fullHouse = () => { return fullHouse(this.dice) }
}
const getSumOfDice = (dice, value) => {
    let sum = 0;
    for (let i = 0; i < dice.length; i++)
        if (dice[i] === value)
            sum += value;
    return sum;
} 
const getTotalSum = (dice) => {
    let total = 0;
    for (let i = 0; i < dice.length; i++)
        total += dice[i];
    return total;
}
const setStraight = (dice, value) => {
    dice.sort();
    let tallies = setTallies(dice, 0);
    if (tallies[0] == 1 &&
        tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1
        && tallies[4] == 1)
        return value;
    return 0;
}
const setTallies = (dice, inc = 1) => {
    let tallies = [0, 2, 3, 0, 0, 0, 0, 0], index = 0;
    for (let i = dice[index]; index < dice.length; i = dice[index]) {
        index += 1
        if (inc === 1)
            tallies[i - 1] += inc
        else
            tallies[i - 1]++;
    }
    return tallies;
}
const number_of_a_kind = (dice, number_of_kind) => {
    dice.sort();
    let tallies = setTallies(dice, 0)
    for (i = 0; i < 6; i++)
        if (tallies[i] >= number_of_kind)
            return (i + 1) * number_of_kind;
    return 0;
}
const setYatzy = () => {
    let tallies = setTallies()
}
const scorePair = (dice) => {
    dice.sort()
    let tallies = setTallies(dice, 0);
    for (let i = 0; i != 6; i++)
        if (tallies[6 - i - 1] >= 2)
            return (6 - i) * 2
    return 0;
}
const twoPair = (dice) => {
    dice.sort();
    let tallies = setTallies(dice, 0), n = 0, score = 0;
    for (i = 0; i < 6; i += 1)
        if (tallies[6 - i - 1] >= 2) {
            n++;
            score += (6 - i);
        }
    score = n === 2 ? score * 2 : 0
    return score;
}
const fullHouse = (dice) => {
    dice.sort();
    let tallies = setTallies(dice);
    let _2, _2_at;
    let _3 ,_3_at;

    
    var data = set(tallies, 2);
    _2 = data._d; _2_at = data._d_at;

    data = set(tallies, 3);
    _3 = data._d; _3_at = data._d_at;
   
    return (_2 && _3) ? _2_at * 2 + _3_at * 3 : 0;
}
const set = (tallies, value) => {
    let _d = false, _d_at = 0;
   
    for (let i = 0; i != 6; i += 1)
    if (tallies[i] == value) {
        _d = true;
        _d_at = i + 1;
    }
    return { _d , _d_at }
}

const yatzy = () => {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i != counts.length; ++i) {
    let die = counts[i];
    counts[die-1]++; }
    for (i = 0; i != 6; i++)
        if (counts[i] == 5)
            return 50;
    return 0;
}
console.log(new Yatzy().yatzy())
module.exports = Yatzy ;
