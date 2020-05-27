import phases from "../data/phases";

const phase = (code) => ({
  ...phases.find(({ code: phaseCode }) => phaseCode === code),
});

export default phase;
