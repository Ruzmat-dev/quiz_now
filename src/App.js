import React, { useState } from 'react';
import "./style.scss"
import questions from './db';
import Result from './Result';
import Game from './Game';

// function Result({ correct }) {
//   return (
//     <div className="result">
//       <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
//       <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
//       <a href='/'>
//         <button>Попробовать снова</button>
//       </a>
//     </div>
//   );
// }


// const questions = [
//   {
//     title: 'React - это ... ?',
//     variants: ['библиотека', 'фреймворк', 'приложение'],
//     correct: 0,
//   },
//   {
//     title: 'Компонент - это ... ',
//     variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
//     correct: 1,
//   },
//   {
//     title: 'Что такое JSX?',
//     variants: [
//       'Это простой HTML',
//       'Это функция',
//       'Это тот же HTML, но с возможностью выполнять JS-код',
//     ],
//     correct: 2,
//   },
// ];


// function Game({ state, question, onclickVariant }) {
//   const persontarget = Math.round((state / questions.length) * 100);
//   console.log(persontarget);

//   return (
//     <>
//       <div className="progress">
//         <div style={{ width: `${persontarget}%` }} className="progress__inner"></div>
//       </div>
//       <h1>{question.title}</h1>
//       <ul>
//         {
//           question.variants.map((text, index) => {
//             return (
//               <li onClick={() => onclickVariant(index)} key={index}>{text}</li>
//             )
//           })
//         }
//       </ul>
//     </>
//   );
// }

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