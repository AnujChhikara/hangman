import React from 'react'

function HangmanWord() {
  const word = "TEST"
  const guessedLetters = ["T"]
  return (
    <div className='flex gap-1 font-mono font-semibold text-4xl '>
     {word.split("").map((letter, index) => (
      <span className=' border-black  border-b-4'><span className={`${guessedLetters.includes(letter) ? "visible" : "hidden"}  `}>{letter}</span></span>
     ))}
    </div>
  )
}

export default HangmanWord
