import * as React from 'react';
import styled from 'styled-components';
import { QandA, Answer } from '../types';
import PollAnswer from './PollAnswer';

type Props = {
  qanda: QandA;
};

const getTotalVotes = (qanda: QandA) =>
  qanda.answers.reduce((acc, { votes }) => (acc += votes), 0);

const sortAnswersByPopularity = (qanda: QandA) =>
  qanda.answers.sort((a, b) => (a.votes > b.votes ? -1 : 1));

const PollQuestionContainer = styled.div`
  margin: 2rem auto;
  max-width: 400px;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
`;
const PollQuestionHeader = styled.h2``;

const PollAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const PollVotes = styled.p`
  color: #9d9d9d;
`;

export default function PollQuestion({ qanda }: Props) {
  const [selectedAnswer, setSelectedAnswer] = React.useState<Answer | null>(
    null
  );
  const [displayVotes, setDisplayVotes] = React.useState<boolean>(false);

  const totalVotes = getTotalVotes(qanda);
  const mostPopularAnswer = sortAnswersByPopularity(qanda)[0];

  const handleAnswerSelected = (answer: Answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setDisplayVotes(true);
    }
  };

  return (
    <PollQuestionContainer>
      <PollQuestionHeader>{qanda.question.text}</PollQuestionHeader>
      <PollAnswersContainer>
        {qanda.answers.map((ans, index) => (
          <PollAnswer
            answer={ans}
            key={index}
            totalVotes={totalVotes}
            selected={ans === selectedAnswer}
            onSelect={() => handleAnswerSelected(ans)}
            displayVotes={displayVotes}
            greatest={mostPopularAnswer === ans}
          />
        ))}
      </PollAnswersContainer>
      <PollVotes>{totalVotes} votes</PollVotes>
    </PollQuestionContainer>
  );
}
