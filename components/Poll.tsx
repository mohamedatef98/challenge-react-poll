import * as React from 'react';
import { random } from 'lodash';
import { QandAsDocument, Answer } from '../types';
import PollQuestion from './PollQuestion';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
  onQuestionsChange: (newQuestions: QandAsDocument) => void;
};

export default function Poll({ qandas, onQuestionsChange }: Props) {
  const [randomQuestionIndex] = React.useState<number>(
    random(0, qandas.questions.length - 1)
  );

  const randomQuestion = qandas.questions[randomQuestionIndex];

  const handleAnswerSelected = React.useCallback(
    (selectedAnswer: Answer) => {
      const newAnswers = randomQuestion.answers.map((answer) =>
        answer === selectedAnswer
          ? { ...answer, votes: answer.votes + 1 }
          : answer
      );
      const newQuestions = qandas.questions.map((question) =>
        question === randomQuestion
          ? { ...question, answers: newAnswers }
          : question
      );
      onQuestionsChange({ questions: newQuestions });
    },
    [qandas]
  );

  return (
    <PollQuestion
      qanda={randomQuestion}
      onAnswerSelected={handleAnswerSelected}
    />
  );
}
