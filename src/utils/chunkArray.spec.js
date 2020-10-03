import chunkArray from "./chunkArray";

describe("chunkArray", () => {
    test("should chunk correctly from supplied value", () => {
        expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });
});
