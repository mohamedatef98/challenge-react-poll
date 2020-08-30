import * as React from 'react';
import { shuffle } from 'lodash';
import { QandA, Answer } from '../types';

type Props = {
    qanda: QandA
};

const shuffleAnswers = (answers: Answer[]) => shuffle(answers);

export default function PollQuestion ({ qanda }: Props) {
    const [, setSuffledAnswers] = React.useState(shuffleAnswers(qanda.answers));

    React.useEffect(
        () => setSuffledAnswers(shuffleAnswers(qanda.answers)),
        [qanda.answers]
    )

    return <div>PollQuestion</div>
}
