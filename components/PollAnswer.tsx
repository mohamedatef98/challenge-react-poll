import * as React from 'react';
import styled from 'styled-components';
import { Answer } from '../types';

type Props = {
  answer: Answer;
  totalVotes: number;
  onSelect: () => void;
  selected: boolean;
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

const PollAnswerTextContainer = styled.div`
  margin: 0;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const CheckImg = styled.img`
  height: 100%;
  margin-left: 0.5rem;
`;

const PollAnswerVotes = styled.div``;

export default function PollAnswer({
  answer,
  totalVotes,
  onSelect,
  selected,
}: Props) {
  const votesPercentage = (answer.votes / totalVotes) * 100;

  return (
    <PollAnswerContainer onClick={onSelect}>
      <PollAnswerTextContainer>
        {answer.text}
        {selected && <CheckImg src={require('../static/check-circle.svg')} />}
      </PollAnswerTextContainer>
      <PollAnswerVotes>{votesPercentage.toFixed(0)}%</PollAnswerVotes>
    </PollAnswerContainer>
  );
}
