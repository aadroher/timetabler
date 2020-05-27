import curriculum from "./curriculum";

describe("phase", () => {
  it("loads", () => {
    const cit = curriculum("CIT");
    console.log(cit);
    console.log(cit.subjects());
  });
});
