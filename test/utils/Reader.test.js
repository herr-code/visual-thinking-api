const Reader = require("./../../lib/utils/Reader");

describe("Tests for ./lib/utils/Reader.js", () => {
    test("The response when reading the file cannot be null, undefined or empty (data.json)", () => {
        const result = Reader.readJsonFile("./test/utils/data/data.json");
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result.length).toBeGreaterThan(0);
    });

    test("It must print the correct data[0]", () => {
        const result = Reader.readJsonFile("./test/utils/data/data.json");
        expect(result[0].name).toBe("Leanne Graham");
        expect(result[0].username).toBe("Bret");
    });
});