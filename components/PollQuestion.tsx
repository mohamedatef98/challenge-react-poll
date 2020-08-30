import * as React from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { QandA, Answer } from '../types';

type Props = {
    qanda: QandA
};

const shuffleAnswers = (answers: Answer[]) => shuffle(answers);

const PollQuestionContainer = styled.div`
    margin: 2rem auto;
    max-width: 400px;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;

`
const PollQuestionHeader = styled.h2``

export default function PollQuestion ({ qanda }: Props) {
    const [,] = React.useState(shuffleAnswers(qanda.answers));

    return <PollQuestionContainer>
        <PollQuestionHeader>
            {qanda.question.text}
        </PollQuestionHeader>
    </PollQuestionContainer>
}
