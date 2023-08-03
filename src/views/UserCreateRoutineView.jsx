import React from "react";
import { Loader } from "../components/common";
import SurveyAnswers from "../components/survey/SurveyAnswers";
import RoutineForm from "../components/routines/RoutineForm";
import { useSections } from "../hooks";

const UserCreateRoutineView = () => {
  const { survey, routine, isLoading } = useSections();

  return (
    <>
      {isLoading && <Loader /> }
      <div className="flex space-x-4">
        <div className="flex-1 shrink-0 max-h-screen overflow-scroll scrollbar-hide py-24 px-4">
          <SurveyAnswers answers={survey.answers} />
          <div className="divider mt-8" />
        </div>
        <div className="flex-1 shrink-0 max-h-screen overflow-scroll scrollbar-hide py-16 px-4">
          <RoutineForm routine={routine} />
          <div className="divider mt-8" />
        </div>
      </div>
    </>
  );
};

export default UserCreateRoutineView;
