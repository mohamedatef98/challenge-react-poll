import * as React from 'react';
import { shuffle } from 'lodash';
import { QandAsDocument, QandA } from '../types';
import PollQuestion from './PollQuestion'

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const shuffleQandAs = (qandas: QandA[]) => shuffle(qandas);

export default function Poll({ qandas }: Props) {
  const [shuffledQandAs, setSuffledQandAs] = React.useState(shuffleQandAs(qandas.questions));

  React.useEffect(
    () => setSuffledQandAs(shuffleQandAs(qandas.questions)),
    [qandas.questions]
  );

  return <PollQuestion qanda={shuffledQandAs[0]} />;
}
