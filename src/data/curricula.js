const commonSubjects = ["CA1", "CA2", "CS1", "CS2"];

const curricula = [
  {
    name: "Ciència i Tecnologia",
    code: "CIT",
    phase: "BAT",
    subjects: [...commonSubjects, "MA1", "MA2"],
  },
  {
    name: "Humanitats i Ciències Socials",
    code: "HCS",
    phase: "BAT",
    subjects: [...commonSubjects, "LL1", "LL2"],
  },
  {
    name: "Arts",
    code: "ART",
    phase: "BAT",
    subjects: [...commonSubjects],
  },
];

export default curricula;
