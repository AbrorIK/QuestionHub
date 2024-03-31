import { Question } from "./QuestionForum";

interface Props {
  question: Question;
}

export function QuestionDetails({ question }: Props) {
  return (
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <h1 className="mt-4">{question.title}</h1>
        <p>{question.text}</p>
        <p>{question.date}</p>
      </div>
    </div>
  );
}
