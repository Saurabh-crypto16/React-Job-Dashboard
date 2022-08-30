import React from "react";
import "./InterviewQuestions.css";
import questions from "./InterviewData";

function InterviewQuestions() {
  return (
    <div className="interview">
      {questions.map((q) => (
        <div className="interview-component">
          <h2 className="interview-question">{q.question}</h2>
          <h4 className="interview-answer">Answer - {q.answer}</h4>
        </div>
      ))}
      <div className="bottom"></div>
    </div>
  );
}

export default InterviewQuestions;
