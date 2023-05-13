const { describe, it } = require("node:test");
const assert = require("assert");
const { matchStrings } = require("../src/match-strings");

describe("matchStrings", () => {
  it("should give set of set1 string append with set2 matching string", () => {
    const [firstSet, secondSet] = [["79oklw"], ["oklw737"]];

    assert.deepStrictEqual(matchStrings(firstSet, secondSet), ["79oklw737"]);
  });

  it("should match strings for multiple number of inputs in set1 and set 2", () => {
    const firstSet = ["79oklw", "381jstc", "453usja", "535bdxv"];
    const secondSet = ["jstc331", "oklw737", "bdxv211", "usja514"];

    const expectedSet = ["79oklw737", "381jstc331", "453usja514", "535bdxv211"];

    assert.deepStrictEqual(matchStrings(firstSet, secondSet), expectedSet);
  });
});
