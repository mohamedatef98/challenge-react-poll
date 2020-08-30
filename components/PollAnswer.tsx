import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Answer } from '../types';

type Props = {
  answer: Answer;
  totalVotes: number;
  onSelect: () => void;
  selected: boolean;
  displayVotes: boolean;
  greatest: boolean;
};

enum Colors {
  greatest = '#00ffff',
  normal = '#e8e8e8',
}

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
  position: relative;
  &:focus {
    outline: none;
  }
`;

const PollVotesPercentageBackground = styled(motion.div)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e8e8e8;
  z-index: -1;
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
  displayVotes,
  greatest,
}: Props) {
  const votesPercentage = (answer.votes / totalVotes) * 100;

  return (
    <PollAnswerContainer onClick={onSelect}>
      {displayVotes && (
        <PollVotesPercentageBackground
          animate={{
            width: `${votesPercentage}%`,
            backgroundColor: greatest ? Colors.greatest : Colors.normal,
          }}
        />
      )}
      <PollAnswerTextContainer>
        {answer.text}
        {selected && <CheckImg src={require('../static/check-circle.svg')} />}
      </PollAnswerTextContainer>
      {displayVotes && (
        <PollAnswerVotes>{votesPercentage.toFixed(0)}%</PollAnswerVotes>
      )}
    </PollAnswerContainer>
  );
}
