import { describe, it } from "mocha";
import { assert } from "chai";
import { earning } from "./tax.js";

describe("Taxation", function () {
  it("Earnings that don't pay tax", function () {
    assert.isBelow(
      earning(2000),
      12000,
      "Earnings that are less than 12000 per year don't pay tax"
    );
  });
});
