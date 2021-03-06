/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default () => {
  //by attaching all codes into the "(function(){})()" = "IIFE",
  //I can make sure that if other programmers use this code, they don't have to be interfered with my variabl definitions
  (function () {
    function Question(
      this: any,
      question: string,
      answers: [],
      correct: number
    ) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }

    Question.prototype.displayQuestion = function (this: any) {
      console.log(this.question);
      for (let i = 0; i < this.answers.length; i++) {
        console.log(`${i} : ${this.answers[i]}`);
      }
    };

    Question.prototype.checkAnswer = function (this: any, answer: number) {
      if (answer === this.correct) {
        console.log("correct answer");
      } else {
        console.log("wrong answer");
      }
    };

    const q1 = new (Question as any)("1+1=2?", ["yes", "no"], 1);
    const q2 = new (Question as any)(
      "is he handsome?",
      ["maybe?", "absolutely not"],
      0
    );
    const q3 = new (Question as any)(
      "do you want to go for a walk or swimming",
      ["walk", "swimming"],
      1
    );

    const questions = [q1, q2, q3];

    function nextQuestion() {
      let n = Math.floor(Math.random() * questions.length);
      let answer = prompt(questions[n].question)!;
      questions[n].displayQuestion();
      if (answer !== "exit") {
        questions[n].checkAnswer(parseInt(answer));
        nextQuestion();
      }
    }

    nextQuestion();
  })();

  //! Encapsulation and IIFE,Closure
  //? variables inside IIEF is private information <--- can't access from outside
  //? but, it returns function or method immediately
  //? so
  //? variables <---private
  //? returend function() <--- public

  //? it means I can do like that below

  const test = (function () {
    let x = 23;
    let add = function (a: number) {
      return x + a;
    };
    return {
      publicTest: function (b: number) {
        console.log(add(b));
      },
    };
  })();

  //? test.x  <---- undefined
  //? test.add(5) <--- syntax error
  //! but, test.publicTest(5) <--- return "28"

  /****************************************************************** */
  return <div></div>;
};
