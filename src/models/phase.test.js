import phase from "./phase";

describe("phase", () => {
  it("loads", () => {
    const bat = phase("BAT");
    console.log(bat);
    console.log(bat.curricula());
  });
});
