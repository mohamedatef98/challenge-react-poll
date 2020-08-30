import * as React from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { QandA, Answer } from '../types';

type Props = {
    qanda: QandA
};

const shuffleAnswers = (answers: Answer[]) => shuffle(answers);
const getTotalVotes = (qanda: QandA) => qanda.answers.reduce((acc, { votes }) => acc += votes, 0);

const PollQuestionContainer = styled.div`
    margin: 2rem auto;
    max-width: 400px;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;

`
const PollQuestionHeader = styled.h2``

const PollVotes = styled.p`
    color: #9d9d9d;
`

export default function PollQuestion ({ qanda }: Props) {
    const [,] = React.useState(shuffleAnswers(qanda.answers));
    const [totalVotes] = React.useState(getTotalVotes(qanda))

    return <PollQuestionContainer>
        <PollQuestionHeader>
            {qanda.question.text}
        </PollQuestionHeader>
        <PollVotes>
            {totalVotes} votes
        </PollVotes>
    </PollQuestionContainer>;
}
