import './trivia.css'

const Trivia = () => {
  return (
    <div className='trivia'>
        <div className="question">Qual o maior Youtuber do mundo?</div>
        <div className="answers">
            <div className="answer">Winderson Nunes</div>
            <div className="answer">Anitta</div>
            <div className="answer">Nastia</div>
            <div className="answer correct">MrBeast</div>
        </div>
    </div>
  )
}

export default Trivia