import React from "react";
import PropTypes from "prop-types";

const Schedule = ({ daySchedules }) => <>{daySchedules}</>;

Schedule.propTypes = {
  daySchedules: PropTypes.shape({
    days: PropTypes.arrayOf({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Schedule;
