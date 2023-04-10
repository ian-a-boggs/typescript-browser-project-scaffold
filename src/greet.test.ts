/* eslint-env node mocha */

import { expect } from "@esm-bundle/chai";
import greet from "./greet.ts";

describe("greet()", function () {
  it("should greet whoever it is told", function () {
    expect(greet("Bob")).to.equal("Hello Bob!");
    expect(greet("Jane")).to.equal("Hello Jane!");
  });
  it("should greet the world by default", function () {
    expect(greet()).to.equal("Hello world!");
  });
});
