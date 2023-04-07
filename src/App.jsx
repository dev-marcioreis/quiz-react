import { useEffect, useMemo, useState } from 'react';
import './App.css'
import Trivia from './components/Trivia';
import data from './data'

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('R$ 0')

  const moneyPyramid = useMemo(() => 
    [
      {id: 1, amount: 'R$ 100,00'},
      {id: 2, amount: 'R$ 200,00'},
      {id: 3, amount: 'R$ 300,00'},
      {id: 4, amount: 'R$ 500,00'},
      {id: 5, amount: 'R$ 1.000,00'},
      {id: 6, amount: 'R$ 2.000,00'},
      {id: 7, amount: 'R$ 4.000,00'},
      {id: 8, amount: 'R$ 8.000,00'},
      {id: 9, amount: 'R$ 16.000,00'},
      {id: 10, amount: 'R$ 32.000,00'},
      {id: 11, amount: 'R$ 64.000,00'},
      {id: 12, amount: 'R$ 125.000,00'},
      {id: 13, amount: 'R$ 250.000,00'},
      {id: 14, amount: 'R$ 500.000,00'},
      {id: 15, amount: 'R$ 1.000.000,00'},
    ].reverse(),
   [])

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className='value'>Você Ganhou: {earned}</h1> : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {
            moneyPyramid.map(item => (
              <li className={questionNumber === item.id ? 'moneyListItem active' : 'moneyListItem'}>
                <span className='moneyListItemNumber'>{item.id}</span>
                <span className='moneyListItemAmount'>{item.amount}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
