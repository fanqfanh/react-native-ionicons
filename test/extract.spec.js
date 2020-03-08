const extract = require("../script/extract");

const add =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const addCircleOutline =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 176v160M336 256H176' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

describe("extract path from SVG icon", () => {
  it("should extract the only path", () => {
    expect(extract(add)).toBe("M256 112v288M400 256H112");
  });

  it("should extract nested paths", () => {
    expect(extract(addCircleOutline)).toBe(
      "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z M256 176v160M336 256H176"
    );
  });
});
