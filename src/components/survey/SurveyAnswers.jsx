import React from "react";
import _ from "lodash";

const SurveyAnswers = ({ answers }) => (
  <div>
    {_.map(answers, (value, key) => (
      <div className="border-b p-4">
        <div className="font-bold mb-2">{key}</div>
        <span>{value}</span>
      </div>
    ))}
  </div>
);

export default SurveyAnswers;
