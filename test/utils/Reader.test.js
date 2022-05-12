describe("Tests for ./lib/utils/Reader.js", () => {
    test("The response when reading the file cannot be null, undefined or empty (data.json)", () => {
        const result = Reader.readJsonFile("./test/utils/data/data.json");
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result.length).toBeGreaterThan(0);
    });
});