import * as React from 'react';
import { shuffle } from 'lodash';
import styled from 'styled-components';
import { QandAsDocument, QandA } from '../types';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const shuffleQandAs = (qandas: QandA[]) => shuffle(qandas);

const PollWrapper = styled.div``;

export default function Poll({ qandas }: Props) {
  const [shuffledQandAs, setSuffledQandAs] = React.useState(shuffleQandAs(qandas.questions));

  React.useEffect(
    () => setSuffledQandAs(shuffleQandAs(qandas.questions)),
    [qandas.questions]
  );

  return <PollWrapper>The Poll implementation goes here</PollWrapper>;
}
