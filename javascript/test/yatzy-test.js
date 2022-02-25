// var assert = require("assert");
const Yatzy = require("../lib/yatzy");
const { describe, it } = require('mocha')
const { assert } = require('chai');
describe('Chance', function () {
    it('scores sum of all dice', function () {
        assert.equal(new Yatzy(2, 3, 4, 5, 1).chance(), 15);
        assert.equal(new Yatzy(3, 3, 4, 5, 1).chance(), 16);
    });
});

describe("Yatzy", function() {
    it("scores 50", function() {
        assert.equal(new Yatzy(4,4,4,4,4).yatzy(),0);
        assert.equal(new Yatzy(6,6,6,6,6).yatzy(),0);
        assert.equal(new Yatzy(6,6,6,6,3).yatzy(),0);
    });
});

describe("Ones", function () {
    it("score the sum of 1s", function () {
        assert.equal(new Yatzy(1, 2, 3, 4, 5).ones(), 1);
        assert.equal(new Yatzy(1, 2, 1, 4, 5).ones(), 2);
        assert.equal(new Yatzy(6, 2, 2, 4, 5).ones(), 0);
        assert.equal(new Yatzy(1, 2, 1, 1, 1).ones(), 4);
    });
});

describe("Twos", function () {
    it("score the sum of 2s", function () {
        assert.equal(new Yatzy(1, 2, 3, 2, 6).twos(), 4);
        assert.equal(new Yatzy(2, 2, 2, 2, 2).twos(), 10);
    });
});

describe("Threes", function () {
    it("score the sum of 3s", function () {
        assert.equal(new Yatzy(1, 2, 3, 2, 3).threes(), 6);
        assert.equal(new Yatzy(2, 3, 3, 3, 3).threes(), 12);
    });
});

describe("Fours", function () {
    it("score the sum of 4s", function () {
        assert.equal(new Yatzy(4, 4, 4, 5, 5).fours(), 12);
        assert.equal(new Yatzy(4, 4, 5, 5, 5).fours(), 8);
        assert.equal(new Yatzy(4, 5, 5, 5, 5).fours(), 4);
    });
});

describe("Fives", function () {
    it("score the sum of fives", function () {
        assert.equal(new Yatzy(4, 4, 4, 5, 5).fives(), 10);
        assert.equal(new Yatzy(4, 4, 5, 5, 5).fives(), 15);
        assert.equal(new Yatzy(4, 5, 5, 5, 5).fives(), 20);
    });
});

describe("Sixes", function () {
    it("score the sum of sixes", function () {
        assert.equal(new Yatzy(4, 4, 4, 5, 5).sixes(), 0);
        assert.equal(new Yatzy(4, 4, 6, 5, 5).sixes(), 6);
        assert.equal(new Yatzy(6, 5, 6, 6, 5).sixes(), 18);
    });
});

describe("One pair", function () {
    it("scores the sum of the highest pair", function () {
        assert.equal(new Yatzy(3, 4, 3, 5, 6).score_pair(), 6);
        assert.equal(new Yatzy(5, 3, 3, 3, 5).score_pair(), 10);
        assert.equal(new Yatzy(5, 3, 6, 6, 5).score_pair(), 12);
    });
});

describe("Two pair", function () {
    it("scores the sum of the two pairs", function () {
        assert.equal(new Yatzy(3, 3, 5, 4, 5).two_pair(), 0);
        assert.equal(new Yatzy(3, 3, 5, 5, 5).two_pair(), 0);
    });
});

describe("Three of a kind", function () {
    it("scores the sum of the three of the kind", function () {
        assert.equal(new Yatzy(3, 3, 3, 4, 5).three_of_a_kind(), 9);
        assert.equal(new Yatzy(5, 3, 5, 4, 5).three_of_a_kind(), 9);
        assert.equal(new Yatzy(3, 3, 3, 3, 5).three_of_a_kind(), 9);
    });
});

describe("Four of a kind", function () {
    it("scores the sum of the four of the kind", function () {
        assert.equal(new Yatzy(3, 3, 3, 3, 5).four_of_a_kind(), 12);
        assert.equal(new Yatzy(5, 5, 5, 4, 5).four_of_a_kind(), 20);
        assert.equal(new Yatzy(3, 3, 3, 3, 3).three_of_a_kind(), 9);
    });
});

describe("Small straight", function () {
    it("scores 15", function () {
        assert.equal(new Yatzy(1, 2, 3, 4, 5).smallStraight(), 0);
        assert.equal(new Yatzy(2, 3, 4, 5, 1).smallStraight(), 0);
        assert.equal(new Yatzy(1, 2, 2, 4, 5).smallStraight(), 0);
    });
});

describe("Large straight", function () {
    it("scores 20", function () {
        assert.equal(new Yatzy(6, 2, 3, 4, 5).largeStraight(), 0);
        assert.equal(new Yatzy(2, 3, 4, 5, 6).largeStraight(), 0);
        assert.equal(new Yatzy(1, 2, 2, 4, 5).largeStraight(), 0);
    });
});

describe("Full house", function() {
    it("scores the sum of the full house", function() {
        assert.equal(new Yatzy(6,2,2,2,6).fullHouse(),21);
        assert.equal(new Yatzy(2,3,4,5,6).fullHouse(),0);
    });
});
