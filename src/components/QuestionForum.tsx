import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { QuestionDetails } from "./QuestionDetails";

export interface Question {
  title: string;
  text: string;
  date: string;
}

export interface Answer {
  text: string;
  date: string;
}

export function QuestionForum() {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState({} as Question);

  const handleQuestion = (item: Question) => {
    setCurrentQuestion(item);
  };

  // const questions: Question[] = [
  //   {
  //     title: "How to install Vite?",
  //     text: "I am new to Vite and I want to know how to install it on my machine.",
  //     date: "2021-12-01",
  //   },
  //   {
  //     title: "How to create a new project?",
  //     text: "I want to create a new project using Vite. Can someone help me with the steps?",
  //     date: "2021-12-02",
  //   },
  //   {
  //     title: "How to add dependencies?",
  //     text: "I am trying to add some dependencies to my project. Can someone guide me through the process?",
  //     date: "2021-12-03",
  //   },
  // ];

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar questions={questions} handleQuestion={handleQuestion} />
      <QuestionDetails question={currentQuestion} />
    </div>
  );
}
