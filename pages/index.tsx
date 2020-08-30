import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questionsJson from '../questions.json';
import Poll from '../components/Poll';
import { QandAsDocument } from '../types'

const IndexPage = styled.div``;

export default () => {
  const [questions, setQuestions] = React.useState<QandAsDocument>(questionsJson);
  const handleQuestionsChange = (newQuestions: QandAsDocument) => setQuestions(newQuestions);
  return (
    <IndexPage>
      <GlobalStyles />
      <h1>Decode React Poll Challenge</h1>
      <p>
        Here is some text that is on the page in a paragraph tag. The poll will
        appear within this context below.
      </p>
      <Poll qandas={questions} onQuestionsChange={handleQuestionsChange} />
      <p>
        Here is the rest of the text on the page. We just have something down
        here for context to see it in.
      </p>
    </IndexPage>
  );
};

/**
 * TIPS:
 *
 * You can load the check image like this:
 *
 *    <img src={require('../static/check-circle.svg')} />
 *
 */
