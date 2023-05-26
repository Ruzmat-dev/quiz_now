import React, { useState } from 'react';
import "./style.scss"
import questions from './db';
import Result from './Result';
import Game from './Game';


function App() {

  const [state, setState] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[state];

  const onclickVariant = (index) => {
    setState(state + 1)

    if (index == question.correct) {
      setCorrect(correct + 1)
    }
  }
  console.log(state);

  return (
    <div className="App">
      {
        state != questions.length ? (<Game question={question} onclickVariant={onclickVariant} state={state} />) : (<Result correct={correct} />)
      }
    

    </div>
  );
}

export default App;