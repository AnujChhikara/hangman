import { useState } from 'react'
import './App.css'
import words from "./words.json"
import Keyboard from './keyboard'
import HangmanDrawing from './hangmanDrawing'
import HangmanWord from './hangmanWord'

function App() {
  const[wordToGuess,setWordToGuess ] = useState(()=> {
    return words[Math.floor(Math.random() * words.length)]
  })
  
  const[guessLetters, setGuessLetters] = useState<string[]>([])

  return (
    <div className="min-h-screen flex flex-col justify-start items-center ">
      <div className='text-center text-xl'>Lose Win</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>

    
  </div>
  )
}

export default App
