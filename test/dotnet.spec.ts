import { expect } from "chai";
import "mocha";
import { foo } from "../src/foo";

describe("The foo method", () => {

    it(`should return "bar"`, () => {
        // Arrange

        // Act
        const bar = foo();

        // Assert
        expect(bar).to.equal("bar");
    });

});
