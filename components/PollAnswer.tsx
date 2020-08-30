import * as React from 'react';
import styled from 'styled-components';
import { Answer } from '../types';

type Props = {
  answer: Answer;
  totalVotes: number;
};

const PollAnswerContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  font: inherit;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PollAnswerText = styled.p`
  margin: 0;
`;

export default function PollAnswer({ answer, totalVotes }: Props) {
  const votesPercentage = (answer.votes / totalVotes) * 100;

  return (
    <PollAnswerContainer>
      <PollAnswerText>{answer.text}</PollAnswerText>
      <PollAnswerText>{votesPercentage.toFixed(0)}%</PollAnswerText>
    </PollAnswerContainer>
  );
}
