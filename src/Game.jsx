import React from 'react'
import questions from './db';

function Game({ state, question, onclickVariant }) {
  const persontarget = Math.round((state / questions.length) * 100);
  console.log(persontarget);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persontarget}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => {
            return (
              <li onClick={() => onclickVariant(index)} key={index}>{text}</li>
            )
          })
        }
      </ul>
    </>
  );
}

export default Game