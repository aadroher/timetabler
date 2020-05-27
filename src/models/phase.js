import phases from "../data/phases";
import curricula from "../data/curricula";

const phase = (code) => ({
  ...phases.find(({ code: phaseCode }) => phaseCode === code),
  curricula: () => curricula.filter(({ phase }) => phase === code),
});

export default phase;
