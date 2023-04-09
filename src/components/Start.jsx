import { useRef } from 'react'
import './start.css'

const Start = ( {setUsername} ) => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }

  return (
    <div className="start">
        <input type="text" placeholder="Digite seu nome" className="input" ref={inputRef} />
        <button className="startBtn" onClick={handleClick}>Começar</button>
    </div>
  )
}

export default Start