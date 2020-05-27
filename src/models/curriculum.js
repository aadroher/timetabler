import curricula from "../data/curricula";
import subjects from "../data/subjects";

const getCurriculum = (code) =>
  curricula.find(({ code: curriculumCode }) => curriculumCode === code);

const curriculum = (code) => {
  const curriculum = getCurriculum(code);
  return {
    ...curriculum,
    subjects: () => [],
  };
};

export default curriculum;
